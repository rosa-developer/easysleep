
import { connectToSqlServer, executeQuery } from './sqlServer';

export const setupDatabase = async () => {
  try {
    await connectToSqlServer();
    
    // Check if Users table exists, if not create it
    const tableExists = await executeQuery(`
      SELECT OBJECT_ID('dbo.Users') as TableID
    `);
    
    if (!tableExists.recordset[0].TableID) {
      console.log('Creating Users table...');
      
      await executeQuery(`
        CREATE TABLE Users (
          id INT IDENTITY(1,1) PRIMARY KEY,
          name NVARCHAR(100) NOT NULL,
          email NVARCHAR(100) NOT NULL UNIQUE,
          password NVARCHAR(100) NOT NULL,
          createdAt DATETIME NOT NULL
        )
      `);
      
      console.log('Users table created successfully');
    } else {
      console.log('Users table already exists');
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error setting up database:', error);
    throw error;
  }
};
