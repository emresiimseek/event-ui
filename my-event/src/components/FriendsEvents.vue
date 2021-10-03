<template>
  <co-card v-for="item in events" :key="item.userId" class="mb-3">
    <template #header>
      <div>
        <span class="d-flex align-items-center gap-2">
          <i class="fas fa-user-circle icon-fon-size-lg"></i>
          {{ item.userName }}
        </span>
      </div>
    </template>

    <template> </template>

    <template #footer>
      <div class="d-flex">
        <div class="col-5 text-start">
          <div class="bold-text">{{ item.activityTitle }}</div>
          <div class="font-1">{{ item.activityDescription }}</div>
        </div>
        <div class="flex-1 text-end font-1">
          <div>
            <i class="fas fa-calendar"></i>
            {{ dateTime(item.activityDate) }}
          </div>
          <div class="mt-2">
            <span
              v-for="item in item.categories"
              :key="item.id"
              class="bg-dark text-white p-1 rounded"
            >
              {{ item.title }}
            </span>
          </div>
        </div>
      </div>
    </template>
  </co-card>
</template>
<script lang="ts">
import CoCard from "./common-components/CoCard.vue";
import BaseComponent from "@/components/common-components/BaseComponent.vue";
import { Options } from "vue-class-component";
import { MainFlowUserActivityDto } from "@/logic/modules/activities/types/main-flow-user-activity-dto";
import { activityLogic } from "@/logic/modules/activities/activity-logic";

@Options({
  components: { CoCard },
  props: {},
})
export default class FriendsEvents extends BaseComponent {
  events: MainFlowUserActivityDto[] = [];

  created() {
    this.getFriendsEvents();
  }

  async getFriendsEvents() {
    const result = await this.handleRequest(() =>
      activityLogic.getFriendsEvents(this.currentUserId)
    );

    this.events = result ?? [];
  }
}
</script>
<style>
</style>