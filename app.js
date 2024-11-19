const express = require('express')
const app = express()
const port = 3000
const posts = require('./posts.js')
app.use(express.static('public'))

// console.log(posts);

///////////CRUD/////////////////

// index
app.get('/posts', (req, res) => {
    res.json(posts)
})

// show
app.get('/posts/:id',(req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.find((el) => el.id === id)

    if (post){
        console.log(`Ecco il post con id: ${id}`)
        res.json(post)
    } else {
        res.json({message: 'Post non trovato'})
    }
})

// store 
app.post('/posts', (req, res) => {
    res.send('Creo un nuovo post')
})

// update
app.put('/posts/:id', (req, res) => {
    const id = req.params.id
    res.send(`Aggiorno il post con id: ${id}`)
})

// modify
app.patch('/posts/:id', (req, res) => {
    const id = req.params.id
    res.send(`Modifico il post con id: ${id}`)
})

// destroy
app.delete('/posts/:id', (req, res) => {
	const id = req.params.id
	res.send(`Elimino il post con id: ${id}`)
})






app.listen(port,() => {
    console.log(`Server listening on port: ${port}`);
})