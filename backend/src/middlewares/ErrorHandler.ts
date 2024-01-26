import InternalError from '@utils/InternalError'
import { failResponse } from '@utils/Response'
import { Request, Response, NextFunction } from 'express'

import { z } from 'zod'

export const ErrorHandler = async (error: InternalError, _: Request, res: Response, next: NextFunction) => {
	if (error) {


		if (error.name === 'SyntaxError') {
			return res.status(406).json(failResponse(error.toString()))
		}

		if (error instanceof z.ZodError) {
			const erros = error.issues.map((issue) => {
				return {
					campo: issue.path[0],
					erro: issue.message,
				}
			})
			return res.status(400).json(failResponse('Erro de validação', erros))
		}
		console.log(error.mensagem || error.message || 'Erro interno')
		return res.status(500).json(failResponse(error.mensagem || error.message || 'Erro interno', undefined,500))
	}

	return next()
}

