<template>
  <div class="position-absolute above-index">
    <div>
      <div class="text-white text-center">Giriş</div>

      <form-input
        v-model:value="user.userName"
        placeHolder="Kullanıcı Adı"
        inputType="text"
        size="sm"
        label="Kullanıcı Adı"
        clasess="mb-2"
        labelColor="white"
      />
      <form-input
        v-model:value="user.password"
        placeHolder="Parola"
        inputType="password"
        size="sm"
        label="Parola"
        clasess="mb-1"
      />

      <div class="text-white font-1 text-end mb-4 hoverable">
        Parolana mı Unuttun?
      </div>
      <div class="d-flex flex-column">
        <co-button
          @button-clicked="submit"
          :buttonLoading="isAnyLoading"
          buttonText="Giriş"
          color="light"
          is-outline
          size="sm"
          class="mx-2"
          icon="fas fa-sign-in-alt"
          fill-width
        />

        <co-button
          @button-clicked="toSignIn"
          buttonText="Kaydol"
          color="light"
          is-outline
          size="sm"
          class="mx-2 mb-3"
          icon="fas fa-align-left"
          fill-width
        />

        <co-loading
          :spinnerLoading="isAnyLoading"
          type="grid"
          class="m-auto mb-3"
          color="white"
        />
      </div>
    </div>
    <span class="font-2 text-white text-center above-index">
      <span v-for="item in messages" :key="item">
        {{ item }}
      </span>
    </span>
    <span class="font-1 text-white d-flex justify-content-center"
      >© 2021 from BeSocial</span
    >
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

  user: UserAuthenticationDto = { userName: "", password: "", token: "" };

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