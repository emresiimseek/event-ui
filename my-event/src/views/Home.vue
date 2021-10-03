<template>
  <div class="fill-height-8">
    <nav-bar class="w-100 fixed-top" />
  </div>
  <router-view :key="param" />

  <div
    class="
      fixed-bottom
      bottom-nav-container
      w-100
      fill-height-8
      bg-white
      border-top
    "
  >
    <div
      class="
        d-flex
        justify-content-center
        gap-4
        fill-height-8
        align-items-center
        bottom-nav
      "
    >
      <i class="fas fa-home hoverable"></i>
      <i class="fas fa-plus-circle hoverable"></i>
      <i class="far fa-user-circle hoverable"></i>
    </div>
  </div>
</template>

<script lang="ts">
import CoButton from "../components/common-components/CoButton.vue";
import CoLoading from "../components/common-components/CoLoading.vue";
import BaseComponent from "../components/common-components/BaseComponent.vue";
import NavBar from "../components/common-components/NavBar.vue";
import { Options, Vue } from "vue-class-component";
import CoCard from "../components/common-components/CoCard.vue";
import { account } from "@/store/modules/users";
import { UserAuthenticationDto } from "@/logic/modules/users/types/user-authentication-dto";

@Options({
  components: { NavBar, BaseComponent, CoCard, CoLoading, CoButton },
})
export default class Home extends BaseComponent {
  get userAuthenticationDto() {
    return JSON.parse(sessionStorage.getItem("authentication") ?? "");
  }

  get param() {
    return this.$route.params;
  }

  created() {
    account.commit("login", this.userAuthenticationDto);
  }
}
</script>
<style lang="scss" scoped>
.bottom-nav svg {
  font-size: 1.6em;
}

@media only screen and(min-width:600px) {
  .bottom-nav-container {
    display: none;
  }
}
</style>