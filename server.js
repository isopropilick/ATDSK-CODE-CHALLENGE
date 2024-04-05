const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const calculateMaxProduct = require('./calculateMaxProduct');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/calculate', (req, res) => {
    const error = "Array needs at least three numbers and not contain characters";
    const array = req.body.numbers.split(',').map(num => parseInt(num, 10));
    if (array.includes(NaN) || array.length < 3) {
        return res.status(400).json({ error: error });
    }else {
        const maxProduct = calculateMaxProduct(array);
        res.json({maxProduct});
    }
});

app.listen(PORT, () => {
});