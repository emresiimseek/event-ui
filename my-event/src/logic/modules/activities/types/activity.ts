import { Category } from "../../categories/types/category";
import { ActivitysCategory } from "./activitys-categories";

export interface Activity {
  title: string;
  description: string;
  activitysCategory: ActivitysCategory[];
  eventDate: string;
}
