require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./DB/connection')
const routes = require('./Routes/router')

const pb_Server = express()
pb_Server.use(cors())
pb_Server.use(express.json())
pb_Server.use(routes)

const PORT = 3000 || process.env.PORT
pb_Server.listen(PORT,()=>{
    console.log(`ProBuy server stared at port ${PORT} and waiting for client requests`);
})

pb_Server.get('/',(req,res)=>{
    res.send(`<h1>ProBuy server started.. and waiting for client requests!!!</h1>`)
})