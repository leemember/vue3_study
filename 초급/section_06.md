# 🍿 Vue 싱글 파일 컴포넌트

싱글 파일 컴포넌트는 화면의 특정 영역에 대한 HTML, CSS, JS 코드를 한 파일에서 관리하는 방법입니다. **vue 확장자를 가진 파일을 모두 싱글 파일 컴포넌트**라고 합니다.

```ts
<!-- .vue 파일 구조 -->
<template>
  <!-- html (뷰 컴포넌트의 표현단, 템플릿 문법) -->
</template>

<script>
// 자바스크립트 (뷰 컴포넌트 내용)
</script>

<style>
/* CSS (뷰 템플릿의 스타일링) */
</style>
```

### ex)

```ts
<!-- 싱글 파일 컴포넌트 : HTML,JS,CSS 가 한 파일에.. -->

<!-- HTML 영영 -->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<!-- 자바스크립트 영영 -->
<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<!-- CSS 영영 -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

### 자동완성

```ts
vcb;
```

라고 입력 후 Enter 하면 자동완성되나.

### 📍 v-on:의 축약어 @ 라고 쓰인다.
