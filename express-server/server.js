// Dependencies
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

// only mongoose
const { mongoose } = require('./database');

// Settings

// Get port from environment and store in Express.
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

// Cross Origin middleware
/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  })*/

// Routes
app.use('/api/employees', require('./routes/employee.routes'));
app.use('/api/projects', require('./routes/project.routes'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
});
