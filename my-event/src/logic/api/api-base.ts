import axios, { AxiosResponse } from "axios";
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

  async postRequest(
    url: string,
    value?: any
  ): Promise<AxiosResponse<ServiceResponseDto<any>>> {
    return await this.conduitApi
      .post(url, value)
      .then((response) => response)
      .catch((error) => {
        return error.message;
      });
  }

  async getRequest<T>(url: string, value?: any): Promise<AxiosResponse<T>> {
    return await this.conduitApi
      .get(url, value)
      .then((response) => response)
      .catch((error) => {
        return error.message;
      });
  }
}

export const apiBase = new ApiBase();
