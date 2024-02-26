const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://sujeetkumarcdk:sujeetkumarcdk@nodeandexpresslearning.m9uayyv.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority&appName=NodeAndExpressLearning";

const connectDB = (url) => {
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
