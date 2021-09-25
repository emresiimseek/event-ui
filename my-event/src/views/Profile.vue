<template>
  <co-page-layout mainClass="flex-1">
    <profile-header :user="user" class="mb-3" />

    <div class="card-container">
      <co-card></co-card>
      <co-card></co-card>
      <co-card></co-card>
      <co-card></co-card>
    </div>
  </co-page-layout>
</template>

<script lang="ts">
import CoLoading from "../components/common-components/CoLoading.vue";
import ProfileHeader from "../components/profile/ProfileHeader.vue";
import CoCard from "../components/common-components/CoCard.vue";
import CoButton from "../components/common-components/CoButton.vue";
import CoPageLayout from "../components/common-components/CoPageLayout.vue";
import BaseComponent from "@/components/common-components/BaseComponent.vue";
import { Options } from "vue-class-component";
import { userAuthenticationLogic } from "@/logic/modules/users/user-authentication-logic";
import { account } from "@/store/modules/users";
import { UserDto } from "@/logic/types/common-types/user-dto";
import { activityLogic } from "@/logic/modules/activities/activity-logic";

@Options({
  components: { CoPageLayout, CoButton, CoCard, ProfileHeader, CoLoading },
})
export default class Profile extends BaseComponent {
  user: UserDto = userAuthenticationLogic.defaultDto();

  created() {
    this.getUser();
  }

  get userId() {
    return account.state.user.id;
  }

  async getUser() {
    var result = await this.handleRequest(() =>
      userAuthenticationLogic.get(`users/${this.userId}`)
    );

    if (result) this.user = result;
  }

  async getEvents() {
    const result = await this.handleRequest(() =>
      activityLogic.getAll(this.userId)
    );
  }
}
</script>

<style lang="scss">
.profile-user-button {
  button {
    border-radius: 50%;
    padding: 20px;
    width: 100px;
    height: 100px;
  }
}
</style>