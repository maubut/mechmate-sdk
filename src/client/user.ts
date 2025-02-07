import { PaginatedResponse, UserResponse } from "../api-schemas";
import { HTTPClient } from "./http"

export class UserClient  {

   constructor(private httpClient: HTTPClient) {
    }

   async getAll() {
    return this.httpClient.fetch<PaginatedResponse<UserResponse>>(`/users`, "GET");
   } 

   async getOne(uud: string) {
    return this.httpClient.fetch<UserResponse>(`/users/${uud}`, "GET");
   }
}