import express from 'express'
import productController from '../api/controllers/employee.controller'

// Require the controllers WHICH WE DID NOT CREATE YET!!
const router = express.Router()

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', productController.test)
router.post('/create', productController.product_create)
router.get('/:id', productController.product_details)
router.get('/list', productController.product_list)
router.put('/:id/update', productController.product_update)
router.delete('/:id/delete', productController.product_delete)

export default router
