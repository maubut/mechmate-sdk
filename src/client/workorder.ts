import { PaginatedResponse, PaginatedResponseSchema } from "../api-schemas";
import {
  CreateWorkorderRequest,
  CreateWorkorderSchema,
  WorkorderDetailResponse,
  WorkorderDetailResponseSchema,
  WorkorderFilter,
  WorkorderListItemResponse,
  WorkorderListItemResponseSchema,
  WorkorderResponse,
} from "../api-schemas/workorder.responses";

import { QueryParams, SDKResponse } from "../types";
import { validateRequest } from "../utils/validation";
import { HTTPClient } from "./http";

export interface WorkorderQueryParams extends QueryParams {
  filters?: WorkorderFilter[];
}

export class WorkorderClient  {

  constructor(private httpClient: HTTPClient) {
  }

  async getAll(
    params: WorkorderQueryParams = {}
  ): Promise<SDKResponse<PaginatedResponse<WorkorderListItemResponse>>> {
    const { filters = [], page = 1, limit = 20, sort, order } = params;

    const queryParams = this.formatQueryParams({
      filters,
      page,
      limit,
      sort,
      order,
    });

    const response = await this.httpClient.fetch<
      SDKResponse<PaginatedResponse<WorkorderListItemResponse>>
    >(`/worksheets${queryParams ? `?${queryParams}` : ""}`, "GET");

    const validatedData = validateRequest(
      PaginatedResponseSchema(WorkorderListItemResponseSchema),
      response.data
    );

    return { ...response, data: validatedData };
  }

  async getOne(uuid: string): Promise<SDKResponse<WorkorderDetailResponse>> {
    const response = await this.httpClient.fetch<WorkorderDetailResponse>(`/worksheets/${uuid}`, "GET");
    const validatedData = validateRequest(WorkorderDetailResponseSchema, response.data);
    return { ...response, data: validatedData}
  }

  async create(
    data: CreateWorkorderRequest
  ): Promise<SDKResponse<WorkorderResponse>> {
    const validatedRequestData = validateRequest(CreateWorkorderSchema, data);
    
    const response = await this.httpClient.fetch<WorkorderResponse>(
      "/worksheets",
      "POST",
      validatedRequestData
    );

    const validatedResponseData = validateRequest(
      WorkorderDetailResponseSchema,
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
