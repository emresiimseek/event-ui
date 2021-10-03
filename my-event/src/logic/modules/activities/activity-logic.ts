import { apiBase, ApiBaseResponse } from "@/logic/api/api-base";
import { dateUtils } from "@/logic/utilities/date-utils";
import { Activity } from "./types/activity";
import { MainFlowUserActivityDto } from "./types/main-flow-user-activity-dto";

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

  getFriendsEvents = (userId: number) =>
    apiBase.getRequest<MainFlowUserActivityDto[]>(
      "activities/GetAllFriendsActivities/" + userId
    );
}

export const activityLogic = new ActivityLogic();
