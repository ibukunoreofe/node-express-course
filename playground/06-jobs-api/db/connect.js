const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url)

  // mongoose.set('useNewUrlParser', true);
  // mongoose.set('useFindAndModify', false);
  // mongoose.set('useCreateIndex', true);
  // mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
    // return mongoose.connect(url, {
    //     useNewUrlParser: true,
    //     // useCreateIndex: true,
    //     // useFindAndModify: false,
    //     useUnifiedTopology: true,
    // })
}

module.exports = connectDB
