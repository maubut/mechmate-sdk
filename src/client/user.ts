import { PaginatedResponse, UserResponse } from "../api-schemas";
import { BaseClient, SDKResponse } from "./base";

export class UserClient extends BaseClient {
   async getAll() {
    return this.fetch<SDKResponse<PaginatedResponse<UserResponse>>>(`/users`, "GET");
   } 

   async getOne(uud: string) {
    return this.fetch<SDKResponse<UserResponse>>(`/users/${uud}`, "GET");
   }
}