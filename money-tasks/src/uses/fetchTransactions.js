import { ref } from "vue";

export default function () {
  var transactions = ref([]);
  var error = ref([]);

  const getAllData = async () => {
    try {
      const response = await fetch("http://localhost:3000/transactions");
      if (!response.ok) throw new Error("Something went wrong!!!");

      transactions.value = await response.json();
    } catch (err) {
      error.value = err;
    }
  };

  return { transactions, error, getAllData };
}
