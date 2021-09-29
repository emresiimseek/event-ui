<template>
  <div
    class="
      d-flex
      justify-content-center
      align-items-center
      position-absolute
      above-index
      flex-column
      gap-2
    "
  >
    <div class="d-flex flex-column flex-1">
      <div class="text-white text-center">Giriş</div>

      <form-input
        v-model:value="user.userName"
        placeHolder="Kullanıcı Adı"
        inputType="text"
        size="sm"
        label="Kullanıcı Adı"
        clasess="mb-2"
        labelColor="white"
        :validations="validations"
        fieldName="UserName"
        maxWidth="194px"
      />
      <form-input
        v-model:value="user.password"
        placeHolder="Parola"
        inputType="password"
        size="sm"
        label="Parola"
        clasess="mb-1"
        :validations="validations"
        fieldName="Password"
        maxWidth="194px"
      />

      <div class="text-white font-0 text-end mb-3 mt-2 hoverable">
        Parolana mı Unuttun?
      </div>
      <div class="d-flex flex-column gap-1">
        <co-button
          @button-clicked="submit"
          :buttonLoading="isAnyLoading"
          buttonText="Giriş"
          color="light"
          size="sm"
          class="mx-2"
          icon="fas fa-sign-in-alt"
          fill-width
        />
        <co-button
          @button-clicked="toSignIn"
          :buttonLoading="isAnyLoading"
          buttonText="Kaydol"
          color="light"
          size="sm"
          class="mx-2"
          icon="fas fa-align-left"
          fill-width
        />
      </div>
    </div>

    <div class="d-flex flex-column flex-1 gap-2">
      <co-loading
        :spinnerLoading="isAnyLoading"
        type="grid"
        class="m-auto mb-3"
        color="white"
      />
      <span class="font-1 text-white text-center">
        <span
          v-for="item in messages"
          :key="item"
          class="text-center bg-danger p-1 rounded"
        >
          {{ item }}
        </span>
      </span>

      <span class="text-white text-center font-1 col-12"
        >© 2021 from BeSocial</span
      >
    </div>
  </div>
</template>
<script lang="ts">
import CoLoading from "../components/common-components/CoLoading.vue";
import CoButton from "../components/common-components/CoButton.vue";
import FormInput from "../components/common-components/FormInput.vue";
import BaseComponent from "@/components/common-components/BaseComponent.vue";
import { Options } from "vue-class-component";
import { PropType } from "@vue/runtime-core";
import { UserAuthenticationDto } from "@/logic/modules/users/types/user-authentication-dto";
import { useStore } from "vuex";
import { userAuthenticationLogic } from "@/logic/modules/users/user-authentication-logic";
import { account, key } from "@/store/modules/users";
import { ServiceResponseDto } from "@/logic/types/common-types/service-response-dto";
import { UserDto } from "@/logic/types/common-types/user-dto";
@Options({
  components: { FormInput, CoButton, CoLoading },
})
export default class Login extends BaseComponent {
  setup() {
    const store = useStore(key);
    store.state.user;
  }

  messages: string[] = [];

  user: UserAuthenticationDto = {
    userName: "",
    password: "",
    token: "",
    id: 0,
  };

  userNameChanged(value: string) {
    this.user.userName = value;
  }

  passwordChanged(value: string) {
    this.user.password = value;
  }

  toSignIn() {
    this.$router.push({ name: "signup" });
  }

  async submit(value: string) {
    const result = await this.handleRequest<
      ServiceResponseDto<UserAuthenticationDto>
    >(() => userAuthenticationLogic.authentication(this.user));

    if (!!result?.model.length) this.directToHome(result);
    else if (result?.errors.length)
      this.messages = result.errors?.flatMap((m) => m.errors);
  }

  private directToHome(
    responseModel: ServiceResponseDto<UserAuthenticationDto>
  ) {
    this.setSessionStorage(responseModel.model[0]);
    account.commit("login", responseModel.model[0], { root: true });
    this.$router.push({ name: "flow" });
  }

  private setSessionStorage(data: UserAuthenticationDto) {
    sessionStorage.setItem("authentication", JSON.stringify(data));
  }
}
</script>

<style>
.above-index {
  z-index: 5;
}
</style>