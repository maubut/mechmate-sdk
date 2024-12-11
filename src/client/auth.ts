import { LoginResponse, LoginRequest } from "../schemas/login.schema";
import { BaseClient, SDKResponse } from "./base";

export class AuthClient extends BaseClient {
  async login(data: LoginRequest): Promise<SDKResponse<LoginResponse>> {
    console.log("patate 2", data);
    return this.fetch<SDKResponse<LoginResponse>>("/auth", "POST", data);
  }
}
