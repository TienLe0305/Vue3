<template>
  <div>
    <div v-if="transaction">
      <h1>ID: {{ $route.params.id }}</h1>
      <h3>Name: {{ transaction.name }}</h3>
      <p>Price: {{ transaction.price }}</p>
    </div>
    <div v-else>Loading transaction {{ $route.params.id }} ...</div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
useRoute;
export default {
  setup() {
    const route = useRoute();
    const store = useStore();

    store.dispatch("fetchTransaction", { id: route.params.id });

    return {
      transaction: computed(() => store.state.transaction),
    };
  },
};
</script>
