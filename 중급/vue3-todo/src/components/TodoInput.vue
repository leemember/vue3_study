<template>
  <div>
    <input type="text" v-model="todoInput" />
    <button @click="addTodo">추가</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const todoInput = ref("");

const emit = defineEmits(["userChange"]);

// methods
function addTodo() {
  console.log("zz");
  const todo = todoInput.value;
  // this.$emit('') 과 동일한 이벤트발생 역할을 한다.
  // 인자 1 : 이벤트명 / 인자 2 : 인자
  emit("add", todo);
  clearTodo();
}

const clearTodo = () => (todoInput.value = "");
</script>

<style lang="scss" scoped></style>
