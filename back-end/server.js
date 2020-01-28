const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cron = require('node-cron');

import { MovieManager } from './src/services/MovieManager';

require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));


/* Cron part */

cron.schedule('0 1 * * *', () => {
	MovieManager.cronMovies()
});

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true, 'useFindAndModify': false});
const connection = mongoose.connection;
connection.once('open', () => {
	console.log("MongoDB database connected succesfully");
});

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});

 const router = require('./src/router').default;
 app.use(router());