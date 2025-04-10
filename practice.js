const express = require('express');
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/api', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send('Data received!')
})

app.put('/api/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;
    console.log(`Updating data with ID: ${id}`, data);
    res.send(`Data with ID ${id} updated!`)
})

app.delete('/api/:id', (req, res) => {
    const id = req.params.id;
    console.log(`Deleting data with ID: ${id}`);
    res.send(`Data with ID ${id} deleted!`)
})


const PORT = 4000

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})