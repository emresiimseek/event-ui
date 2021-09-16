<template>
  <co-page-layout class="login-base-container" position="absolute">
    <div
      class="
        d-flex
        flex-column
        justify-content-center
        align-items-center
        login-container
      "
    >
      <div class="card-body position-absolute login-form-inputs">
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

        <div class="text-white font-1 text-end mb-1">Parolana mı Unuttun?</div>
        <div class="d-flex flex-column">
          <co-button
            @click="submit"
            buttonText="Giriş"
            color="light"
            is-outline
            size="sm"
            class="mx-2"
            fill-width
          />
          <co-button
            buttonText="Kaydol"
            color="light"
            is-outline
            size="sm"
            class="mx-2 mb-3"
            fill-width
          />
          <span class="font-2 text-white text-center">{{ msg }}</span>
        </div>
      </div>
      <div class="bg-dark p-3 px-5 opacity-50 rounded-3 card-size"></div>
    </div>
  </co-page-layout>
</template>

<script lang="ts">
import { UserAuthenticationDto } from "../logic/modules/users/types/user-authentication-dto";
import { userAuthenticationLogic } from "../logic/modules/users/user-authentication-logic";
import store from "../store";
import { account, key } from "../store/modules/users";
import { Options, Vue } from "vue-class-component";
import { useStore } from "vuex";
import CoButton from "../components/common-components/Button.vue";
import Button from "../components/common-components/Button.vue";
import CoPageLayout from "../components/common-components/CoPagelayout.vue";
import FormInput from "../components/common-components/FormInput.vue";
import VueRouter from "vue-router";

import BaseComponent from "../components/common-components/BaseComponent.vue";
@Options({
  props: {},
  components: { FormInput, CoButton, CoPageLayout },
})
export default class LoginPageComponent extends BaseComponent {
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

  async submit(value: string) {
    const result = await this.handleRequest(() =>
      userAuthenticationLogic.authentication(this.user)
    );

    await this.setSessionStorage(result.data);

    account.commit("login", result, { root: true });

    if (!!result.data) this.$router.push({ path: "/", name: "Home" });
    else this.msg = "Kullanıcı adı veya parola yanlış!";
  }

  private setSessionStorage(data: UserAuthenticationDto) {
    sessionStorage.setItem("authentication", JSON.stringify(data));
  }
}
</script>

<style  scoped>
.login-container {
  height: auto;
}

.login-base-container {
  background: url("../../public/images/fun.jpg");
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  background-size: cover;
}

.card-size {
  height: 500px;
  width: 450px;
}

.login-form-inputs {
  z-index: 5;
}
</style>
