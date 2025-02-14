import {
  CreateSessionRequest,
  CreateSessionSchema,
  SessionResponse,
  SessionResponseSchema,
} from "../api-schemas/session";

import { SignupRequest, SignupResponse } from "../schemas/signup.schema";
import { SDKResponse } from "../types";
import { TokenManager } from "../utils/token-manager";
import { validateRequest } from "../utils/validation";
import { HTTPClient } from "./http";

export class AuthClient  {
  constructor(
    private httpClient: HTTPClient,
    private tokenManager: TokenManager 
  ) {
  }

  async login(
    data: CreateSessionRequest
  ): Promise<SDKResponse<SessionResponse>> {
    const validatedData = validateRequest(CreateSessionSchema, data);

    const response = await this.httpClient.fetch<SessionResponse>(
      "/auth",
      "POST",
      validatedData
    );

    const validatedResponseData = validateRequest(
      SessionResponseSchema,
      response.data
    );

    if(validatedResponseData.accessToken && validatedResponseData.refreshToken) {
      this.tokenManager.setTokens({
        accessToken: validatedResponseData.accessToken,
        refreshToken: validatedResponseData.refreshToken
      })
    }

    return response;
  }

  async logout(): Promise<void> {
    try {
      const accessToken = await this.tokenManager.getAccessToken();

      if(accessToken) {
        await this.httpClient.fetch('/auth/logout', "POST").catch( err => {
          console.warn('Error during server logout:', err)
        })
      }
    } finally {
      this.tokenManager.clearTokens();
    }
  }

  async signup(data: SignupRequest): Promise<SDKResponse<SignupResponse>> {
    const validatedData = validateRequest(CreateSessionSchema, data);

    return this.httpClient.fetch<SignupResponse>(
      "/users",
      "POST",
      validatedData
    );
  }
}
