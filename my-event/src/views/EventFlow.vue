<template>
  <co-page-layout
    mainClass="d-flex flex-1 justify-content-center fill-height"
    class="event-flow"
  >
    <div class="d-flex flex-row flex-1">
      <div
        class="card-container w-100 flex-1 justify-content-end p-3 d-flex jus"
      >
        <div class="w-75">
          <co-card></co-card>
          <co-card></co-card>
          <co-card></co-card>
          <co-card></co-card>
          <co-card></co-card>
          <co-card></co-card>
        </div>
      </div>

      <div class="pt-3 col-4 fixed-right-area">
        <div
          class="
            right-area
            rounded
            border
            bg-white
            position-fixed
            p-3
            text-center
          "
        >
          <span class="font-2">Başlık</span>
        </div>
      </div>
    </div>
  </co-page-layout>
</template>

<script lang="ts" >
import CoPageLayout from "../components/common-components/CoPageLayout.vue";
import FormInput from "../components/common-components/FormInput.vue";
import BaseComponent from "@/components/common-components/BaseComponent.vue";
import { Options } from "vue-class-component";
import CoCard from "../components/common-components/CoCard.vue";
import { Activity } from "@/logic/modules/activities/types/activity";
import { activityLogic } from "@/logic/modules/activities/activity-logic";
import { account } from "@/store/modules/users";
@Options({
  components: { CoCard, BaseComponent, FormInput, CoPageLayout },
})
export default class EventFlow extends BaseComponent {
  get userId() {
    return account.state.user.id;
  }

  getEvents() {
    this.handleRequest<Activity[]>(() => activityLogic.getAll(this.userId));
  }
}
</script>
<style lang="scss" scoped>
.right-area {
  height: 400px;
  width: 20%;
  margin-left: 12px;
}

@media only screen and (max-width: 600px) {
  .event-flow {
    .fixed-right-area {
      display: none;
    }

    .card-container {
      justify-content: center !important;
      div {
        width: 100% !important;
      }
    }
  }
}
</style>