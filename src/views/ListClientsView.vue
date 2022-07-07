<script setup>
import HeaderApp from "../components/HeaderApp.vue";
import ClientsTable from "../components/ClientsTable.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="bg-[#ffeddf] w-screen h-screen">
    <HeaderApp title="CRUD CLIENTES" />
    <main class="flex flex-col justify-center items-center">
      <div class="md:w-[60%] flex justify-between items-center mt-12">
        <span class="text-3xl">Listagen de clientes</span>
        <RouterLink
          to="/clients/create"
          class="border border-solid rounded py-2 px-4 bg-blue-500 text-white hover:bg-blue-800 transition"
        >
          Criar Novo
        </RouterLink>
      </div>
      <div class="mt-8 w-[60%]">
        <ClientsTable />
      </div>
    </main>
  </div>
  <PreLoader :isLoading="true" />
</template>
