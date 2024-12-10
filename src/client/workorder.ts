import { WorksheetFilter } from "../schemas//filters";
import {
  CreateWorkorderRequest,
  WorkorderResponse,
} from "../schemas/workorder.schema";
import { BaseClient } from "./base";

export class WorkorderClient extends BaseClient {
  async getAll(filters: WorksheetFilter[] = []) {
    const queryParams = this.formatFilters(filters);

    const response = await this.fetch<WorkorderResponse>(
      `/worksheets?/${queryParams}`,
      "GET",
    );

    return response;
  }

  async create(data: CreateWorkorderRequest): Promise<WorkorderResponse> {
    return this.fetch<WorkorderResponse>("/worksheets", "POST", data);
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
