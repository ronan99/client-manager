import express from 'express'
import cors from 'cors'
import Routes from './routes/index'
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
		this.erros()
	}


	private middleware() {
		this.server.use(express.json({ limit: '50mb' }))
	}

	private rotas() {
		this.server.use(Routes)
	}

	private erros() {
		// this.server.use(ErrorHandler)
	}

}