import {
  SigninSchema,
  SigninResponse,
  SigninRequest,
} from "../schemas/signin.schema";
import {
  SignupRequest,
  SignupResponse,
  SignupSchema,
} from "../schemas/signup.schema";
import { validateRequest } from "../utils/validation";
import { BaseClient, SDKResponse } from "./base";

export class AuthClient extends BaseClient {
  async login(data: SigninRequest): Promise<SDKResponse<SigninResponse>> {
    const validatedData = validateRequest(SigninSchema, data);

    return this.fetch<SDKResponse<SigninResponse>>(
      "/auth",
      "POST",
      validatedData,
    );
  }

  async signup(data: SignupRequest): Promise<SDKResponse<SignupResponse>> {
    const validatedData = validateRequest(SignupSchema, data);

    return this.fetch<SDKResponse<SignupResponse>>(
      "/users",
      "POST",
      validatedData,
    );
  }
}
