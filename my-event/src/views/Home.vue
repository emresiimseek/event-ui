<template>
  <co-page-layout position="absolute" class="bg-light overflow-hidden">
    <template #header>
      <nav-bar class="position-relative" />
    </template>

    <!-- <co-loading
      :spinnerLoading="true"
      overlay
      color="black"
      type="sync"
    ></co-loading> -->

    <div
      class="
        container-fluid
        justify-content-center
        d-flex
        main-content
        scroll
        pt-2
      "
    >
      <div class="flex-1"></div>
      <div class="flex-3">
        <co-card></co-card>
        <co-card class=""></co-card>
        <co-card class=""></co-card> <co-card class=""></co-card>
        <co-card class=""></co-card>
      </div>

      <div class="flex-2"></div>
    </div>
  </co-page-layout>
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
.container .left-side {
  min-height: 550px;
}

.scroll {
  overflow: hidden;
  overflow-y: scroll;
}

.main-content {
}
</style>