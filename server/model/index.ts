import mongoose from 'mongoose';
const dbName = 'properties';

mongoose.connect(`mongodb://localhost:27017/${dbName}`, {});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
  console.log('mongoose is connected!');
});

module.exports = mongoose;
