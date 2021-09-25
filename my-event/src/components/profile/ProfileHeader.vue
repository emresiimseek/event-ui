<template>
  <div class="d-flex flex-column border rounded">
    <div class="d-flex gap-1">
      <co-button
        @click="toProfile"
        class="profile-user-button col-4"
        color="dark"
        is-outline
        icon="far fa-user fa-3x"
      ></co-button>
      <div class="d-flex flex-column gap-1">
        <div>
          <div class="text-capitalize bold-text">
            {{ user.firstName }} {{ user.lastName }}
          </div>
          <div>
            {{ user.userName }}
          </div>
          <div>
            {{ user.email }}
          </div>
        </div>
        <div class="font-1 bold-text">
          <div>Arkadaşlar:0</div>
          <div>Takipçiler:0</div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CoButton from "../common-components/CoButton.vue";
import { UserDto } from "@/logic/types/common-types/user-dto";
import { PropType } from "@vue/runtime-core";
import { Options } from "vue-class-component";
import BaseComponent from "../common-components/BaseComponent.vue";
@Options({
  components: { CoButton },
  props: { user: Object as PropType<UserDto> },
})
export default class ProfileHeader extends BaseComponent {}
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