import { apiBase, ApiBaseResponse } from "@/logic/api/api-base";
import { dateUtils } from "@/logic/utilities/date-utils";
import { Activity } from "./types/activity";

class ActivityLogic {
  save(activity: Activity): Promise<ApiBaseResponse<Activity>> {
    return apiBase.postRequest<Activity>("activities", activity);
  }

  getAll(userId: number) {
    return apiBase.postRequest<Activity[]>("activities", { userId: userId });
  }

  defaultModel = (): Activity => ({
    activityCategories: [],
    eventDate: dateUtils.nowApi(),
    description: "",
    userActivities: [],
  });
}

export const activityLogic = new ActivityLogic();
