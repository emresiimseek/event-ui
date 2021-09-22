import { apiBase } from "@/logic/api/api-base";
import { SelectModel } from "@/logic/types/common-types/select-model";
import { LookUp } from "../users/types/look-up";

class Categories {
  async getCategoriesLookUp() {
    const result = await apiBase.getRequest<LookUp[]>("categories");
    return result.data.map((d) => this.mapSelectModel(d));
  }

  mapSelectModel(value: LookUp): SelectModel {
    return { value: value.key, text: value.value };
  }
}

export const categoriesLogic = new Categories();
