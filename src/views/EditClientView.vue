<script setup>
import { useRoute } from "vue-router";
import HeaderApp from "../components/HeaderApp.vue";
import ClientForm from "../components/ClientForm.vue";

const route = useRoute();
const { id } = route.params;
</script>

<template>
  <div class="bg-[#ffeddf] w-screen h-screen">
    <HeaderApp title="CRUD CLIENTES" />
    <main class="flex flex-col justify-center items-center">
      <div class="md:w-[60%] flex justify-start items-center mt-12">
        <h2 class="text-3xl font-bold">Edição de cliente</h2>
      </div>
      <div class="mt-8 bg-gray-200 w-[700px] h-[600px] border rounded p-14">
        <h3 class="text-2xl font-bold text-center">
          Formulário de edição do cliente
        </h3>
        <ClientForm formType="edit" :clientId="id" />
      </div>
    </main>
  </div>
</template>
