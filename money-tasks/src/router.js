import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/home.vue";
import Transactions from "./pages/transactions.vue";
import TransactionDetails from "./pages/transaction-details.vue";
import NotFound from "./pages/404.vue";
const routes = [
  {
    path: "/",
    name: "overview-route",
    component: Home,
  },
  {
    path: "/transactions",
    name: "transaction-route",
    component: Transactions,
  },
  {
    path: "/transactions/:id",
    name: "transaction-details-route",
    component: TransactionDetails,
  },
  {
    path: "/ts",
    component: Transactions,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
