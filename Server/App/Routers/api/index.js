import Router from 'express'
import { getAllData, findById, findByUsername, createUser, updateUser, deleteUser } from '../../Controllers/index.js'

const ApiRouter = Router()

ApiRouter.get('/show', getAllData)
ApiRouter.get('/show/id/:id', findById)
ApiRouter.get('/show/username/:username', findByUsername)
ApiRouter.post('/store', createUser)
ApiRouter.put('/updated/:id', updateUser)
ApiRouter.delete('/deleted/:id', deleteUser)

export default ApiRouter