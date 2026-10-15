import api from "./api";
import { AuthResponse, User, LoginRequest, SignupRequest } from "../types/auth";

export const authService = {
  async signup(data: SignupRequest): Promise<void> {
    const response = await api.post("/auth/signup", data);
    return response.data;
  },

  async login(data: LoginRequest): Promise<AuthResponse> {
    const response = await api.post("/auth/login", data);
    return response.data;
  },

  async logout(): Promise<void> {
    const response = await api.post("/auth/logout");
    return response.data;
  },

  async getProfile(): Promise<User> {
    const response = await api.get("/auth/profile");
    return response.data;
  },
};
