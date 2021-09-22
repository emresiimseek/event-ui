import axios, { AxiosResponse } from "axios";
import { ValidationResponse } from "../modules/types/validation-response";
import { UserAuthenticationDto } from "../modules/users/types/user-authentication-dto";
import { ServiceResponseDto } from "../types/common-types/service-response-dto";
import { UserDto } from "../types/common-types/user-dto";

class ApiBase {
  static instance: ApiBase;

  readonly baseUrl: string = "https://localhost:44315/api/";

  conduitApi = axios.create({
    baseURL: this.baseUrl,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
  });

  async postRequest<T>(url: string, value?: any): Promise<ApiBaseResponse<T>> {
    let result: ApiBaseResponse<T> = {};

    await this.conduitApi
      .post(url, value)
      .then((response) => {
        result.data = response.data;
      })
      .catch((error) => {
        result.errors = error;
      });

    return result;
  }

  async getRequest<T>(url: string, value?: any): Promise<ApiBaseResponse<T>> {
    let result: ApiBaseResponse<T> = {};

    await this.conduitApi
      .get(url, value)
      .then((response) => {
        result.data = response.data;
      })
      .catch((error) => {
        result.errors = error;
      });

    return result;
  }
}

export type ApiBaseResponse<T> = { data?: T; errors?: any };

export const apiBase = new ApiBase();
