import { CategoryDto } from "../../users/types/user-profile-activity";

export interface MainFlowUserActivityDto {
  userId: number;
  userName: string;
  userFullName: string;
  activityDescription: string;
  activityTitle: string;
  activityDate: string;
  categories: CategoryDto[];
}
