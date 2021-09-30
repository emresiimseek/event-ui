<template>
  <co-page-layout mainClass="w-50" class="profile-page">
    <profile-header
      :user="user"
      class="mb-3 m-auto"
      @followed="getUser"
      @unfollowed="getUser"
    />
    <div class="card-container">
      <co-card v-for="item in activities" :key="item.id">
        <div
          class="
            fixed-bottom
            position-absolute
            bottom-0
            border-top
            p-1
            text-capitalize
            fill-height-10
            d-flex
            bg-light
            flex-column
            justify-content-around
          "
        >
          <div class="mx-2 d-inline-flex test">
            <span class="flex-1 text-decoration-underline">
              {{ item.title }}
            </span>
            <span> {{ item.eventDate }}</span>
          </div>
          <div class="mx-2">
            <span
              v-for="cat in item.categories"
              :key="cat.id"
              class="bg-dark text-white p-1 rounded font-1"
            >
              {{ cat.title }}
            </span>
          </div>
        </div>
      </co-card>
    </div>
  </co-page-layout>
</template>

<script lang="ts">
import CoPageLayout from "@/components/common-components/CoPageLayout.vue";
import CoLoading from "../components/common-components/CoLoading.vue";
import ProfileHeader from "../components/profile/ProfileHeader.vue";
import CoCard from "../components/common-components/CoCard.vue";
import CoButton from "../components/common-components/CoButton.vue";
import BaseComponent from "@/components/common-components/BaseComponent.vue";
import { Options } from "vue-class-component";
import { userAuthenticationLogic } from "@/logic/modules/users/user-authentication-logic";
import { account } from "@/store/modules/users";
import { UserDto } from "@/logic/types/common-types/user-dto";
import { activityLogic } from "@/logic/modules/activities/activity-logic";
import { userLogic } from "@/logic/modules/users/user-logic";
import { UserProfileActivityDto } from "@/logic/modules/users/types/user-profile-activity";

@Options({
  components: { CoButton, CoCard, ProfileHeader, CoLoading, CoPageLayout },
})
export default class ProfilePage extends BaseComponent {
  user: UserDto = userAuthenticationLogic.defaultDto();
  activities: UserProfileActivityDto[] = [];
  userId: number | null = null;

  created() {
    this.userId = +this.$route.params.userId;

    this.getUser();
    this.getActivities();
  }

  async getActivities() {
    const currentUserId = this.userId;
    if (currentUserId === null) return;

    var result = await this.handleRequest(() =>
      userLogic.getUserActivities(currentUserId)
    );

    if (result) this.activities = result;
  }

  async getUser() {
    const currentUserId = this.userId;
    if (currentUserId === null) return;

    var result = await this.handleRequest(() =>
      userAuthenticationLogic.get(`users/${currentUserId}`)
    );

    if (result) this.user = result;
  }

  async getEvents() {
    const currentUserId = this.userId;
    if (currentUserId === null) return;

    const result = await this.handleRequest(() =>
      activityLogic.getAll(currentUserId)
    );
  }
}
</script>

<style lang="scss" scoped>
.profile-user-button {
  button {
    border-radius: 50%;
    padding: 20px;
    width: 100px;
    height: 100px;
  }
}

@media only screen and (max-width: 600px) {
  .profile-page :deep() .card-container {
    width: 90%;
    margin: auto;
  }

  .profile-page :deep() {
    .pages-areas {
      .main {
        width: 100% !important;
      }
    }
  }
}
</style>