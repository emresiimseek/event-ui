import { account } from "@/store/modules/users";
import { UserAuthenticationDto } from "../modules/users/types/user-authentication-dto";

class RouteGuard {
  isAuthenticated = (): Boolean => !!this.getToken();

  private getToken = () => {
    const value = sessionStorage.getItem("authentication");

    if (!!!value) return false;

    const userDto = JSON.parse(value) as UserAuthenticationDto;

    return userDto.token;
  };
}

export const routeGuard = new RouteGuard();
