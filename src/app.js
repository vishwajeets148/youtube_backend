import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express()

app.use(cookieParser());
// app.use(express.json({limit: '16kb'}))

app.use(cors(corsOptions));
app.use(express.static('public'))
app.use(express.json());

app.get('/',(req, res) =>{
  res.send('Hello World')
})


var corsOptions = {
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200,
    credentials: true
  }


import userRouter from './routes/user.routes.js'

app.use('/api/users', userRouter)



export { app }