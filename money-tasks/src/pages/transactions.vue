<template>
  <h1>Transaction is here ...</h1>
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
    };
  },
};
</script>
