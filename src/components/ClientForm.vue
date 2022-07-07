<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { object, string } from "yup";
import {
  getClientById,
  updateClientById,
  createClient,
} from "../services/client.js";

const VALIDATION_SCHEMA = object().shape({
  email: string().required("Campo E-mail é um campo obrigatório").email(),
  cpf: string().min(14, "").required("Campo CPF é obrigatório"),
  name: string().required("Campo nome é obrigatório"),
  phone: string(),
});

const props = defineProps({
  formType: { type: String, default: "create" },
  clientId: {
    type: String,
    default: "",
  },
});

const handleSubmit = computed(() =>
  props.formType === "create" ? handleCreateClient : handleEditClient
);

const buttonSubmitText = computed(() =>
  props.formType === "create" ? "Criar cliente" : "Editar cliente"
);

const router = useRouter();
const formValues = ref({
  name: "",
  email: "",
  cpf: "",
  phone: "",
});
const errors = ref({
  name: false,
  email: false,
  cpf: false,
  phone: false,
});

async function validate(field) {
  try {
    await VALIDATION_SCHEMA.validateAt(field, formValues.value);
    errors.value[field] = false;
  } catch (error) {
    errors.value[field] = true;
  }
}

async function handleCreateClient() {
  await createClient(formValues.value);
  router.push("/clients");
}

async function handleEditClient() {
  try {
    await updateClientById(props.clientId, formValues.value);
    router.push("/clients");
  } catch (error) {
    alert("Não foi possível atualizar o cliente, tente novamente mais tarde");
  }
}

onMounted(async () => {
  if (props.clientId) {
    try {
      formValues.value = await getClientById(props.clientId);
    } catch (error) {
      alert("Não foi possível buscar o cliente, tente novamente mais tarde");
    }
  }
});
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="flex flex-col">
      <div class="flex gap-2 justify-center items-center mb-4 mt-8">
        <label class="w-20">Nome:</label>
        <input
          :class="[
            { 'border-2 border-[#f20c0c]': errors.name && formValues.name },
            'w-full border border-solid rounded-xl py-2 px-2 focus:outline-none focus:border-[#0d1321]',
          ]"
          type="text"
          placeholder="Escreve seu nome"
          v-model="formValues.name"
          @blur="validate('name')"
        />
      </div>
      <div class="flex gap-2 justify-center items-center mb-4">
        <label class="w-20">E-mail:</label>
        <input
          :class="[
            { 'border-2 border-[#f20c0c]': errors.email && formValues.email },
            'w-full border border-solid rounded-xl py-2 px-2 focus:outline-none focus:border-[#0d1321]',
          ]"
          type="email"
          placeholder="Escreve seu E-mail"
          v-model="formValues.email"
          @blur="validate('email')"
        />
      </div>
      <div class="flex gap-2 justify-center items-center mb-4">
        <label class="w-20">CPF:</label>
        <input
          :class="[
            { 'border-2 border-[#f20c0c]': errors.cpf && formValues.cpf },
            'w-full border border-solid rounded-xl py-2 px-2 focus:outline-none focus:border-[#0d1321]',
          ]"
          type="text"
          v-mask="'###.###.###-##'"
          placeholder="Escreve seu cpf"
          v-model="formValues.cpf"
          @blur="validate('cpf')"
        />
      </div>
      <div class="flex gap-2 justify-center items-center">
        <label class="w-20">Telefone:</label>
        <input
          :class="[
            { 'border-2 border-[#f20c0c]': errors.phone && formValues.phone },
            'w-full border border-solid rounded-xl py-2 px-2 focus:outline-none focus:border-[#0d1321]',
          ]"
          type="text"
          v-mask="['(##) ####-####', '(##) #####-####']"
          placeholder="Escreve seu telefone"
          v-model="formValues.phone"
          @blur="validate('phone')"
        />
      </div>
      <button
        class="w-full h-10 bg-blue-500 rounded-xl mt-10 uppercase text-white hover:bg-blue-800 transition"
        type="submit"
      >
        {{ buttonSubmitText }}
      </button>
    </div>
  </form>
</template>
