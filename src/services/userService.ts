
import { connectToSqlServer, createRequest, executeQuery } from '../utils/sqlServer';

export interface UserData {
  name?: string;
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password?: string;
  createdAt: Date;
}

export const createUser = async (userData: UserData) => {
  try {
    // Check if user already exists
    const userCheck = await createRequest()
      .input('email', null, userData.email)
      .query('SELECT * FROM Users WHERE email = @email');
    
    if (userCheck.recordset.length > 0) {
      throw new Error('User already exists with this email');
    }
    
    // Create new user
    const result = await executeQuery(`
      INSERT INTO Users (name, email, password, createdAt)
      OUTPUT INSERTED.*
      VALUES (@name, @email, @password, @createdAt)
    `, {
      name: userData.name || '',
      email: userData.email,
      password: userData.password,
      createdAt: new Date()
    });
    
    // Return user without password
    const newUser = result.recordset[0];
    if (newUser) {
      const { password, ...userWithoutPassword } = newUser;
      return userWithoutPassword;
    }
    
    throw new Error('Failed to create user');
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const authenticateUser = async (email: string, password: string) => {
  try {
    // Find user by email
    const result = await createRequest()
      .input('email', null, email)
      .query('SELECT * FROM Users WHERE email = @email');
    
    const user = result.recordset[0];
    
    // If user doesn't exist or password doesn't match
    if (!user || user.password !== password) {
      throw new Error('Invalid email or password');
    }
    
    // Return user without password
    const { password: _, ...authenticatedUser } = user;
    
    return authenticatedUser;
  } catch (error) {
    console.error('Error authenticating user:', error);
    throw error;
  }
};

export const requestPasswordReset = async (email: string) => {
  try {
    // Check if user exists
    const result = await createRequest()
      .input('email', null, email)
      .query('SELECT * FROM Users WHERE email = @email');
    
    if (result.recordset.length === 0) {
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
