import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to database');
   
  })
  .catch((err) => {
    console.error('Error connecting to database:', err);
  });