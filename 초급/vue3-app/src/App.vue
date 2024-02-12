<template>
  <app-header v-bind:appTitle="message" v-on:change="changeMessage"
    >ㅎㅇㅎㅇ</app-header
  >
  <div>{{ message }}</div>
  <!-- 마우스 이벤트 v-on의 축약형은 @라고 한다 -->
  <button @click="showAlert">경고</button>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    "app-header": AppHeader,
    // '컴포넌트이름' : '컴포넌트내용'
    // 'AppHeader' : AppHeader --> 이렇게 이름이 똑같으면
    // AppHeader 이렇게 하나만 써도 된다.
  },
  data() {
    return {
      message: "웹 헤더 컴포넌트",
    };
  },
  methods: {
    showAlert() {
      alert("hello");
    },
    changeMessage() {
      this.message = "변경됨";
    },
  },
};
</script>

<style scoped></style>
