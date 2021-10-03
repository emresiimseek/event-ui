import { apiBase, ApiBaseResponse } from "@/logic/api/api-base";
import { SelectModel } from "@/logic/types/common-types/select-model";
import { LookUp } from "../users/types/look-up";

class Categories {

  async getCategoriesLookUp(): Promise<ApiBaseResponse<SelectModel[]>> {
    const result = await apiBase.getRequest<LookUp[]>("categories");
    const data = (await result?.data?.map((d) => this.mapSelectModel(d))) ?? [];

    return { data, errors: result.errors };
  }

  mapSelectModel(value: LookUp): SelectModel {
    return { value: value.key, text: value.value };
  }
  
}

export const categoriesLogic = new Categories();
