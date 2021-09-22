import { apiBase } from "@/logic/api/api-base";
import { Activity } from "./types/activity";

class ActivityLogic {
  save(activity: Activity) {
    return apiBase.postRequest("activities", activity);
  }

  defaultModel = (): Activity => ({
    description: "",
    title: "",
    activitysCategory: [],
    eventDate: "2019-01-06T17:16:40",
  });
}

export const activityLogic = new ActivityLogic();
