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
        <div class="font-1 d-inline-flex gap-2">
          <div @click="showFollowers" class="hoverable">
            Takipçi: {{ followersCount }}
          </div>
          <div @click="showFollowing" class="hoverable">
            Takip: {{ followingCount }}
          </div>
          <co-button
            v-if="isVisibleUnFollowButton"
            @click="unFollow"
            buttonText="Takipten Çık"
            buttonClasess="font-1 p-1 pt-0 pb-0"
            color="primary"
            size="sm"
            textSize="10px"
            isOutline
          ></co-button>
          <co-button
            v-else-if="isVisibleFollowButton"
            @click="follow"
            buttonText="Takip Et"
            buttonClasess="font-1 p-1 pt-0 pb-0"
            color="primary"
            size="sm"
            textSize="10px"
            isOutline
          ></co-button>
          <followers-modal v-model:value="isVisibleModal" :items="items" />
          <following-modal
            v-model:value="isVisibleModalFollowing"
            :items="items"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import FollowingModal from "./FollowingModal.vue";
import CoList from "../common-components/CoList.vue";
import FollowersModal from "./FollowersModal.vue";
import CoButton from "../common-components/CoButton.vue";
import { UserDto } from "@/logic/types/common-types/user-dto";
import { PropType } from "@vue/runtime-core";
import { Options } from "vue-class-component";
import BaseComponent from "../common-components/BaseComponent.vue";
import { account } from "@/store/modules/users";
import { userLogic } from "@/logic/modules/users/user-logic";
import { UserUserDto } from "@/logic/modules/users/types/user-user-dto";
@Options({
  components: { CoButton, FollowersModal, CoList, FollowingModal },
  props: { user: Object as PropType<UserDto> },
})
export default class ProfileHeader extends BaseComponent {
  user!: UserDto;

  isVisibleModal: Boolean = false;
  isVisibleModalFollowing: Boolean = false;

  items: UserUserDto[] = [];

  get isVisibleFollowButton() {
    return account.state.user.id != this.user.id;
  }

  get isVisibleUnFollowButton() {
    return !!this.user.areFirendsWithMe.find(
      (f) => f.userParentId == account.state.user.id
    );
  }

  get followersCount() {
    return this.user.areFirendsWithMe.length;
  }

  get followingCount() {
    return this.user.iAmFriendsWith.length;
  }

  async follow() {
    const userUser: Pick<UserUserDto, "userParentId" | "userChildId"> = {
      userParentId: account.state.user.id,
      userChildId: this.user.id,
    };

    const data = await this.handleRequest(() => userLogic.follow(userUser));

    if (data) this.succsess("Başarıyla Takip Edildi.");

    this.$emit("followed");
  }

  async unFollow() {
    const userUser: Pick<UserUserDto, "userChildId" | "userParentId"> = {
      userParentId: account.state.user.id,
      userChildId: this.user.id,
    };

    await this.handleRequest(() => userLogic.unFollow(userUser));
    this.succsess("Başarıyla Takipten Edildi.");
    this.$emit("unfollowed");
  }

  showFollowers() {
    this.items = this.user.areFirendsWithMe;
    this.isVisibleModal = true;
  }

  showFollowing() {
    this.items = this.user.iAmFriendsWith;
    this.isVisibleModalFollowing = true;
  }
}
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