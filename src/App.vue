<script setup>
import { ref } from "vue";

const value = ref(0);

const increase = () => {
  value.value++;
};
</script>

<template>
  <div>{{ value }}</div>
  <button @click="increase">increase</button>
</template>
