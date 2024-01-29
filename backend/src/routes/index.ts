import client from '@routes/client'
import express from 'express'

const server = express()

server.use('/client', client)


export default server
