<template>
  <co-page-layout position="relative" class="bg-light">
    <template #header>
      <nav-bar class="sticky-top" />
    </template>

    <div class="container-fluid w-75 mt-5">
      <div
        class="
          d-flex
          flex-column
          justify-content-center
          align-items-center
          w-75
          p-1
        "
      >
        <co-card class=""></co-card>
        <co-card class=""></co-card> <co-card class=""></co-card>
        <co-card class=""></co-card>
      </div>
    </div>
  </co-page-layout>
</template>

<script>
import BaseComponent from "../components/common-components/BaseComponent.vue";
import CoPageLayout from "../components/common-components/CoPagelayout.vue";
import NavBar from "../components/common-components/NavBar.vue";
import { Options, Vue } from "vue-class-component";
import CoCard from "../components/common-components/CoCard.vue";
@Options({ components: { CoPageLayout, NavBar, BaseComponent, CoCard } })
export default class Home extends BaseComponent {}
</script>
<style>
.main {
  background-color: #fafafa;
  height: 100%;
}

.container .left-side {
  height: 550px;
}
</style>