# 🍿 Vue.js 최종 프로젝트

- ⭐️`v-model`⭐️이라는 속성을 사용하면 입력 값이 자동으로 뷰 데이터 속성에 연결됩니다. v-model 속성은 v-bind와 v-on의 기능의 조합으로 동작합니다.

```ts
<input v-bind:value="inputText" v-on:input="updateInput">
```

`v-model`이라는 속성을 사용하면 화면에 입력된 값이 데이터에 연동된다.
