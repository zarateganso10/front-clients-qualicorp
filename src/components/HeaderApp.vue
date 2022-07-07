<script setup>
import { useRouter } from "vue-router";
import IconArrowLeft from "./icons/IconArrowLeft.vue";

const router = useRouter();

const props = defineProps({
  title: String,
});

function goBack() {
  router.back();
}
</script>

<template>
  <header class="bg-[#0d1321] w-full h-20 flex justify-between items-center">
    <button class="ml-4 hover:opacity-25" @click="goBack">
      <IconArrowLeft size="42" color="#FFFF" />
    </button>
    <h1 class="text-white">{{ props.title }}</h1>
    <span class="none"></span>
  </header>
</template>
