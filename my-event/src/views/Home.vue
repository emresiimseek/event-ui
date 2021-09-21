<template>
  <div class="header">
    <nav-bar class="w-100 fixed-top" />
  </div>
  <router-view />
</template>

<script>
import CoLoading from "../components/common-components/CoLoading.vue";
import BaseComponent from "../components/common-components/BaseComponent.vue";
import CoPageLayout from "../components/common-components/CoPagelayout.vue";
import NavBar from "../components/common-components/NavBar.vue";
import { Options, Vue } from "vue-class-component";
import CoCard from "../components/common-components/CoCard.vue";
@Options({
  components: { CoPageLayout, NavBar, BaseComponent, CoCard, CoLoading },
})
export default class Home extends BaseComponent {}
</script>
<style>
.header {
  height: 60px;
}
</style>