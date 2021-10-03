<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div
        class="modal-container d-flex flex-column"
        :style="{ width: width, height: height }"
      >
        <div class="modal-header bg-light p-0">
          <slot name="header">
            <div
              class="
                d-flex
                flex-1
                justify-content-end
                align-items-end
                mx-2
                text-center
              "
            >
              <div class="flex-1 bold-text">{{ header }}</div>
              <span @click="$emit('close')" class="hoverable">
                <i class="fas fa-times"></i>
              </span>
            </div>
          </slot>
        </div>
        <div class="modal-body m-0">
          <slot> </slot>
        </div>

        <div class="modal-footer m-0 p-0 bg-light">
          <slot name="footer">
            <co-button
              @click="save"
              buttonText="Kaydet"
              color="secondary"
              isOutline
              buttonClasess="pt-0 pb-0"
              textSize="14px"
              class="m-0 mx-1"
            />
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CoButton from "./common-components/CoButton.vue";
import { Options, Vue } from "vue-class-component";
@Options({
  components: { CoButton },
  props: {
    header: String,
    width: { type: String, default: "500px" },
    height: { type: String, default: "500px" },
  },
})
export default class Modal extends Vue {
  save() {
    this.$emit("saved");
    this.$emit("close");
  }
}
</script>

<style>
#app {
  padding: 1rem;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  font-family: Helvetica, Arial, sans-serif;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  display: block;
  margin-top: 1rem;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-header {
  height: 40px;
}

.modal-footer {
  height: 40px;
}
</style>