import { PaginatedResponse, PaginatedResponseSchema } from "../api-schemas";
import {
  CreateWorkorderRequest,
  CreateWorkorderSchema,
  WorkorderResponse,
  WorkorderResponseSchema,
} from "../api-schemas/workorder.responses";
import { WorksheetFilter } from "../schemas//filters";

import { QueryParams } from "../types";
import { validateRequest } from "../utils/validation";
import { BaseClient, SDKResponse } from "./base";

export interface WorkorderQueryParams extends QueryParams {
  filters?: WorksheetFilter[];
}

export class WorkorderClient extends BaseClient {
  async getAll(
    params: WorkorderQueryParams = {}
  ): Promise<SDKResponse<PaginatedResponse<WorkorderResponse>>> {
    const { filters = [], page = 1, limit = 20, sort, order } = params;

    const queryParams = this.formatQueryParams({
      filters,
      page,
      limit,
      sort,
      order,
    });

    const response = await this.fetch<
      SDKResponse<PaginatedResponse<WorkorderResponse>>
    >(`/worksheets${queryParams ? `?${queryParams}` : ""}`, "GET");

    const validatedData = validateRequest(
      PaginatedResponseSchema(WorkorderResponseSchema),
      response.data
    );

    return { ...response, data: validatedData };
  }

  async create(
    data: CreateWorkorderRequest
  ): Promise<SDKResponse<WorkorderResponse>> {
    const validatedRequestData = validateRequest(CreateWorkorderSchema, data);

    const response = await this.fetch<SDKResponse<WorkorderResponse>>(
      "/worksheets",
      "POST",
      validatedRequestData
    );

    const validatedResponseData = validateRequest(
      WorkorderResponseSchema,
      response.data
    );

    return { ...response, data: validatedResponseData };
  }

  private formatQueryParams(params: WorkorderQueryParams): string {
    const queryParts: string[] = [];

    // Add pagination params
    if (params.page) queryParts.push(`page=${params.page}`);
    if (params.limit) queryParts.push(`limit=${params.limit}`);

    // Add sorting params
    if (params.sort) {
      queryParts.push(`sort=${params.sort}`);
      if (params.order) queryParts.push(`order=${params.order}`);
    }

    // Add filters
    if (params.filters?.length) {
      const filterParams = params.filters.map((filter) => {
        const value = Array.isArray(filter.value)
          ? filter.value.join(",")
          : filter.value;
        return `${filter.field}=${filter.operator}=${value}`;
      });
      queryParts.push(...filterParams);
    }

    return queryParts.length ? queryParts.join("&") : "";
  }
}
