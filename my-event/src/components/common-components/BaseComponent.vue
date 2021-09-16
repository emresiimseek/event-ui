<template>
  <div></div>
</template>

<script lang='ts'>
import { Vue, Options } from "vue-class-component";
import { createToast, ToastType } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
import { AxiosResponse } from "axios";

@Options({ components: {} })
export default class BaseComponent extends Vue {
  toast(value: string, type: ToastType) {
    createToast(
      {
        title: "Toast title",
        description: value,
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

  async handleRequest<TResponse, TType>(
    request: () => Promise<any>
  ): Promise<AxiosResponse> {
    const result = await request();

    const response = result as AxiosResponse;

    if (response.status != 200 && response.status != 204)
      this.toast(response.data, "danger");

    return result;
  }
}
</script>

<style scoped>
</style>
