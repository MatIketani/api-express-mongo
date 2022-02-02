const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

require('./routes/bookRoutes')(app);
require('./middlewares/localOnly')(app);

app.listen(80,()=>{
    console.log('App running on port 80.')
});