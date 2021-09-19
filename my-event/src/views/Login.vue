<template>
  <div class="position-absolute login-form-inputs">
    <div class="card-title text-white text-center">Login</div>
    <form-input
      :v-model="user.userName"
      placeHolder="Kullanıcı Adı"
      inputType="text"
      size="sm"
      label="Kullanıcı Adı"
      clasess="mb-2"
      @valueChanged="userNameChanged"
    />
    <form-input
      placeHolder="Parola"
      inputType="password"
      size="sm"
      label="Parola"
      @valueChanged="passwordChanged"
      clasess="mb-1"
    />

    <div class="text-white font-1 text-end mb-4 hoverable">
      Parolana mı Unuttun?
    </div>
    <div class="d-flex flex-column">
      <co-button
        @button-clicked="submit"
        buttonText="Giriş"
        :buttonLoading="isAnyLoading"
        color="light"
        is-outline
        size="sm"
        class="mx-2"
        fill-width
      />

      <co-button
        @button-clicked="toSignIn"
        buttonText="Kaydol"
        color="light"
        is-outline
        size="sm"
        class="mx-2 mb-3"
        fill-width
      />

      <co-loading
        :spinnerLoading="isAnyLoading"
        type="grid"
        class="m-auto"
        color="white"
      />

      <span class="font-2 text-white text-center">{{ msg }}</span>
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

@Options({
  components: { FormInput, CoButton, CoLoading },
})
export default class Login extends BaseComponent {
  setup() {
    const store = useStore(key);
    store.state.user;
  }
  msg: string = "";

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
    console.log("submit");

    const result = await this.handleRequest(() =>
      userAuthenticationLogic.authentication(this.user)
    );

    if (!!result.data) this.setSessionStorage(result.data);

    account.commit("login", result, { root: true });

    if (!!result.data) this.$router.push({ path: "/", name: "Home" });
    else if (result.status == 204 && !result.data)
      this.msg = "Kullanıcı adı veya parola yanlış!";
  }

  private setSessionStorage(data: UserAuthenticationDto) {
    sessionStorage.setItem("authentication", JSON.stringify(data));
  }
}
</script>
<style>
.login-form-inputs {
  z-index: 5;
}
</style>