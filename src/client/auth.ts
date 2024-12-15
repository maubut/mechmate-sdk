import { LoginResponse, LoginRequest } from "../schemas/login.schema";
import { SignInUserSchema } from "../schemas/user.schema";
import { validateRequest } from "../utils/validation";
import { BaseClient, SDKResponse } from "./base";

export class AuthClient extends BaseClient {
  async login(data: LoginRequest): Promise<SDKResponse<LoginResponse>> {
    const validatedData = validateRequest(SignInUserSchema, data);

    return this.fetch<SDKResponse<LoginResponse>>(
      "/auth",
      "POST",
      validatedData,
    );
  }
}
