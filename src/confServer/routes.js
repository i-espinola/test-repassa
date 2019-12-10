import express from 'express'
import { userCreate, userUpdate, userDetails, userList, userDelete, errorBadRequest } from '../api/controllers/employee.controller'

const router = express.Router()

router.get('/list', userList)
router.get('/:id', userDetails)
router.put('/:id', userUpdate)
router.delete('/:id', userDelete)
router.post('/create', userCreate)
router.all('/*', errorBadRequest)

export default router
