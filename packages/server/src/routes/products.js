import express from 'express'
import Product from '../models/product'

const router = express.Router()

router.get('/', async (req, res) => {
  const allProducts = await Product.getAll()

  console.log(allProducts)
  res.send({ data: allProducts })
})

export default router
