import express from 'express'
import setup from '.'
import { userCreate, userUpdate, userDetails, userFind, userList, userDelete, status400 } from '../api/controllers/employee.controller'

const router = express.Router()

router.get('/list', userList)
router.get('/:id', userDetails)
router.get('/findbylogin/:login', userFind)
router.put('/:id', userUpdate)
router.delete('/:id', userDelete)
router.post('/create', userCreate)
router.options('/*', (req, res) => { res.status(setup.status200.code).set(setup.headers).end() })
router.all('/*', status400)

export default router
