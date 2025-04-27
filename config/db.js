//Archivo para la conexión con la base de datos de mongoDB
const mongoose = require('mongoose');
require('dotenv').config();

//Configura la conexion con el servidor trayendo MONGO_URI desde el archivo .env
const dbConnection = async() => {
    try {
        //console.log(process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Base de datos conectada con éxito');
    } catch (error) {
        console.error(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }
};

module.exports = {
    dbConnection
};