const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow any origin (for dev)
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
let countryList1 = require("./countryList");

app.get('/countrycode', (req, res) => {
    res.json(countryList1);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});