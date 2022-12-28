const express = require("express");
const conectarDB = require("./config/db");

const app = express();

app.use(express.json({extended:true}))

conectarDB();

app.listen(4000, () =>{
    console.log("servidor corriendo en el puerto 4000");
});

