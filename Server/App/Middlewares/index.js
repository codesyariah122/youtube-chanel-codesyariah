import cors from 'cors'
import bodyParser from 'body-parser'
import { ApiRouter } from '../Routers/index.js'
import { MongoDB } from '../Configs/index.js'

export const Middlewares = (app, express) => {

	MongoDB()

	const corsOptions = {
		origin: process.env.DEV_ORIGIN
	}

	app.use(cors(corsOptions))
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({extended: true}))

	app.use('/api/data', ApiRouter)

}