const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cors = require('cors');

const shoeRouter = require('./routes/shoesRoutes');

const PORT = 3001;
const MONGO_URL = 'mongodb+srv://defigueiredojoaopedro:wDfMmBxYYDv8za7I@sapatos.edkmlrf.mongodb.net/Shoes?retryWrites=true&w=majority';

app.use(bodyParser.json());
app.use(cors());

mongoose
    .connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(con => {
        console.log("Successfully connected to the db");
    })
    .catch(err => console.log(err));

// 3) Route
app.use('/api/shoes', shoeRouter);

app.get('/health', (req, res) => {
    res.status(200).json({ message: "working fine...", app: "loja de sapatos" });
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Exporting the server instance for testing
module.exports = server;
