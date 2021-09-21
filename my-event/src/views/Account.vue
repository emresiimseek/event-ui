<template>
  <co-page-layout
    class="login-base-container"
    mainClass="flex-1"
    position="absolute"
  >
    <div
      class="
        d-flex
        flex-column
        justify-content-center
        align-items-center
        login-container
      "
    >
      <router-view />

      <div class="bg-dark p-3 px-5 opacity-50 rounded-3 card-size"></div>
    </div>
  </co-page-layout>
</template>

<script lang="ts">
import CoPageLayout from "@/components/common-components/CoPageLayout.vue";
import CoLoading from "../components/common-components/CoLoading.vue";
import { Options, Vue } from "vue-class-component";
import CoButton from "../components/common-components/CoButton.vue";
import FormInput from "../components/common-components/FormInput.vue";
import PulseLoader from "vue-spinner/src/GridLoader.vue";
import BaseComponent from "../components/common-components/BaseComponent.vue";
@Options({
  props: {},
  components: {
    FormInput,
    CoButton,
    PulseLoader,
    BaseComponent,
    CoLoading,
    CoPageLayout,
  },
})
export default class Account extends BaseComponent {}
</script>

<style scoped>
.login-base-container {
  background: url("../../public/images/fun.jpg");
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  justify-content: center;
}

.card-size {
  height: 500px;
  width: 360px;
}
</style>
