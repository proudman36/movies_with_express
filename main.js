const mongoose = require('mongoose')

const express = require('express');
const app = express();

const routes = require('./src/routes/actor')

require('dotenv').config();

app.use(express.json());
app.use(routes);
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server on port', port)
})


mongoose.connect(process.env.MONGODB_URI).then(()=>console.log('Connected to MongoDB Atlass')).catch((error)=> console.log(error))


