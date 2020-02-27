import express from 'express'
import Product from '../models/product'

const router = express.Router()

router.get('/', async (req, res) => {
  await Product.getAll()
  res.send({ data: 'from server' })
})

export default router
