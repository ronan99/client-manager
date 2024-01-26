import {Request, Response} from 'express'
import database from '../database'
import { userCreateSchema } from '../zodValidations/User/create'
import InternalError from '@utils/InternalError'
import { successResponse } from '@utils/Response'

export default class UsuarioController {

	async listAll(req: Request, res: Response){
		try {
			const {username, password, email} = userCreateSchema.parse(req.query)
			const values = [username, password, email]
			
			let data = await database.insert(`INSERT INTO Users(username, password, email) values($1, $2, $3) returning *`, values)
			return res.status(200).json(successResponse("Usuário criado", data))
		} catch (error) {
			console.log(error)
			if(error instanceof InternalError) throw new InternalError(error.message)
			throw error
		}
	}
}


