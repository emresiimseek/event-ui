<template>
  <div class="position-absolute above-index">
    <div class="signup-container">
      <div class="text-white text-center">Kaydol</div>
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
        v-model:value="user.userName"
        inputType="email"
        class="mb-2"
        size="sm"
        label="Kullanıcı Adı"
        :validations="validations"
        fieldName="UserName"
      />

      <form-input
        v-model:value="user.email"
        :inputType="inputType"
        class="mb-2"
        size="sm"
        label="E-Posta"
      />

      <form-input
        v-model:value="user.password"
        inputType="password"
        class="mb-2"
        size="sm"
        label="Parola"
        fieldName="Password"
        :validations="validations"
      />
      <co-button
        @button-clicked="save"
        :buttonLoading="isAnyLoading"
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
        :buttonLoading="isAnyLoading"
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
import { EnumGender } from "@/logic/modules/users/types/enum-gender";

@Options({ components: { FormInput, CoButton } })
export default class SignUp extends BaseComponent {
  user: UserDto = userAuthenticationLogic.defaultDto();
  inputType: InputType = "text";

  toLogin() {
    this.$router.push({ name: "login" });
  }

  async save() {
    const result = await this.handleRequest<UserDto[]>(() =>
      userAuthenticationLogic.save(this.user)
    );

    if (!!result?.length) this.succsess("Kaydet İşlemi Başarılı.");
  }
}
</script>

<style scpoed>
.signup-container {
  max-width: 250px;
}
</style>