<template>
  <div
    class="
      d-flex
      flex-column
      justify-content-center
      align-items-center
      position-absolute
    "
  >
    <div class="above-index">
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
      </div>
    </div>
    <span class="font-2 text-white text-center above-index">
      <span v-for="item in messages" :key="item">
        {{ item }}
      </span>
    </span>
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
    console.log("submit");

    const result = await this.handleRequest(() =>
      userAuthenticationLogic.authentication(this.user)
    );

    const responseModel = result.data as ServiceResponseDto;

    if (!!responseModel.model.length) this.directToHome(responseModel);
    else if (
      (result.status == 204 || result.status == 200) &&
      !responseModel.model.length
    )
      this.messages = responseModel.errors.flatMap((m) => m.errors);
  }

  private directToHome(responseModel: ServiceResponseDto) {
    this.setSessionStorage(responseModel.model[0]);
    account.commit("login", responseModel.model[0], { root: true });
    this.$router.push({ path: "/", name: "Home" });
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