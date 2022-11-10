import  express from 'express'
import  morgan from 'morgan'
import  cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import routes from './routes/index'
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(cookieParser())
server.use(cors())
server.use(morgan('dev'))
server.use(express.json())
server.use('/', routes)


export default server