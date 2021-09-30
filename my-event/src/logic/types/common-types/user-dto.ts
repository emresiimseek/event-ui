import { EnumGender } from "@/logic/modules/users/types/enum-gender";
import { UserUser } from "@/logic/modules/users/types/user-user";

export interface UserDto {
  id?: any;
  firstName: string;
  lastName: string;
  userName: string;
  gender?: EnumGender;
  password: string;
  email: string;
  token: string;
  iAmFriendsWith: UserUser[];
  areFirendsWithMe: UserUser[];
}
