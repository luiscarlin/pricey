import express from 'express'
import productsRouter from './routes/products'

const app = express()

app.use('/api/products', productsRouter)

app.listen(5000, () => console.log('Gator app listening on port 5000!'))
