import {
  CreateSessionRequest,
  CreateSessionSchema,
  SessionResponse,
  SessionResponseSchema,
} from "../api-schemas/session";

import { SignupRequest, SignupResponse } from "../schemas/signup.schema";
import { validateRequest } from "../utils/validation";
import { BaseClient, SDKResponse } from "./base";

export class AuthClient extends BaseClient {
  async login(
    data: CreateSessionRequest
  ): Promise<SDKResponse<SessionResponse>> {
    const validatedData = validateRequest(CreateSessionSchema, data);

    const response = await this.fetch<SDKResponse<SessionResponse>>(
      "/auth",
      "POST",
      validatedData
    );

    const validatedResponseData = validateRequest(
      SessionResponseSchema,
      response.data
    );

    return { ...response, data: validatedResponseData };
  }

  async signup(data: SignupRequest): Promise<SDKResponse<SignupResponse>> {
    const validatedData = validateRequest(CreateSessionSchema, data);

    return this.fetch<SDKResponse<SignupResponse>>(
      "/users",
      "POST",
      validatedData
    );
  }
}
