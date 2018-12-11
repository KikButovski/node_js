const mongoose = require('mongoose');

const MONGO_URL = "mongodb://oneeskamp:113322Tujh@ds129352.mlab.com:29352/game";

function initDBConnection() {
    mongoose.connect(MONGO_URL);
    mongoose.Promise = global.Promise;

    const {connection} = mongoose;

    connection.on('error', err => {
        console.error('DB error: ', err);
    });

    return connection;
}

exports.initDBConnection = initDBConnection;