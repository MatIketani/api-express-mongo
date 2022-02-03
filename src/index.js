const express = require('express');
const morgan = require('morgan')

const app = express();

// Enable middlewares.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

//Pass app variable to another files.
require('./routes/bookRoutes')(app);
require('./middlewares/localOnly')(app);

app.listen(80,()=>{
    console.log('App running on port 80.')
});
