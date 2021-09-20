<template>
  <div
    class="position-absolute above-index d-flex align-items-center flex-column"
  >
    <div>
      <span class="text-white">Kaydol</span>
      <form-input
        v-model:value="user.firstName"
        :inputType="inputType"
        class="mb-1"
        size="sm"
        label="Adı"
      />
      <form-input
        v-model:value="user.lastName"
        :inputType="inputType"
        class="mb-1"
        size="sm"
        label="Soyad"
      />
      <form-issssssnput
        v-model:value="user.userName"
        :inputType="inputType"
        class="mb-1"
        size="sm"
        label="Kullanıcı Adı"
      />
      <form-input
        v-model:value="user.gender"
        inputType="number"
        class="mb-1"
        size="sm"
        label="Cinsiyet"
      />
      <form-input
        v-model:value="user.email"
        :inputType="inputType"
        class="mb-2"
        size="sm"
        label="E-Posta"
      />
      <co-button
        @button-clicked="save"
        buttonText="Kaydet"
        color="light"
        is-outline
        size="sm"
        class="mx-2 m-auto"
        icon="fas fa-save"
        fillWidth
      />
      <co-button
        @button-clicked="toLogin"
        buttonText="Giriş"
        color="light"
        is-outline
        size="sm"
        class="mx-2 mb-3 m-auto"
        icon="fas fa-arrow-left"
        fill-width
      />
    </div>
  </div>
</template>

<script lang="ts">
import CoButton from "../components/common-components/CoButton.vue";
import FormInput from "../components/common-components/FormInput.vue";
import BaseComponent from "@/components/common-components/BaseComponent.vue";
import { Options } from "vue-class-component";
import { userAuthenticationLogic } from "@/logic/modules/users/user-authentication-logic";
import { UserDto } from "@/logic/types/common-types/user-dto";
import { InputType } from "@/logic/types/common-types/input-type";

@Options({ components: { FormInput, CoButton } })
export default class SignUp extends BaseComponent {
  user: UserDto = userAuthenticationLogic.defaultDto();
  inputType: InputType = "text";

  toLogin() {
    this.$router.push({ name: "login" });
  }

  async save() {
    const result = await this.handleRequest<UserDto>(() =>
      userAuthenticationLogic.save(this.user)
    );

    if (!result) return;

    this.user = result.data.model;
  }
}
</script>

<style>
</style>