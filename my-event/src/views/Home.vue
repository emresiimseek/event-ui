<template>
  <div class="fill-height-10">
    <nav-bar class="w-100 fixed-top" />
  </div>
  <router-view />
</template>

<script lang="ts">
import CoLoading from "../components/common-components/CoLoading.vue";
import BaseComponent from "../components/common-components/BaseComponent.vue";
import NavBar from "../components/common-components/NavBar.vue";
import { Options, Vue } from "vue-class-component";
import CoCard from "../components/common-components/CoCard.vue";
import { account } from "@/store/modules/users";
import { UserAuthenticationDto } from "@/logic/modules/users/types/user-authentication-dto";

@Options({
  components: { NavBar, BaseComponent, CoCard, CoLoading },
})
export default class Home extends BaseComponent {
  get userAuthenticationDto() {
    return JSON.parse(sessionStorage.getItem("authentication") ?? "");
  }

  created() {
    account.commit("login", this.userAuthenticationDto);
  }
}
</script>