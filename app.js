const express = require('express')
const app = express()
const port = 3000
const posts = require('./posts.js')
app.use(express.static('public'))

// console.log(posts);

///////////CRUD/////////////////

// index
app.get('/', (req, res) => {
    res.json(posts)
})

// show
app.get('/:id',(req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.find((el) => el.id === id)

    if (post){
        console.log(`Ecco il post con id: ${id}`)
        res.json(post)
    } else {
        res.json({message: 'Post non trovato'})
    }
})


app.listen(port,() => {
    console.log(`Server listening on port: ${port}`);
})