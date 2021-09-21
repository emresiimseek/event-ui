<template>
  <div class="font-2 nav-var -bottom bg-white border-bottom">
    <nav id="menu" class="d-flex flex-row align-items-center flex-1">
      <span class="font-3 col-2 bold-text text-center hoverable"
        >BeSocialize</span
      >

      <div class="col-4 d-flex justify-content-end">
        <search-input class="w-50" />
      </div>

      <div class="d-flex justify-content-end align-items-center font-2 col-4">
        <router-link to="/flow">Anasayfa</router-link>
        <router-link to="/flow">Etkinlikler</router-link>
        <router-link to="/login">Profil</router-link>
        <co-button
          @click="toCreateEvent"
          color="secondary"
          icon="far fa-calendar-alt"
          size="sm"
          is-outline
          buttonText="Etkinlik Oluştur"
        />
      </div>
      <div class="d-flex icon-container justify-content-center col-2 gap-3">
       
        <span class="hoverable d-inline-flex align-items-center"
          ><i class="far fa-user"></i
          ><span class="text-capitalize font-2">{{ user }}</span>
        </span>
        
        <span class="hoverable"><i class="fas fa-cog"></i></span>
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
import SearchInput from "./SearchInput.vue";
import { account } from "@/store/modules/users";
import { UserDto } from "@/logic/types/common-types/user-dto";
import { UserAuthenticationDto } from "@/logic/modules/users/types/user-authentication-dto";
@Options({
  props: { items: Object as PropType<NavLinkItem[]> },
  components: { FormInput, BaseComponent, CoButton, SearchInput },
})
export default class NavBar extends BaseComponent {
  toCreateEvent() {
    this.$router.push("newevent");
  }

  get user() {
    const jsonData = sessionStorage.getItem("authentication") ?? "";
    const userDto = JSON.parse(jsonData) as UserAuthenticationDto;
    return userDto.userName;
  }
}
</script>
<style lang="scss">
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

