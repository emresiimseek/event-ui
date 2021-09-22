<template>
  <div></div>
</template>
<script lang='ts'>
import { Vue, Options } from "vue-class-component";
import { createToast, ToastType } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
import { AxiosResponse } from "axios";
import { uuidUtils } from "@/logic/utilities/UuidUtils";
import { ServiceResponseDto } from "@/logic/types/common-types/service-response-dto";
import { InputType } from "@/logic/types/common-types/input-type";
import { UserDto } from "@/logic/types/common-types/user-dto";
import { ValidationResponse } from "@/logic/modules/types/validation-response";
import { ApiBaseResponse } from "@/logic/api/api-base";

@Options({ components: {} })
export default class BaseComponent extends Vue {
  loading: boolean = false;
  loadings: { [key: string]: boolean } = {};

  validations: any = {};

  get validation() {
    return this.validations;
  }

  get isAnyLoading() {
    return this.loading || Object.values(this.loadings).some((l) => l);
  }

  toast(type: ToastType, title: string, description?: string) {
    createToast(
      {
        title: title,
        description: description,
      },
      {
        type: type, // 'info', 'danger', 'warning', 'success', 'default'
        timeout: 5000,
        showCloseButton: true,
        position: "bottom-center", // 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'top-center', 'bottom-center'
        transition: "bounce",
        hideProgressBar: false,
        swipeClose: true,
      }
    );
  }

  async handleRequest<TType>(
    request: () => Promise<ApiBaseResponse<TType>>
  ): Promise<TType | undefined> {
    const uid = uuidUtils.uuidv4();

    this.loadings[uid] = true;

    console.log("handleRequest");
    const result = await request();
    if (result?.errors?.response?.data?.errors)
      this.validations = result.errors.response.data.errors;

    if (result.errors) this.toast("danger", String(result.errors.message));

    this.loadings[uid] = false;

    return result.errors ? undefined : result.data;
  }

  succsess(message: string) {
    this.toast("success", message);
  }
}
</script>

<style scoped>
</style>
