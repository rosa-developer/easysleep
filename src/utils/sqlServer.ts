
// This is a browser-friendly mock implementation of SQL Server connection
// In a real app, this would be a backend API service

let isConnected = false;
const mockUsers: any[] = [];

export const connectToSqlServer = async () => {
  try {
    console.log('Simulating connection to SQL Server...');
    // Simulate connection delay
    await new Promise(resolve => setTimeout(resolve, 500));
    isConnected = true;
    console.log('Connected to simulated SQL Server');
    return { isConnected: true };
  } catch (error) {
    console.error('Error connecting to simulated SQL Server:', error);
    throw error;
  }
};

export const closeSqlServerConnection = async () => {
  try {
    if (isConnected) {
      // Simulate disconnection delay
      await new Promise(resolve => setTimeout(resolve, 300));
      isConnected = false;
      console.log('Simulated SQL Server connection closed');
    }
  } catch (error) {
    console.error('Error closing simulated SQL Server connection:', error);
    throw error;
  }
};

// Mock SQL functionality for browser use
export const executeQuery = async (query: string, params?: any) => {
  console.log('Executing simulated query:', query, params);
  
  // Simulate query execution delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  if (query.includes('SELECT OBJECT_ID')) {
    return { recordset: [{ TableID: null }] };
  }
  
  if (query.includes('CREATE TABLE')) {
    console.log('Simulated table creation');
    return { rowsAffected: [1] };
  }
  
  if (query.includes('INSERT INTO Users')) {
    const newUser = {
      id: mockUsers.length + 1,
      name: params?.name || '',
      email: params?.email || '',
      password: params?.password || '',
      createdAt: params?.createdAt || new Date()
    };
    mockUsers.push(newUser);
    return { recordset: [newUser] };
  }
  
  if (query.includes('SELECT * FROM Users WHERE email')) {
    const user = mockUsers.find(u => u.email === params?.email);
    return { recordset: user ? [user] : [] };
  }
  
  return { recordset: [] };
};

// Mock request builder for browser
export const createRequest = () => {
  const inputs: Record<string, any> = {};
  
  return {
    input: (name: string, type: any, value: any) => {
      inputs[name] = value;
      return createRequest();
    },
    query: async (query: string) => {
      return executeQuery(query, inputs);
    }
  };
};
