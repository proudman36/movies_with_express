const mongoose = require('mongoose')

const express = require('express');
const app = express();

const actorRoute = require('./src/routes/actor')
const directorRoute = require('./src/routes/director')

require('dotenv').config();

app.use(express.json());
app.use(actorRoute);
app.use(directorRoute)
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server on port', port)
})


mongoose.connect(process.env.MONGODB_URI).then(()=>console.log('Connected to MongoDB Atlass')).catch((error)=> console.log(error))


