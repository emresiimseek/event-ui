<template>
  <co-page-layout
    mainClass="d-flex flex-1 justify-content-center fill-height"
    class="event-flow"
  >
    <div class="d-flex flex-row flex-1">
      <div class="card-container w-100 flex-1 justify-content-end p-3 d-flex">
        <div class="w-75">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          quas unde itaque maiores illo repellendus labore ad, sapiente
          doloribus. Magni, quia fuga. Est pariatur, blanditiis culpa animi sit
          fugiat fugit deserunt aperiam laboriosam, eum, qui quis sed provident
          possimus vel porro ducimus suscipit. Veritatis et iusto blanditiis
          harum, iure architecto maiores quo tempora reiciendis cumque possimus
          quas ad molestiae incidunt? Illo dolore dolores culpa in sint mollitia
          consequuntur, aspernatur aliquid. Dolor architecto rerum facilis
          repellat suscipit accusantium porro. Nulla omnis quam culpa ut ducimus
          suscipit, illum eius voluptatibus neque inventore corrupti dignissimos
          distinctio id nesciunt possimus ipsum nemo, cupiditate officiis!

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
  },
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