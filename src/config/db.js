import { connect } from 'mongoose';
require('dotenv').config();

const connectDB = async () => {
  try {
    await connect(process.env.MONGODB_URI);
    console.log("MongoDB conectado");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
