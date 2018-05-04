const express = require('express');
const router = require('./routes/index');
const path = require('path');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const _ = require('lodash');
const bscrypt = require('bcryptjs');
const serverConfig = require('./config');

const { mongoose } = require('./db/mongoose');

var app = express();
app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.send('Index Page of Han');
});
app.get('/api',);
app.get('/bad-request',(req,res)=> {
    res.send({
        errorMessage: 'Bad Request'
    });
});
app.get('/about',(req,res)=>{
    res.send('About Page');
});


app.listen(serverConfig.port, () => {
    console.log(`Started on port ${serverConfig.port}`);
});