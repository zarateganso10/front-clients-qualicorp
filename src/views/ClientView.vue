<script setup>
import { ref, onMounted } from "vue";
import { instanceAxios } from "../api/axios.js";
import { useRouter, useRoute } from "vue-router";
import HeaderApp from "../components/HeaderApp.vue";

const route = useRoute();
const { id } = route.params;
const router = useRouter();
const formValues = ref({
  name: "",
  email: "",
  cpf: "",
  phone: "",
});

async function handleSubmit() {
  await instanceAxios.put(`/clients/${id}`, formValues.value);
  router.push("/clients");
}

async function fetchClient() {
  const response = await instanceAxios.get(`/clients/${id}`);
  formValues.value = response.data;
}

onMounted(async () => {
  await fetchClient();
});
</script>

<template>
  <div class="bg-[#ffeddf] w-screen h-screen">
    <HeaderApp title="CRUD CLIENTES" />
    <main class="flex flex-col justify-center items-center">
      <div class="md:w-[60%] flex justify-start items-center mt-12">
        <h2 class="text-3xl font-bold">
          Cliente:
          <span class="text-blue-500 font-bold">{{ formValues.name }}</span>
        </h2>
      </div>
      <div class="mt-8 bg-gray-200 w-[700px] h-[500px] border rounded p-14">
        <h3 class="text-2xl font-bold text-center">
          Formulário de edição do cliente
        </h3>
        <form @submit.prevent="handleSubmit">
          <div class="flex flex-col">
            <div class="flex gap-2 justify-center items-center mb-4 mt-8">
              <label class="w-20">Nome:</label>
              <div
                class="w-full border border-solid rounded-xl border-blue-900 py-2 px-2"
              >
                <p class="font-normal text-lg text-blue-500">
                  {{ formValues.name }}
                </p>
              </div>
            </div>
            <div class="flex gap-2 justify-center items-center mb-4">
              <label class="w-20">E-mail:</label>
              <div
                class="w-full border border-solid rounded-xl border-blue-900 py-2 px-2"
              >
                <p class="font-normal text-lg text-blue-500">
                  {{ formValues.email }}
                </p>
              </div>
            </div>
            <div class="flex gap-2 justify-center items-center mb-4">
              <label class="w-20">CPF:</label>
              <div
                class="w-full border border-solid rounded-xl border-blue-900 py-2 px-2"
              >
                <p class="font-normal text-lg text-blue-500">
                  {{ formValues.cpf }}
                </p>
              </div>
            </div>
            <div class="flex gap-2 justify-center items-center">
              <label class="w-20">Telefone:</label>
              <div
                class="w-full border border-solid rounded-xl border-blue-900 py-2 px-2"
              >
                <p class="font-normal text-lg text-blue-500">
                  {{ formValues.phone }}
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>
