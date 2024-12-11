import { BaseClient } from "./base";

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  user: any;
  accessToken: string;
  refreshToken: string;
}

export class AuthClient extends BaseClient {
  async login(data: LoginRequest) {
    return this.fetch<LoginResponse>("/auth", "POST", data);
  }
}
