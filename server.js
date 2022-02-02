const express = require('express');
require('dotenv').config();
const router = require('express').Router();

const routes = require('./routes')

const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(PORT, () => { console.log(`Server listening on PORT`); })