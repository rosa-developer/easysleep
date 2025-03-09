
// User model interface for SQL Server
export interface UserModel {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

export default UserModel;

