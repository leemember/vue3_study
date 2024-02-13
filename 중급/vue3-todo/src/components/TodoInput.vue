<template>
  <div>
    <input type="text" v-model="todoInput" />
    <button @click="addTodo">추가</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const todoInput = ref("");

    // methods
    function addTodo() {
      const todo = todoInput.value;
      localStorage.setItem(todo, todo);
    }

    // setup은 무조건 return 해줘야함 !!! 주의!!!
    return { todoInput, addTodo };
  },
};
</script>

<style lang="scss" scoped></style>
