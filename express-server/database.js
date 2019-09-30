// Dependencies
const mongoose = require('mongoose');

// MongoDB URL from the docker-compose file
//const dbHost = 'mongodb://database/mean-docker';
const dbHost = 'mongodb://localhost/mean-employees';

mongoose
    .connect(dbHost, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error('Error connecting' + err ));

module.exports = mongoose; 