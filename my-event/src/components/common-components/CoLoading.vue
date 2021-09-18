<template>
  <div class="" :class="{ overlay: overlay }">
    <pulse-loader
      v-if="type == 'pulse'"
      :loading="spinnerLoading"
      :color="color"
      :size="size"
    ></pulse-loader>

    <grid-loader
      v-else-if="type == 'grid'"
      :loading="spinnerLoading"
      :color="color"
      :size="size"
    ></grid-loader>

    <clip-loader
      v-else-if="type == 'clip'"
      :loading="spinnerLoading"
      :color="color"
      :size="size"
    ></clip-loader>

    <rise-loader
      v-else-if="type == 'rise'"
      :loading="spinnerLoading"
      :color="color"
      :size="size"
    ></rise-loader>
    <beat-loader
      v-else-if="type == 'beat'"
      :loading="spinnerLoading"
      :color="color"
      :size="size"
    ></beat-loader>

    <sync-loader
      v-else-if="type == 'sync'"
      :loading="spinnerLoading"
      :color="color"
      :size="size"
    ></sync-loader>
    <rotate-loader
      v-else-if="type == 'rotate'"
      :loading="spinnerLoading"
      :color="color"
      :size="size"
    ></rotate-loader>

    <fade-loader
      v-else-if="type == 'fade'"
      :loading="spinnerLoading"
      :color="color"
      :height="height"
      :width="width"
    ></fade-loader>

    <pacman-loader
      v-else-if="type == 'pacman'"
      :loading="spinnerLoading"
      :color="color"
      :size="size"
    ></pacman-loader>

    <square-loader
      v-else-if="type == 'square'"
      :loading="spinnerLoading"
      :color="color"
      :size="size"
    ></square-loader>

    <scale-loader
      v-else-if="type == 'scale'"
      :loading="spinnerLoading"
      :color="color"
      :height="height"
      :width="width"
    ></scale-loader>

    <skew-loader
      v-else-if="type == 'skew'"
      :loading="spinnerLoading"
      :color="color"
      :size="size"
    ></skew-loader>

    <moon-loader
      v-else-if="type == 'moon'"
      :loading="spinnerLoading"
      :color="color"
      :size="size"
    ></moon-loader>

    <ring-loader
      v-else-if="type == 'ring'"
      :loading="spinnerLoading"
      :color="color"
      :size="size"
    ></ring-loader>

    <bounce-loader
      v-else-if="type == 'bounce'"
      :loading="spinnerLoading"
      :color="color"
      :size="size"
    ></bounce-loader>

    <dot-loader
      v-else-if="type == 'dot'"
      :loading="spinnerLoading"
      :color="color"
      :size="size"
    ></dot-loader>
  </div>
</template>

<script lang="ts">
import { Options } from "vue-class-component";
import BaseComponent from "./BaseComponent.vue";
import BounceLoader from "vue-spinner/src/BounceLoader.vue";
import RiseLoader from "vue-spinner/src/RiseLoader.vue";
import RotateLoader from "vue-spinner/src/RotateLoader.vue";
import ScaleLoader from "vue-spinner/src/ScaleLoader.vue";
import SkewLoader from "vue-spinner/src/SkewLoader.vue";
import SquareLoader from "vue-spinner/src/SquareLoader.vue";
import SyncLoader from "vue-spinner/src/SyncLoader.vue";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";
import FadeLoader from "vue-spinner/src/FadeLoader.vue";
import GridLoader from "vue-spinner/src/GridLoader.vue";
import MoonLoader from "vue-spinner/src/MoonLoader.vue";
import PacmanLoader from "vue-spinner/src/PacmanLoader.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import RingLoader from "vue-spinner/src/RingLoader.vue";
@Options({
  components: {
    BounceLoader,
    RiseLoader,
    RingLoader,
    RotateLoader,
    ScaleLoader,
    SkewLoader,
    SquareLoader,
    SyncLoader,
    ClipLoader,
    FadeLoader,
    GridLoader,
    MoonLoader,
    PacmanLoader,
    PulseLoader,
  },
  props: {
    type: String,
    spinnerLoading: Boolean,
    color: String,
    size: String,
    overlay: Boolean,
  },
})
export default class CoLoading extends BaseComponent {
  type!: String;
  spinnerLoading!: Boolean;
  color!: string;
  size!: string;
}
</script>

<style>
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: inherit;
  color: #333;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
}
</style>