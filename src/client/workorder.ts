import { WorksheetFilter } from "../schemas//filters";
import {
  CreateWorkorderRequest,
  CreateWorkorderSchema,
  WorkorderResponse,
} from "../schemas/workorder.schema";
import { PaginatedResponse, QueryParams } from "../types";
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

    return response;
  }

  async create(
    data: CreateWorkorderRequest
  ): Promise<SDKResponse<WorkorderResponse>> {
    console.log("data", data);
    const validatedData = validateRequest(CreateWorkorderSchema, data);

    console.log("validateData", validatedData);
    return this.fetch<SDKResponse<WorkorderResponse>>(
      "/worksheets",
      "POST",
      validatedData
    );
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
