import { Category } from "../../categories/types/category";
import { ActivityCategories } from "./activitys-categories";
import { UserActivities } from "./user-activities";

export interface Activity {
  title?: string;
  description: string;
  activityCategories: ActivityCategories[];
  userActivities?: UserActivities[];
  eventDate: string;
}
