import { EnumGender } from "@/logic/modules/users/types/enum-gender";

export interface UserDto {
  id?: any;
  firstName: string;
  lastName: string;
  gender?: EnumGender;
  birthDate: string;
  userName: string;
  password: string;
  email: string;
  token: string;
}
