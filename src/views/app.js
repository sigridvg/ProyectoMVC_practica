const express = require("express");
const path = require('path')
const app = express();


app.use(express.static(path.resolve(_dirname,'../public')))

app.listen(3001, ()=> {
    console.log("Servidor corriendo");
})