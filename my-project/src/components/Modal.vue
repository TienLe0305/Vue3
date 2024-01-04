<template>
  <div class="modal fade show" @click="onCloseModal">
    <div class="modal-dialog">
      <div class="modal-content" :class="{ 'bg-info': theme === 'contact' }">
        <div class="modal-header">
          <slot name="header"></slot>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalVue",
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      default: "",
    },
    theme: {
      type: String,
      default: "example",
      validator(value) {
        return ["example", "sales", "contact"].includes(value);
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    onCloseModal() {
      this.$emit("cancel");
    },
  },
};
</script>
<style>
.modal {
  display: block !important;
}
</style>
