export type Role = "ADMIN" | "USER";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest extends LoginRequest {
  username: string;
  confirmPassword: string;
}

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
