const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/api', (req, res) => {
    const data  = req.body
    res.send('Data received successfully', data)
})

app.put('/api/:id', (req, res) => {
    const id = req.params.id
    const data  = req.body
    res.json({
        message: `Data with id ${id} updated`,
        data: data
    })
})

app.delete('/api/:id', (req, res) => {
    const id = req.params.id
    res.json({
        message: `Data with id ${id} deleted`
    })
})


const port = 3000

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})