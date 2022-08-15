import mongoose from "mongoose";

const db = mongoose.connection

db.on('connected', ()=>{
    console.log('Se ha conectado a la base de datos 🟢')
})

db.on('connecting', () => {
    console.info('Intentando contectar a la base de mongo')
})

db.on('disconnected', () => {
    console.log('Se ha desconectado de la base de datos')
})

db.on('error', () => {
    console.error('Ha ocurrido un error 🔴')
})

mongoose.connect('mongodb://localhost:27017', () => {
    console.log('Ejercicios:')
})