<script setup>
import { RouterLink } from "vue-router";
import HeaderApp from "../components/HeaderApp.vue";
import IconArrowDown from "../components/icons/IconArrowDown.vue";
</script>

<template>
  <div class="bg-[#ffeddf] w-screen h-screen">
    <HeaderApp title="HOME" />
    <main>
      <div class="h-[50vh] flex justify-between items-center flex-col mt-24">
        <div>
          <h2 class="text-4xl text-bold text-center">CRUD dos clientes</h2>
          <p class="md:max-w-[500px] text-semibold text-xl mt-10 text-center">
            Parte do Front-End da aplicação de CRUD dos clientes para o teste de
            desenvolvimento da empresa.
            <a
              class="text-blue-500 hover:opacity-60"
              href="https://www.qualicorp.com.br/"
              >Qualicorp</a
            >
          </p>
          <p class="md:max-w-[500px] text-semibold text-xl mt-10 text-center">
            <span class="text-green-600">Clique no botão abaixo</span> para
            conhecer a plataforma
          </p>
        </div>
        <IconArrowDown />
        <RouterLink
          class="bg-[#0d1321] border rounded-xl text-white flex justify-center items-center py-8 px-10 uppercase hover:opacity-20 hover:border-blue-500 hover:border-2"
          to="/clients"
          >Entrar no CRUD de clientes</RouterLink
        >
      </div>
    </main>
  </div>
</template>
