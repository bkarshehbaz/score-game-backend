const { MongoClient } = require("mongodb");
// "mongodb://127.0.0.1:27017";
const uri =
  "mongodb+srv://bkar:nh2conh2cuso4@cluster0.d8sxr.mongodb.net/TestingApp";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (db) {
        _db = db.db("scoreboards");
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};
