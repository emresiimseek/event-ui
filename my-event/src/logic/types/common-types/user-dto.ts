import { EnumGender } from "@/logic/modules/users/types/enum-gender";

export interface UserDto {
  id?: any;
  firstName: string;
  lastName: string;
  userName: string;
  gender?: EnumGender;
  password: string;
  email: string;
  token: string;
}
