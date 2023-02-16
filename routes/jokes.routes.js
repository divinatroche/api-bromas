const ControladorJokes = require('../controllers/jokes.controllers')

module.exports = (app) =>{
    app.get('/api/obtenerJokes', ControladorJokes.obtenerJokes) 
    app.post('/api/crearJokes', ControladorJokes.crearJoke) 
    app.put('/api/editarJokes/:id', ControladorJokes.editarJoke)
    app.delete('/api/eliminarJoke/:id', ControladorJokes.eliminarJoke)
}

