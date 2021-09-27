<template>
  <div
    class="
      d-flex
      flex-column flex-1
      signup-container
      position-absolute
      above-index
    "
  >
    <div class="text-white text-center">Kaydol</div>
    <form-input
      v-model:value="user.firstName"
      :inputType="inputType"
      class="mb-1"
      size="sm"
      label="Adı"
      :validations="validations"
      fieldName="FirstName"
      max-width="215px"
    />
    <form-input
      v-model:value="user.lastName"
      :inputType="inputType"
      class="mb-1"
      size="sm"
      label="Soyad"
      :validations="validations"
      fieldName="LastName"
      max-width="215px"
    />

    <form-input
      v-model:value="user.userName"
      inputType="email"
      class="mb-2"
      size="sm"
      label="Kullanıcı Adı"
      :validations="validations"
      fieldName="UserName"
      max-width="215px"
    />

    <form-input
      v-model:value="user.email"
      :inputType="inputType"
      class="mb-2"
      size="sm"
      label="E-Posta"
      :validations="validations"
      fieldName="Email"
      max-width="215px"
    />

    <form-input
      v-model:value="user.password"
      inputType="password"
      class="mb-2"
      size="sm"
      label="Parola"
      fieldName="Password"
      :validations="validations"
      max-width="215px"
    />
    <div class="d-flex justify-content-around pt-2 gap-3">
      <co-button
        @button-clicked="toLogin"
        :buttonLoading="isAnyLoading"
        buttonText="Giriş"
        color="light"
        size="sm"
        icon="fas fa-arrow-left"
      />
      <co-button
        @button-clicked="save"
        :buttonLoading="isAnyLoading"
        buttonText="Kaydet"
        color="light"
        size="sm"
        icon="fas fa-save"
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
import { ServiceResponseDto } from "@/logic/types/common-types/service-response-dto";

@Options({ components: { FormInput, CoButton } })
export default class SignUp extends BaseComponent {
  user: UserDto = userAuthenticationLogic.defaultDto();
  inputType: InputType = "text";

  toLogin() {
    this.$router.push({ name: "login" });
  }

  async save() {
    const result = await this.handleRequest<ServiceResponseDto<UserDto[]>>(() =>
      userAuthenticationLogic.save(this.user)
    );

    if (result?.errors.length) {
      result.errors.forEach((e) =>
        this.toast("danger", e.statusCode.toString(), e.errors.join(","))
      );
    }

    if (!!result?.model.length) this.succsess("Kaydet İşlemi Başarılı.");
  }
}
</script>

<style scpoed>
.signup-container {
  max-width: 250px;
}
</style>