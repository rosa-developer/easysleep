
import User from '../models/User';
import { connectToMongoDB } from '../utils/mongodb';

export interface UserData {
  name?: string;
  email: string;
  password: string;
}

export const createUser = async (userData: UserData) => {
  try {
    await connectToMongoDB();
    
    // Check if user already exists - fix the TypeScript error with the proper typing
    const existingUser = await User.findOne({ email: userData.email }).exec();
    if (existingUser) {
      throw new Error('User already exists with this email');
    }
    
    // Create new user
    const user = new User(userData);
    await user.save();
    
    // Return user without password
    const newUser = user.toObject();
    delete newUser.password;
    
    return newUser;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const authenticateUser = async (email: string, password: string) => {
  try {
    await connectToMongoDB();
    
    // Find user by email - fix the TypeScript error with the proper typing
    const user = await User.findOne({ email }).exec();
    
    // If user doesn't exist or password doesn't match
    if (!user || user.password !== password) {
      throw new Error('Invalid email or password');
    }
    
    // Return user without password
    const authenticatedUser = user.toObject();
    delete authenticatedUser.password;
    
    return authenticatedUser;
  } catch (error) {
    console.error('Error authenticating user:', error);
    throw error;
  }
};

export const requestPasswordReset = async (email: string) => {
  try {
    await connectToMongoDB();
    
    // Check if user exists - fix the TypeScript error with the proper typing
    const user = await User.findOne({ email }).exec();
    if (!user) {
      throw new Error('No user found with this email');
    }
    
    // In a real application, you would:
    // 1. Generate a reset token
    // 2. Save it to the user record with an expiration
    // 3. Send an email with a reset link
    
    // For now, we'll just return success
    return { success: true };
  } catch (error) {
    console.error('Error requesting password reset:', error);
    throw error;
  }
};
