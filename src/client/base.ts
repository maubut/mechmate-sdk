import { RequestOptions, SDKResponse } from "../types";

export class BaseClient {
  constructor(protected baseClient: BaseClient | null = null) {}

  protected async fetch<T>(
    path: string,
    method: string,
    body?: unknown,
    options: RequestOptions = {}
  ): Promise<SDKResponse<T>> {
    if (!this.baseClient) {
      throw new Error('BaseClient not properly initialized');
    }
    return this.baseClient.fetch<T>(path, method, body, options);
  }
}

