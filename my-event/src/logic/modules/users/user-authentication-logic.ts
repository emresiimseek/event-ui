import { apiBase } from "@/logic/api/api-base";
import { ServiceResponseDto } from "@/logic/types/common-types/service-response-dto";
import { UserDto } from "@/logic/types/common-types/user-dto";
import { AxiosResponse } from "axios";
import { ValidationResponse } from "../types/validation-response";
import { EnumGender } from "./types/enum-gender";
import { UserAuthenticationDto } from "./types/user-authentication-dto";

class UserAuthenticationLogic {
  authentication = (user: UserAuthenticationDto) =>
    apiBase.postRequest<ServiceResponseDto<UserAuthenticationDto>>(
      "authentication",
      user
    );

  get(url: string) {
    return apiBase.getRequest<UserDto>(url);
  }

  save = (user: UserDto) =>
    apiBase.postRequest<ServiceResponseDto<UserDto[]>>("users", user);

  defaultDto(): UserDto {
    return {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      userName: "",
      token: "",
    };
  }
}

export const userAuthenticationLogic = new UserAuthenticationLogic();
