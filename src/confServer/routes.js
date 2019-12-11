import express from 'express'
import setup from './setup'
import { userCreate, userUpdate, userDetails, userList, userDelete, errorBadRequest } from '../api/controllers/employee.controller'

const router = express.Router()

router.get('/list', userList)
router.get('/:id', userDetails)
router.put('/:id', userUpdate)
router.delete('/:id', userDelete)
router.post('/create', userCreate)
router.options('/*', (data, res) => {
  res.status(setup.status200.code).set(setup.headers).end()
})
router.all('/*', errorBadRequest)

export default router
