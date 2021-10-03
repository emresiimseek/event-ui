<template>
  <co-page-layout
    mainClass="d-flex flex-1 justify-content-center fill-height"
    class="event-flow"
  >
    <div class="d-flex flex-row flex-1 mt-2">
      <div class="card-container w-100 flex-1 justify-content-end p-1 d-flex">
        <div class="w-60">
          <friends-events />
        </div>
      </div>
      <div class="pt-1 col-5 fixed-right-area">
        <div
          class="
            right-area
            rounded
            border
            bg-white
            position-fixed
            p-2
            text-center
          "
        >
          <span class="font-1 bold-text">Önerilenler</span>
        </div>
      </div>
    </div>
  </co-page-layout>
</template>
<script lang="ts" >
import FriendsEvents from "../components/FriendsEvents.vue";
import CoButton from "../components/common-components/CoButton.vue";
import FormInput from "../components/common-components/FormInput.vue";
import CoPopover from "../components/common-components/CoPopover.vue";
import CoPageLayout from "../components/common-components/CoPageLayout.vue";
import BaseComponent from "@/components/common-components/BaseComponent.vue";
import { Options } from "vue-class-component";
import CoCard from "../components/common-components/CoCard.vue";
import { Activity } from "@/logic/modules/activities/types/activity";
import { activityLogic } from "@/logic/modules/activities/activity-logic";
import { account } from "@/store/modules/users";
@Options({
  components: {
    CoCard,
    BaseComponent,
    FormInput,
    CoPageLayout,
    CoPopover,
    CoButton,
    FriendsEvents,
  },
})
export default class EventFlow extends BaseComponent {
  isVisible: Boolean = false;

  get userId() {
    return account.state.user.id;
  }

  getEvents() {
    this.handleRequest<Activity[]>(() => activityLogic.getAll(this.userId));
  }

  showModal() {
    this.isVisible = true;
  }
}
</script>
<style lang="scss" scoped>
.right-area {
  height: 350px;
  width: 16%;
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