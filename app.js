const express = require('express');
const path = require('path');
const app = express();

// Hacer la carpeta publica Public
const publicFolderPath = path.join(__dirname,'./public');
app.use(express.static(publicFolderPath));
app.use(express.static( 'public' ) )


//Levantar el servidor
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});
app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
})