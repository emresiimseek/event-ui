import { apiBase } from "@/logic/api/api-base";
import { UserDto } from "@/logic/types/common-types/user-dto";
import { UserProfileActivityDto } from "./types/user-profile-activity";
import { UserUser } from "./types/user-user";

class UserLogic {
  getUserActivities = (userId: number) =>
    apiBase.getRequest<UserProfileActivityDto[]>(
      "users/GetUserWithActivities/" + userId
    );

  searchUser(searchKey: string) {
    return apiBase.postRequest<UserDto[]>("users/SearchUser/", searchKey);
  }

  follow(userUser: UserUser) {
    return apiBase.postRequest<UserUser>("users/AddFriend", userUser);
  }

  unFollow(userUser: UserUser) {
    return apiBase.postRequest("users/RemoveFriend", userUser);
  }
}

export const userLogic = new UserLogic();
