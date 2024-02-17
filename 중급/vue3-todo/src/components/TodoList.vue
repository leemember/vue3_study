<template>
  <ul>
    <li v-for="(item, index) in todoItems" :key="index">
      <span>{{ item }}</span>
      <button @click="removeTodo(item, index)">삭제</button>
    </li>
  </ul>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps(["todoItems"]);
const emit = defineEmits(["userChange"]);
const removeTodo = (item, index) => {
  emit("remove", item, index);
};
</script>

<style lang="scss" scoped></style>
