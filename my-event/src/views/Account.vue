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
import CoLoading from "../components/common-components/CoLoading.vue";
import { UserAuthenticationDto } from "../logic/modules/users/types/user-authentication-dto";
import { userAuthenticationLogic } from "../logic/modules/users/user-authentication-logic";
import store from "../store";
import { account, key } from "../store/modules/users";
import { Options, Vue } from "vue-class-component";
import { useStore } from "vuex";
import CoButton from "../components/common-components/CoButton.vue";
import Button from "../components/common-components/CoButton.vue";
import CoPageLayout from "../components/common-components/CoPagelayout.vue";
import FormInput from "../components/common-components/FormInput.vue";
import VueRouter from "vue-router";
import PulseLoader from "vue-spinner/src/GridLoader.vue";
import BaseComponent from "../components/common-components/BaseComponent.vue";
@Options({
  props: {},
  components: {
    FormInput,
    CoButton,
    CoPageLayout,
    PulseLoader,
    BaseComponent,
    CoLoading,
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
}

.card-size {
  height: 500px;
  width: 360px;
}
</style>
