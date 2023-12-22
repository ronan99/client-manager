import { NextFunction, Router, Request, Response } from 'express'
import UsuarioController from '@controllers/UsuarioController'
// import validaAutenticacao from '@middlewares/validaAutenticacao'

const router = Router()
const controller = new UsuarioController()

// router.get('/validarToken', validaAutenticacao, (req: Request, res: Response, next: NextFunction) => controller.validarToken(req, res).catch((erro) => next(erro)))
router.get('/', (req: Request, res: Response, next: NextFunction) => controller.listAll(req, res).catch((erro) => next(erro)))

export default router
