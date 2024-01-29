import ClientController from '@controllers/ClientController'
import { NextFunction, Request, Response, Router } from 'express'

const router = Router()
const controller = new ClientController()

router.get('/', (req: Request, res: Response, next: NextFunction) => controller.find(req, res).catch((erro) => next(erro)))
router.post('/create', (req: Request, res: Response, next: NextFunction) => controller.create(req, res).catch((erro) => next(erro)))
router.get('/getBestRoute', (req: Request, res: Response, next: NextFunction) => controller.getBestRoute(req, res).catch((erro) => next(erro)))

export default router
