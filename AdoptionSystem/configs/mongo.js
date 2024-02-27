//Configuraci[on a la conexión a la DB
'use strict'

import mongoose from "mongoose"

export const connect = async()=>{
    try {
        //Proceso de conexion
        mongoose.connection.on('error', ()=>{
            console.log('MongoDB | could not be connect to mongodb')
            mongoose.disconnect()
        })
        mongoose.connection.on('connecting', ()=> {
            console.log('MongoDB | try connecting')
        })
        mongoose.connection.on('connected', ()=> {
            console.log('MongoDB | connected to mongodb')
        })
        mongoose.connection.on('open', ()=> {
            console.log('MongoDB | connected to database')
        })
        mongoose.connection.on('reconected', ()=> {
            console.log('MongoDB | reconnected to mongodb')
        })
        mongoose.connection.on('disconnected', ()=> {
            console.log('MongoDB | disconected')
        })
        await mongoose.connect(process.env.URI_MONGO,{
            serverSelectionTimeoutMS: 500,
            maxPoolSize: 50
        })
    } catch (error) {
        console.error(err)

    }
}