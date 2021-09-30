<template>
  <div class="font-2 nav-var -bottom bg-white border-bottom">
    <nav id="menu" class="d-flex flex-row align-items-center flex-1">
      <span
        @click="toEventFlow"
        class="font-3 nav-brand col-2 bold-text text-center hoverable"
        >BeSocialize</span
      >

      <div class="search-area col-4 d-flex justify-content-end">
        <search-input class="search-input w-50" />
      </div>

      <div
        class="
          d-flex
          nav-links
          justify-content-end
          align-items-center
          font-2
          col-4
        "
      >
        <router-link to="/flow">Anasayfa</router-link>
        <router-link to="/flow">Etkinlikler</router-link>
        <router-link to="">Profil</router-link>
        <co-button
          @click="toCreateEvent"
          color="dark"
          icon="far fa-calendar-alt "
          buttonClasess="pb-0 pt-0"
          textSize="16px"
          size="sm"
          is-outline
          buttonText="Etkinlik Oluştur"
        />
      </div>
      <div
        class="
          nav-buttons
          d-flex
          icon-container
          justify-content-center
          align-items-center
          col-2
          gap-3
        "
      >
        <co-button
          class="profile-button"
          icon="fas fa-cog"
          buttonClasess="m-0 p-0"
        ></co-button>
        <co-button
          @click="toProfile"
          class="profile-button"
          icon="far fa-user-circle icon-fon-size-default"
          buttonClasess="m-0 p-0"
        ></co-button>
        <co-button
          @click="signOut"
          class="profile-button"
          icon="fas fa-sign-out-alt icon-fon-size-sm"
          buttonClasess="m-0 p-0"
        ></co-button>
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
  userDto: Partial<UserDto> = {};

  created() {
    this.getUser();
  }

  toCreateEvent() {
    this.$router.push({
      name: "newevent",
    });
  }

  toProfile() {
    this.$router.push({ name: "profile", params: { userId: this.userDto.id } });
  }

  toEventFlow() {
    this.$router.push({
      name: "flow",
    });
  }

  signOut() {
    sessionStorage.clear();
    this.$router.push("login");
  }
  getUser() {
    const jsonData = sessionStorage.getItem("authentication") ?? "";
    this.userDto = JSON.parse(jsonData) as UserAuthenticationDto;
  }
}
</script>
<style lang="scss" scoped>
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

.nav-buttons {
  svg {
    font-size: 1.2em;
  }
}

@media only screen and (max-width: 600px) {
  .nav-links {
    display: none !important;
  }

  .nav-buttons {
    width: 25%;
    margin: 0;
    gap: 0.5rem !important;
  }

  .nav-brand {
    width: 35%;
  }

  .search-area {
    width: 40%;
    .search-input {
      width: 100% !important;
    }
  }
}
</style>

