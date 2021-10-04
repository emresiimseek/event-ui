import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { ValidationResponse } from "../modules/types/validation-response";
import { UserAuthenticationDto } from "../modules/users/types/user-authentication-dto";
import { ServiceResponseDto } from "../types/common-types/service-response-dto";
import { UserDto } from "../types/common-types/user-dto";

class ApiBase {
  cancelTokenSource: CancelTokenSource | null = null;
  readonly baseUrl: string = "https://localhost:44315/api/";

  conduitApi = axios.create({
    baseURL: this.baseUrl,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
  });

  async postRequest<T>(
    url: string,
    value?: any,
    cancelToken?: boolean
  ): Promise<ApiBaseResponse<T>> {
    let result: ApiBaseResponse<T> = {};

    if (this.cancelTokenSource != null && cancelToken)
      this.cancelTokenSource.cancel("request canceled");

    this.cancelTokenSource = axios.CancelToken.source();

    await this.conduitApi
      .post(url, value, { cancelToken: this.cancelTokenSource.token })
      .then((response) => {
        result.data = response.data;
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log("request canceled", error);
        } else {
          result.errors = error;
        }
      });

    this.cancelTokenSource = null;
    return result;
  }

  async getRequest<T>(
    url: string,
    cancelToken?: boolean
  ): Promise<ApiBaseResponse<T>> {
    let result: ApiBaseResponse<T> = {};
    if (this.cancelTokenSource != null && cancelToken)
      this.cancelTokenSource.cancel("request canceled");

    this.cancelTokenSource = axios.CancelToken.source();

    await this.conduitApi
      .get(url, { cancelToken: this.cancelTokenSource.token })
      .then((response) => {
        result.data = response.data;
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log("request canceled", error);
        } else {
          result.errors = error;
        }
      });

    return result;
  }
}

export type ApiBaseResponse<T> = { data?: T; errors?: any };

export const apiBase = new ApiBase();
