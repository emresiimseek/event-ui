import { account } from "@/store/modules/users";
import { UserAuthenticationDto } from "../modules/users/types/user-authentication-dto";

class RouteGuard {
    isAuthenticated = (): Boolean => !!this.getToken();

    private getToken = () => {
        const value = sessionStorage.getItem("authentication");
        console.log("getToken");

        if (!!!value) return false;;

        return (JSON.parse(value) as UserAuthenticationDto).token
    };


}

export const routeGuard = new RouteGuard();