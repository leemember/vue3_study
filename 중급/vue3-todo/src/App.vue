<template>
  <TodoHeader></TodoHeader>
  <TodoInput></TodoInput>
  <TodoList :todoItems="todoItems"></TodoList>
</template>

<script setup>
import TodoHeader from "@/components/TodoHeader.vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";
import { ref } from "vue";

// data
const todoItems = ref([]);

// methods
function fetchTodos() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const todoItem = localStorage.key(i);
    result.push(todoItem);
  }
  return result;
}

todoItems.value = fetchTodos();
</script>

<style lang="scss" scoped></style>
