
import sql from 'mssql';

let pool: sql.ConnectionPool | null = null;

// SQL Server connection configuration
const config: sql.config = {
  user: process.env.SQL_USER || 'sa',
  password: process.env.SQL_PASSWORD || 'YourStrong@Passw0rd',
  server: process.env.SQL_SERVER || 'localhost',
  database: process.env.SQL_DATABASE || 'easysleep',
  options: {
    encrypt: true, // Use this if you're on Windows Azure
    trustServerCertificate: true, // Change to true for local dev / self-signed certs
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  }
};

export const connectToSqlServer = async () => {
  try {
    if (pool) {
      console.log('Already connected to SQL Server');
      return pool;
    }

    pool = await new sql.ConnectionPool(config).connect();
    console.log('Connected to SQL Server');
    return pool;
  } catch (error) {
    console.error('Error connecting to SQL Server:', error);
    throw error;
  }
};

export const closeSqlServerConnection = async () => {
  try {
    if (pool) {
      await pool.close();
      pool = null;
      console.log('SQL Server connection closed');
    }
  } catch (error) {
    console.error('Error closing SQL Server connection:', error);
    throw error;
  }
};

