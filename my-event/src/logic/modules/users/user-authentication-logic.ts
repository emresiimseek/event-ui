import { apiBase } from "@/logic/api/api-base";
import { ServiceResponseDto } from "@/logic/types/common-types/service-response-dto";
import { UserDto } from "@/logic/types/common-types/user-dto";
import { AxiosResponse } from "axios";
import { EnumGender } from "./types/enum-gender";
import { UserAuthenticationDto } from "./types/user-authentication-dto";

class UserAuthenticationLogic {
  authentication = (user: UserAuthenticationDto): Promise<AxiosResponse> =>
    apiBase.postRequest("authentication", user);

  save = (user: UserDto): Promise<AxiosResponse<ServiceResponseDto<UserDto>>> =>
    apiBase.postRequest("users", user);

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
