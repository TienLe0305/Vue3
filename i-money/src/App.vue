<template>
  <h1>This is Overview</h1>
</template>

<script>
import { fireStoreCore } from "@/configs/firebase";
import { collection, getDocs } from "firebase/firestore";
export default {
  setup() {
    async function getTransactions() {
      const response = await getDocs(collection(fireStoreCore, "transactions"));
      const data = [];

      response.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      console.log(data);
    }

    getTransactions();
  },
};
</script>

<style></style>
