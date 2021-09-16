import { apiBase } from "@/logic/api/api-base";
import { AxiosResponse } from "axios";
import { UserAuthenticationDto } from "./types/user-authentication-dto";

class UserAuthenticationLogic {

    static instance: UserAuthenticationLogic;

    authentication = async (user: UserAuthenticationDto): Promise<AxiosResponse> =>
        await apiBase.postRequest("authentication", user);



}

export const userAuthenticationLogic = new UserAuthenticationLogic();