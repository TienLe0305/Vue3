<template>
  <div>
    <h1>Transaction Details is here</h1>
    <div v-if="transaction">
      <h1>{{ transaction.name }}</h1>
      <p>Price: {{ transaction.price }}</p>
    </div>
    <div v-else>
      <p>Transaction not found</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transactions: [
        {
          id: 1,
          name: "Đi siêu thị",
          price: 1000000,
        },
        {
          id: 2,
          name: "Thanh toán tiền trọ",
          price: 2000000,
        },
        {
          id: 3,
          name: "Thanh toán tiền Momo",
          price: 3000000,
        },
      ],
      transaction: null,
    };
  },
  mounted() {
    const transactionId = parseInt(this.$route.params.id);
    this.transaction = this.transactions.find((t) => t.id === transactionId);
  },
};
</script>
