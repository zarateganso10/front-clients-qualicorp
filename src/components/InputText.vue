<script setup>
const props = defineProps({
  value: String,
  placeholder: String,
  id: String,
});
</script>

<template>
  <input
    type="text"
    :id="props.id"
    :placeholder="props.placeholder"
    :v-model="props.value"
  />
</template>
