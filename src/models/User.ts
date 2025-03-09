
import mongoose from 'mongoose';

// Define the User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password should be at least 6 characters'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Only compile the model if it hasn't been compiled before
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
