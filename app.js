const express = require('express');
const path = require('path');
const app = express(); //Almacena la respuesta de express

// Hacer la carpeta publica Public
const publicFolderPath = path.join(__dirname,'./public');
app.use(express.static(publicFolderPath));
app.use(express.static( 'public' ) )

app.use(express.static(__dirname+"/views" ))

//Levantar el servidor
app.listen(process.env.PORT || 3000, function()  {
    console.log("Servidor corriendo en el puerto 3000");
});

// URL DE CADA HTML
app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
})

app.get('/register',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
})

app.get('/login',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
})