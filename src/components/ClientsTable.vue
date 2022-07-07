<script setup>
import { onMounted, ref } from "vue";
import "vue-loading-overlay/dist/vue-loading.css";
import IconEdit from "../components/icons/IconEdit.vue";
import IconTrash from "../components/icons/IconTrash.vue";
import { RouterLink, useRouter } from "vue-router";
import { getAllClients, removeClientById } from "../services/client.js";

const router = useRouter();
const clients = ref([]);

onMounted(async () => {
  try {
    clients.value = await getAllClients();
  } catch (error) {
    alert(
      "Não foi possivel buscar todos os clientes, tente novamente mais tarde"
    );
  }
});

function handleClick(id) {
  router.push(`/clients/${id}`);
}

async function handleDeleteClient(id) {
  try {
    await removeClientById(id);
    clients.value = clients.value.filter((client) => client.id !== id);
  } catch (error) {
    alert("Não foi possível remover o cliente, tente novamente mais tarde");
  }
}
</script>

<template>
  <table class="w-full">
    <tr class="border-b border-solid">
      <th class="text-xs md:text-base">CPF</th>
      <th class="text-xs md:text-base">Nome</th>
      <th class="text-xs md:text-base">E-mail</th>
      <th class="text-xs md:text-base">Telefone</th>
      <th class="text-xs md:text-base">Ações</th>
    </tr>
    <tr
      class="p-7 border-b even:bg-gray-200 hover:cursor-pointer group"
      :key="client.cpf"
      v-for="client in clients"
    >
      <td
        class="text-center text-xs md:text-base group-hover:text-blue-500 transition"
        @click="handleClick(client.id)"
      >
        {{ client.cpf || "Nenhum" }}
      </td>
      <td
        class="text-center text-xs md:text-base group-hover:text-blue-500 transition"
        @click="handleClick(client.id)"
      >
        {{ client.name || "Nenhum" }}
      </td>
      <td
        class="text-center text-xs md:text-base group-hover:text-blue-500 transition"
        @click="handleClick(client.id)"
      >
        {{ client.email || "Nenhum" }}
      </td>
      <td
        class="text-center text-xs md:text-base group-hover:text-blue-500 transition"
        @click="handleClick(client.id)"
      >
        {{ client.phone || "Nenhum" }}
      </td>
      <td class="text-center flex gap-3 justify-center">
        <RouterLink
          :to="`/clients/${client.id}/edit`"
          class="border border-solid rounded md:px-2 md:py-0.5 bg-blue-500 hover:bg-blue-800 transition"
        >
          <IconEdit color="#FFFF" />
        </RouterLink>
        <button
          class="border border-solid rounded md:px-2 md:py-0.5 px-2 bg-red-500 hover:bg-red-800 transition"
          @click="handleDeleteClient(client.id)"
        >
          <IconTrash color="#FFFF" />
        </button>
      </td>
    </tr>
  </table>
</template>
