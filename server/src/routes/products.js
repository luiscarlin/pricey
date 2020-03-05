import express from 'express'
import Product from '../models/product'

const router = express.Router()

router.get('/', async (req, res) => {
  const allProducts = await Product.getAll()

  res.send({ products: allProducts })
})

export default router
