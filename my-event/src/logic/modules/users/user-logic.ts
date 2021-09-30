import { apiBase } from "@/logic/api/api-base";
import { UserDto } from "@/logic/types/common-types/user-dto";
import { UserProfileActivityDto } from "./types/user-profile-activity";
import { UserUserDto } from "./types/user-user-dto";

class UserLogic {
  getUserActivities = (userId: number) =>
    apiBase.getRequest<UserProfileActivityDto[]>(
      "users/GetUserWithActivities/" + userId
    );

  searchUser(searchKey: string) {
    return apiBase.postRequest<UserDto[]>("users/SearchUser/", searchKey);
  }

  follow(userUser: Pick<UserUserDto, "userChildId" | "userParentId">) {
    return apiBase.postRequest<UserUserDto>("users/AddFriend", userUser);
  }

  unFollow(userUser: Pick<UserUserDto, "userChildId" | "userParentId">) {
    return apiBase.postRequest("users/RemoveFriend", userUser);
  }
}

export const userLogic = new UserLogic();
