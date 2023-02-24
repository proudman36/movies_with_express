const mongoose = require('mongoose')

const express = require('express');
const app = express();

const actorRoute = require('./src/routes/actor')
const directorRoute = require('./src/routes/director')
const mov_dirRoute = require('./src/routes/movie_direction')
const mov_casRoute = require('./src/routes/movie_cast')
const movieRoute = require('./src/routes/movie')
const reviewerRoute = require('./src/routes/reviewer')
const mov_genRoute = require('./src/routes/movie_genres')
const genresRoute = require('./src/routes/genres')
const ratingRoute = require('./src/routes/rating')

require('dotenv').config();

app.use(express.json());
app.use(actorRoute);
app.use(directorRoute)
app.use(mov_dirRoute)
app.use(mov_casRoute)
app.use(movieRoute)
app.use(reviewerRoute)
app.use(mov_genRoute)
app.use(genresRoute)
app.use(ratingRoute)
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server on port', port)
})


mongoose.connect(process.env.MONGODB_URI).then(()=>console.log('Connected to MongoDB Atlass')).catch((error)=> console.log(error))


