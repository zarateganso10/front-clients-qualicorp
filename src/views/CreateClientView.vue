<script setup>
import HeaderApp from "../components/HeaderApp.vue";
import ClientForm from "../components/ClientForm.vue";
</script>

<template>
  <div class="bg-[#ffeddf] w-screen h-screen">
    <HeaderApp title="CRUD CLIENTES" />
    <main class="flex flex-col justify-center items-center">
      <div class="md:w-[60%] flex justify-start items-center mt-12">
        <span class="text-3xl font-bold">Criar novo cliente</span>
      </div>
      <div class="mt-8 bg-gray-200 w-[700px] h-[500px] border rounded p-14">
        <h3 class="text-2xl font-bold text-center">Formulário novo cliente</h3>
        <ClientForm formType="create" />
      </div>
    </main>
  </div>
</template>
