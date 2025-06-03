const mongoose = require("mongoose");

const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database is Connected");
  } catch (error) {
    console.log(error.message);
    throw new Error("Something went wrong ", error);
  }
};
module.exports = ConnectDb;
