import { apiBase } from "@/logic/api/api-base";
import { UserProfileActivityDto } from "./types/user-profile-activity";

class UserLogic {
  getUserActivities = (userId: number) =>
    apiBase.getRequest<UserProfileActivityDto[]>(
      "users/GetUserWithActivities/" + userId
    );
}

export const userLogic = new UserLogic();
