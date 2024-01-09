<template>
  <div v-if="transactions.length">
    <div class="item" v-for="transaction in transactions" :key="transaction.id">
      <router-link
        :to="{
          name: 'transaction-details-route',
          params: { id: transaction.id },
        }"
        >{{ transaction.name }}</router-link
      >
      <div class="price">{{ transaction.price }}</div>
    </div>
  </div>
  <div v-else-if="error">{{ error.message }}</div>
  <div v-else>Loading Transaction ...</div>
</template>

<script>
import useTransactions from "../uses/fetchTransactions";
export default {
  setup() {
    const { transactions, error, getAllData } = useTransactions();

    getAllData();

    return { transactions, error };
  },
};
</script>
