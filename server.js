const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('Index Page of Han');
});
app.get('/bad-request',(req,res)=> {
    res.send({
        errorMessage: 'Bad Request'
    });
});
app.get('/about',(req,res)=>{
    res.send('About Page');
});
app.listen(3000);