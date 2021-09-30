import { EnumGender } from "@/logic/modules/users/types/enum-gender";
import { UserUserDto } from "@/logic/modules/users/types/user-user-dto";

export interface UserDto {
  id?: any;
  firstName: string;
  lastName: string;
  userName: string;
  gender?: EnumGender;
  password: string;
  email: string;
  token: string;
  iAmFriendsWith: UserUserDto[];
  areFirendsWithMe: UserUserDto[];
}
