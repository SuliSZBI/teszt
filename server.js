require('dotenv').config();
const express = require('express');
const path = require('path');
const dbConnection = require('./utils/dbConnect');
const mongoose = require('mongoose');
const Question = require('./models/Question');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    try {
        const kerdesek = await Question.find({});

        for (let i = 0; i < kerdesek.length; i++) {
            kerdesek[i].kerdes = kerdesek[i].kerdes.replace(/"/g, 'ß');
            for (let j = 0; j < kerdesek[i].valaszok.length; j++) {
                kerdesek[i].valaszok[j] = kerdesek[i].valaszok[j].replace(
                    /"/g,
                    'ß'
                );
            }

            for (let j = 0; j < kerdesek[i].joValaszok.length; j++) {
                kerdesek[i].joValaszok[j] = kerdesek[i].joValaszok[j].replace(
                    /"/g,
                    'ß'
                );
            }
        }

        res.status(200).render('index.ejs', { kerdesek });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});

dbConnection
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err.message);
    });
