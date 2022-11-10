import mongoose from "mongoose";
import server from './src/app'
require('dotenv').config()

const port = 10000

mongoose   
.connect(process.env.MONGODB_URI || "")
.then(() => console.log("Connected to Database UltraGames"))
.catch((error) => console.log(error))

server.listen(port, () => {
    console.log("Server listening in port", port)
})