const mongoose = require('mongoose')

// Schema MODELO aka Tabla aka Colection
const SchemaJoke = mongoose.Schema({
    setup:String,
    punchline:String,
})

const Joke  = mongoose.model('Joke', SchemaJoke)

module.exports = Joke