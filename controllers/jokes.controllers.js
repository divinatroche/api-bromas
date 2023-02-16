const Jokes = require('../models/jokes.models')



const obtenerJokes = (req, res)=>{
    Jokes.find(req.body)
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}


const crearJoke =  (req, res)=>{
    Jokes.create(req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const editarJoke = (req, res)=>{
    Jokes.updateOne({_id: req.params.id}, req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}


const eliminarJoke = (req, res)=>{
    Jokes.deleteOne({_id: req.params.id})
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports = {
    obtenerJokes,
    crearJoke,
    editarJoke,
    eliminarJoke
}

// OTRA FORMA DE EXPORTAR
/*
    obtenerusuarios: (req, res)=>{
        Usuarios.find(req.body)
        .then((resultado)=>{
            res.json(resultado)
        }).catch((error)=>{
            console.log(error)
        })
    },
 
}
*/