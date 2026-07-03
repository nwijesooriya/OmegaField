export type Role = "ADMIN" | "USER";

export interface User {
  id: string;
  username: string;
  email: string;
  role: Role;
}

export interface AuthResponse {
  token: string;
  user: User;
}
