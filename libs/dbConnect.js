// conf.js
import mongoose from 'mongoose';

const connection = {}; /* creating connection object*/

async function dbConnect() {
  /* check if we have connection to our databse*/
  if (connection.isConnected) {
    return;
  }

  /* connecting to our database */
  const db = await mongoose.connect(
    'mongodb+srv://ttcheroku:6DswAv9YY4@cluster0.mwnsw.mongodb.net/Test?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  );

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
// var mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/Test', {
//   useUnifiedTopology: true,
// });
// // Connection URL
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//   console.log('DB Connected');
// });
// const userSchema = new Schema({
//   id: { type: String },
//   email: { type: String },
//   password: { type: String },
//   //   createdAt: { type: Number },
// });

// const Users = mongoose.model('patternmodels', userSchema, 'patternmodels');
// // = mongoose.model('patternmodels', userSchema);
// module.exports = {
//   Users,
// };
