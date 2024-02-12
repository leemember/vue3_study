<template>
  <!-- Props 전달 -->
  <h1>{{ appTitle }}</h1>
  <button @click="changeTitle">변경</button>
</template>

<script>
// import 컴포넌트명 from './컴포넌트경로'

export default {
  props: ["appTitle"],
  methods: {
    changeTitle() {
      this.$emit("change");
    },
  },
};
</script>

<style scoped></style>
