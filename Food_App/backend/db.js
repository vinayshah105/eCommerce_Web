const mongoose = require('mongoose');
const mongoURI =
  'mongodb+srv://uberdb:Zxcvbnm%40123@atlascluster.zzdbmph.mongodb.net/uberdb?retryWrites=true&w=majority';

const mongoDB = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, result) => {
      if (e) console.log('Error: ', e);
      else {
        console.log('connected success');
        const fetch_data = mongoose.connection.db.collection('food_items');
        fetch_data.find({}).toArray(function (err, data) {
          if (err) console.log(err);
          else console.log(data);
        });
      }
    }
  );
};
module.exports = mongoDB;
