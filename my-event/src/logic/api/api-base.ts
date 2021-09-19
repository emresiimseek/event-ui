import axios, { AxiosResponse } from "axios";
import { UserAuthenticationDto } from "../modules/users/types/user-authentication-dto";

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
    userDto: UserAuthenticationDto
  ): Promise<AxiosResponse> {
    return await this.conduitApi
      .post(url, userDto)
      .then((response) => response)
      .catch((error) => {
        return error.message;
      });
  }
}

export const apiBase = new ApiBase();
