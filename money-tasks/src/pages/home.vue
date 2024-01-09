<template>
  <h1>Overview Page is here</h1>
  <input type="text" v-model="searchText" />
  <ul>
    <li v-for="(customer, index) in customersFiltered" :key="index">
      {{ customer }}
    </li>
  </ul>
  <p>{{ transactions }}</p>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";
import useTransactions from "../uses/fetchTransactions";
export default {
  props: {
    theme: {
      type: String,
      required: false,
      default: "light",
    },
  },
  setup({ theme }, { emit }) {
    const { transactions, getAllData } = useTransactions();

    getAllData();
    console.log(theme);
    console.log(emit);
    const searchText = ref("");
    const customers = reactive(["Something", "Tien Le", "Sky Albert", "Hula"]);

    const customersFiltered = computed(() =>
      customers
        .map((customer) => {
          customer = customer.toLowerCase();
          return customer;
        })
        .filter((customer) =>
          customer.includes(searchText.value.toLocaleUpperCase())
        )
    );

    watch(searchText, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });

    watchEffect(() => {
      if (searchText.value) {
        console.log("run again");
      }
    });

    return { searchText, customersFiltered, transactions };
  },
};
</script>
