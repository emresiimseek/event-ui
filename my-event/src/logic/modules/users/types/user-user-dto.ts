import { UserDto } from "@/logic/types/common-types/user-dto";

export interface UserUserDto {
  userChildId: number;
  userParentId: number;
  userChild: UserDto;
  userParent: UserDto;
}
