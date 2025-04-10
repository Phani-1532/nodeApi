const express = require('express');


const app = express();

app.use((req, res, next) => {
    console.log(`➡️  ${req.method} ${req.url}`);
    next();
});


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/api', (req, res) => {
    const data = req.body;

    if (!data || Object.keys(data).length === 0) {
        return res.status(400).json({ message: 'No data provided, bruh 😬' });
    }

    console.log('🔥 Received data:', data);

    res.status(200).json({ message: 'Data received successfully 🎉', received: data });
});


app.put('/api', (req, res) => {
    const data = req.body;
    if (!data || Object.keys(data).length === 0) {
        return res.status(400).json({ message: 'No data provided, bruh ��' });
    }
    console.log('🔥 Received data:', data)
    res.status(200).json({ message: 'Data updated successfully 🎉', updated: data });
})

app.delete('/api', (req, res) => {
    const data = req.body;
    if (!data || Object.keys(data).length === 0) {
        return res.status(400).json({ message: 'No data provided, bruh 😬' });
    }
    console.log('🔥 Received data:', data)
    res.status(200).json({ message: 'Data deleted successfully 🎉', deleted: data });
})




const PORT = 4000

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

