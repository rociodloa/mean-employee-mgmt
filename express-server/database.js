// Dependencies
const mongoose = require('mongoose');

// MongoDB URL from the docker-compose file
//const dbHost = 'mongodb://database/mean-docker';
const dbHost = 'mongodb://localhost/mean-employees';

/*mongoose
    .connect(dbHost, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error('Error connecting' + err ));*/

    var connectWithRetry = function() {

        return mongoose.connect(dbHost, { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
            if (err) {
                console.error('Failed to connect to mongo on startup - retrying in 1 sec', err);
                setTimeout(connectWithRetry, 1000);
            }
        });

        /*return mongoose.connect(db, function(err) {
            if (err) {
                console.error('Failed to connect to mongo on startup - retrying in 1 sec', err);
                setTimeout(connectWithRetry, 1000);
            }
        });*/
    };
    connectWithRetry();

module.exports = mongoose; 