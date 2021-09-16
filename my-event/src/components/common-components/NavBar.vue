<template>
  <div class="font-2 border-bottom bg-white">
    <nav
      id="menu"
      class="d-flex flex-row justify-content-center align-items-center p-2"
    >
      <span class="font-2 bold-text">BeSocialize</span>

      <div class="d-flex flex-1 justify-content-center">
        <router-link to="/login">Anasayfa</router-link>
        <router-link to="/login">Etkinlikler</router-link>
        <router-link to="/login">Profil</router-link>
      </div>

      <div class="d-flex flex-3 justify-content-center">
        <form-input clasess="p-0 font-1" />
      </div>
    </nav>
  </div>
</template>
<script lang="ts">
import { PropType } from "@vue/runtime-core";
import { Options, Vue } from "vue-class-component";
import { NavLinkItem } from "../../logic/types/common-types/link-type";
import BaseComponent from "./BaseComponent.vue";
import FormInput from "./FormInput.vue";
@Options({
  props: { items: Object as PropType<NavLinkItem[]> },
  components: { FormInput, BaseComponent },
})
export default class NavBar extends BaseComponent {}
</script>
<style scoped>
nav a {
  font-size: 1em;
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
</style>

