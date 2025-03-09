
import mongoose from 'mongoose';

let isConnected = false;

export const connectToMongoDB = async () => {
  if (isConnected) {
    console.log('Already connected to MongoDB');
    return;
  }

  try {
    // Using environment variable or a default local MongoDB connection
    // For development, we'll use a local MongoDB instance
    const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/easysleep";
    
    if (!MONGODB_URI) {
      throw new Error('MongoDB URI is not defined');
    }

    await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};
