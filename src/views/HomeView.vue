<script setup>
import { RouterLink } from "vue-router";
import HeaderApp from "../components/HeaderApp.vue";
</script>

<template>
  <HeaderApp title="CRUD CLIENTES" />
  <main>
    <RouterLink to="/clients"
      ><button>Entrar no CRUD de clientes</button></RouterLink
    >
  </main>
</template>
