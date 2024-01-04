<template>
  <teleport to="body">
    <base-modal
      title="This is the new title from app component"
      content="This is the content"
      theme="contact"
      v-if="isShowModal"
      @cancel="onToggleModal"
    >
      <template v-slot:header>
        <h2>This is header</h2>
      </template>
      <template v-slot:footer>
        <button class="btn btn-danger" @click="onToggleModal">Cancel</button>
      </template>
      <label>Name</label>
      <input type="password" name="" id="" />
    </base-modal>
  </teleport>
  <div
    class="btn btn-primary position-absolute top-0 start-0"
    @click="onToggleModal"
  >
    Show Modal
  </div>
</template>

<script>
import ModalVue from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    BaseModal: ModalVue,
  },
  data() {
    return {
      isShowModal: false,
    };
  },
  methods: {
    onToggleModal() {
      this.isShowModal = !this.isShowModal;
    },
  },
};
</script>

<style></style>
