import setup from './setup'
import express from 'express'

export default (server) => {
  // Definir URL base para todas as rotas
  const router = express.Router()
  server.use(setup.api, router)

  // Rotas de Ciclo de Pagamento
  // const BillingCycle = require('../api/billingCycle/billingCycleService')
  // BillingCycle.register(router, '/billingCycles')
}
