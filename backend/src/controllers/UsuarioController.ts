import {Request, Response} from 'express'

export default class UsuarioController {

	async listAll(req: Request, res: Response){
		if(req) return res.status(200).json("sucesso")
		return res.status(200).json("Sucesso")
	}
}