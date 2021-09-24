import { apiBase, ApiBaseResponse } from "@/logic/api/api-base";
import { Activity } from "./types/activity";

class ActivityLogic {
  save(activity: Activity): Promise<ApiBaseResponse<Activity>> {
    return apiBase.postRequest<Activity>("activities", activity);
  }

  defaultModel = (): Activity => ({
    activityCategories: [],
    eventDate: "",
    description: "",
    userActivities: [],
  });
}

export const activityLogic = new ActivityLogic();
