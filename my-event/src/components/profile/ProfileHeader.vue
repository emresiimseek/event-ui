<template>
  <div class="d-flex flex-column font-1 border rounded profile-header p-2">
    <div class="d-flex align-items-center center gap-2">
      <div class="profile-user-icon w-20 d-flex justify-content-center">
        <i class="far fa-user-circle fa-4x"></i>
      </div>
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
        <div class="font-1 bold-text d-inline-flex gap-2">
          <div>Arkadaşlar: 0</div>
          <div>Takipçiler: 0</div>
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
.profile-header {
  width: 60% !important;
}

@media only screen and (max-width: 600px) {
  .profile-header {
    width: 70% !important;
    margin: auto;

    .profile-user-icon {
      svg {
        font-size: 3em;
      }
    }
  }
}
</style>