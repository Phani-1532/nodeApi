const express = require('express')

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/api', (req, res) => {
    const data  = req.body
    console.log(data)
     res.send(data)
})

app.put('/api/:id', (req, res) => {
    const id = req.params.id
    const data  = req.body
    res.json({
        message: `Data with id ${id} updated`,
        data: data
    })
    console.log(data)
})


app.delete('/api/:id', (req, res) => {
    const data  = req.body
    const id = req.params.id
    res.json({
        message: `Data with id ${id} deleted`
    })

    console.log(data)
})



const port = 3000

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})