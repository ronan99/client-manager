import express from 'express'
import cors from 'cors'
import Routes from './routes/index'
import { ErrorHandler } from '@middlewares/ErrorHandler'

export class App {
    public server: express.Application

    constructor(){
		this.server = express()
		this.server.disable('x-powered-by')
		this.server.use(cors())
		this.server.options('*', cors())
		this.server.set('trust proxy', true)
		this.middleware()
		this.rotas()
		this.errors()
	}


	private middleware() {
		this.server.use(express.json({ limit: '50mb' }))
	}

	private rotas() {
		this.server.use(Routes)
	}

	private errors() {
		this.server.use(ErrorHandler)
	}

}