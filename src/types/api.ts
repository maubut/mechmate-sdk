export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

export interface QueryParams {
  page?: number;
  limit?: number;
  sort?: string;
  order?: "asc" | "desc";
}
