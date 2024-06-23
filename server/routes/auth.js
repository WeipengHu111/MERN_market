import express from "express";

const router = express.Router()

app.get('/api', (req, res) => {
    res.json({ //response as json data
        data: 'hello from API' // date is the key, 'xxxx' is the value
    });
}); 