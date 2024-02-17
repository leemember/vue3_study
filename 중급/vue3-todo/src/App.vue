<template>
  <TodoHeader />
  <!-- <TodoList @하위컴포넌트 이벤트이름="상위컴포넌트의 메서드 이름"></TodoList> -->
  <TodoInput @add="addTodoItem" />
  <TodoList :todoItems="todoItems" @remove="removeTodoItem"></TodoList>
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

function addTodoItem(todo) {
  console.log("addTodoItem", todo);
  todoItems.value.push(todo);
  localStorage.setItem(todo, todo);
}
function removeTodoItem(item, index) {
  console.log("dd");
  todoItems.value.splice(index, 1);
  localStorage.removeItem(item, item);
}
</script>

<style lang="scss" scoped></style>
