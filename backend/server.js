import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import  productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import {errorHandler, notFound} from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

app.use((express.json()))

app.use((req, res, next)=>{
  console.log(req.originalUrl)
  next()
})

app.get('/', (req, res)=>{
  res.send('API is running....')
})

app.use('/api/products', productRoutes)
app.use('/api/user', userRoutes)

app.use(errorHandler)


app.use(notFound)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running ${process.env.NODE_ENV}! Better catch it! PORT ${PORT}`))