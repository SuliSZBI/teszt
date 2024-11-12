const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema(
    {
        targy: {
            type: String,
        },
        tipus: {
            type: String,
        },
        kerdes: {
            type: String,
        },
        valaszok: [
            {
                type: String,
            },
        ],
        joValaszok: [
            {
                type: String,
            },
        ],
        kep: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const QuestionModel = mongoose.model('question', QuestionSchema);

module.exports = QuestionModel;
