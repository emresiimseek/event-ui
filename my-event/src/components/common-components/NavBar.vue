<template>
  <div class="font-2 nav-var border-bottom bg-white">
    <nav
      id="menu"
      class="
        d-flex
        justify-content-center
        align-items-center
        flex-row
        p-2
        w-100
      "
    >
      <span class="font-3 col-3 bold-text">BeSocialize</span>

      <div class="col-3 d-flex justify-content-center">
        <form-input clasess=" font-1" size="sm" class="w-75" />
      </div>
      <div
        class="d-flex font-2 justify-content-center align-items-center col-4"
      >
        <router-link to="/login">Anasayfa</router-link>
        <router-link to="/login">Etkinlikler</router-link>
        <router-link to="/login">Profil</router-link>
        <co-button
          @click="toCreateEvent"
          color="secondary"
          icon="far fa-calendar-alt"
          size="sm"
          is-outline
          buttonText="Etkinlik Yarat"
        />
      </div>
      <div class="icon-container d-flex justify-content-around col-1">
        <span><i class="far fa-user"></i></span>
        <span><i class="fas fa-cog"></i></span>
      </div>
    </nav>
  </div>
</template>
<script lang="ts">
import CoButton from "./CoButton.vue";
import { PropType } from "@vue/runtime-core";
import { Options, Vue } from "vue-class-component";
import { NavLinkItem } from "../../logic/types/common-types/link-type";
import BaseComponent from "./BaseComponent.vue";
import FormInput from "./FormInput.vue";
@Options({
  props: { items: Object as PropType<NavLinkItem[]> },
  components: { FormInput, BaseComponent, CoButton },
})
export default class NavBar extends BaseComponent {
  toCreateEvent() {
    this.$router.push("newevent");
  }
}
</script>
<style >
nav a {
  color: black;
  text-decoration: none;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  transition: color 0.1s ease-out;
  text-align: center;
  margin-right: 12px;
}

nav .menu-text a:hover {
  color: rgba(39, 39, 39, 0.877);
}

.icon-container {
  margin-left: 15px;
}

.nav-var {
  height: 60px;
  display: flex;
  flex: 1;
}
</style>

