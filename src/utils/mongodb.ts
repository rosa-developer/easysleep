
import mongoose from 'mongoose';

let isConnected = false;

export const connectToMongoDB = async () => {
  if (isConnected) {
    console.log('Already connected to MongoDB');
    return;
  }

  try {
    // You should replace this URL with your actual MongoDB connection string
    // For now, we'll use a placeholder
    const MONGODB_URI = "mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority";
    
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
