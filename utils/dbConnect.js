const mongoose = require('mongoose');

const dbConnection = mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Sikeres csatlakozás az adatbázishoz!');
    })
    .catch((err) => {
        console.log(`Valami hiba történt! Hiba: ${err.message}`);
    });

module.exports = dbConnection;
