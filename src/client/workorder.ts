import { WorksheetFilter } from "../schemas//filters";
import {
  CreateWorkorderRequest,
  CreateWorkorderSchema,
  WorkorderResponse,
} from "../schemas/workorder.schema";
import { validateRequest } from "../utils/validation";
import { BaseClient, SDKResponse } from "./base";

export class WorkorderClient extends BaseClient {
  async getAll(
    filters: WorksheetFilter[] = [],
  ): Promise<SDKResponse<WorkorderResponse[]>> {
    const queryParams = this.formatFilters(filters);

    const response = await this.fetch<SDKResponse<WorkorderResponse[]>>(
      `/worksheets${queryParams ? `?${queryParams}` : ""}`,
      "GET",
    );

    return response;
  }

  async create(
    data: CreateWorkorderRequest,
  ): Promise<SDKResponse<WorkorderResponse>> {
    const validatedData = validateRequest(CreateWorkorderSchema, data);
    return this.fetch<SDKResponse<WorkorderResponse>>(
      "/worksheets",
      "POST",
      validatedData,
    );
  }

  private formatFilters(filters: WorksheetFilter[]): string {
    if (!filters.length) return "";

    return filters
      .map((filter) => {
        const value = Array.isArray(filter.value)
          ? filter.value.join(",")
          : filter.value;

        return `${filter.field}=${filter.operator}=${value}`;
      })
      .join("&");
  }
}
