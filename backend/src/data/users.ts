import bcrypt from "bcryptjs";

export interface User {
  id: string;
  username: string;
  email: string;
  passwordHash: string;
  role: "ADMIN" | "USER";
}

// In-memory mock database for users
export const users: User[] = [];

// Initialize default admin user
const initializeUsers = async () => {
  if (users.length === 0) {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash("admin123", salt);
    
    users.push({
      id: "1",
      username: "admin",
      email: "admin@sportsnews.local",
      passwordHash,
      role: "ADMIN",
    });
    console.log("Mock data: Admin user initialized");
  }
};

initializeUsers();
