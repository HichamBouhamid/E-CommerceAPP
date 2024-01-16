const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const app = express()
const productRouter = require('./routes/Products')
const authRouter = require('./routes/Auth')
const userRouter = require('./routes/User')
const cartRouter = require('./routes/Cart')
const orderRouter = require('./routes/Order')
const port = 3000

dotenv.config()
mongoose.connect(process.env.MONGO_URL).then(() => console.log('Connect')).catch((err) => console.log(err))

app.use(express.json({limit: '10mb'}))
app.use(express.urlencoded({limit: '10mb', extended: true}))

app.use('/api/products', productRouter)
app.use('/api', authRouter)
app.use('/api/users', userRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${process.env.PORT}!`))