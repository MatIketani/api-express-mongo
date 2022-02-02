const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/bookController')(app);

app.listen(80,()=>{
    console.log('App running on port 80.')
});