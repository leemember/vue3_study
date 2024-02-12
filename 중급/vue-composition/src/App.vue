<template>
  <div>
    <p>{{ msg }}</p>
    <button @click="changeMessage">변경</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useMsg } from "../hooks/useMsg";

export default {
  setup() {
    const { msg, changeMsg } = useMsg();

    return {
      msg,
      changeMsg,
    };
  },
};
</script>

<style lang="scss" scoped></style>
