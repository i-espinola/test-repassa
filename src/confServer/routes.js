import express from 'express'
import { userCreate, userUpdate, userDetails, userFind, userList, userDelete, status200, status400 } from '../api/controllers/employee.controller'

const router = express.Router()

router.get('/list', userList)
router.get('/:id', userDetails)
router.get('/findbylogin/:login', userFind)
router.put('/:id', userUpdate)
router.delete('/:id', userDelete)
router.post('/create', userCreate)
router.options('/*', status200)
router.all('/*', status400)

export default router
