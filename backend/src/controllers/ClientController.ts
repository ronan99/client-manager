import InternalError from '@utils/InternalError'
import { successResponse } from '@utils/Response'
import { Request, Response } from 'express'
import database from '../database'
import findBestRoute from '../lib/CalculateRoute'
import { sqlFilter } from '../lib/MountFilter'
import { clientCreateSchema } from '../zodValidations/User/create'
import { clientFindSchema } from '../zodValidations/User/find'

export default class ClientController {

	tableName = "client"

	async find(req: Request, res: Response){
		try {
			const {name, email, phone} = clientFindSchema.parse(req.query)
			const values = {
				name, email, phone
			}

			
			let filter = sqlFilter(values)
			let data = await database.query(`SELECT * FROM ${this.tableName} ${filter.where}`, filter.values)

			return res.status(200).json(successResponse("Consulta de usuários feita com sucesso", data))
		} catch (error) {
			if(error instanceof InternalError) throw new InternalError(error.message)
			throw error
		}
	}

	async create(req: Request, res: Response){
		try {
			const {name, email, phone, x, y} = clientCreateSchema.parse(req.body)
			const coordinates = `(${x}, ${y})`
			const values = [name, email, phone, coordinates]
			
			let data = await database.insert(`INSERT INTO ${this.tableName}(name, email, phone, coordinates) values($1, $2, $3, $4) returning *`, values)
			return res.status(200).json(successResponse("Usuário criado", data[0]))
		} catch (error) {
			if(error instanceof InternalError) throw new InternalError(error.message)
			throw error
		}
	}

	async getBestRoute(_: Request, res: Response){
		try {
			let query = `SELECT * FROM ${this.tableName};`

			let data = await database.query(query)

			console.log(data)
			const route = findBestRoute(data)

			return res.status(200).json(successResponse("Coordenadas", route))
		} catch (error) {
			if(error instanceof InternalError) throw new InternalError(error.message)
			throw error
		}
	}
	
}


