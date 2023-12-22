import express from 'express'
import usuario from '@routes/usuario'

const server = express()

server.use('/usuario', usuario)


export default server
