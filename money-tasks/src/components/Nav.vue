<template>
  <nav class="'nav">
    <router-link :to="{ name: 'overview-route' }">Overview</router-link>
    <router-link :to="{ name: 'transaction-route' }">Transaction</router-link>
    <router-link to="/">Budgets</router-link>
    <router-link to="/">Report</router-link>
    <router-link to="/">Settings</router-link>
  </nav>
</template>
