<script setup>
import { ref } from "vue";

const value = ref(0);
let v = 0;

const increase = () => {
  value.value++;
};
const i = () => {
  v++; // 렌더링 되지 않음
  console.log(v);
};
</script>

<template>
  <div>{{ value }}</div>
  <button @click="increase">increase</button>
  <div>{{ v }}</div>
  <button @click="i">increase</button>
</template>
