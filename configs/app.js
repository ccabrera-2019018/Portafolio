import express from "express";
import cors from 'cors'
import helmet from 'helmet'
import morgan from "morgan";
import { config } from "dotenv";
import { apiLimiter } from "./apiLimiter.js";
import conversionRoutes from "../src/conversions/conversions.routes.js"

config()
const port = process.env.PORT 

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(express.json())
app.use(helmet())
app.use(morgan('dev'))
app.use(apiLimiter)

app.use('/convert', conversionRoutes)

export const initServer = ()=>{
    app.listen(port)
    console.log(`Server running in port ${port}`)
}