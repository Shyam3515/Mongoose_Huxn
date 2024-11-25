import mongoose from "mongoose";

// connection to the database and this function will be asynchronous because it allows us to connect to the database.
const connectDB = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("Database connected...");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
