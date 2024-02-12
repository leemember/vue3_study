# 🍿 vue 컴포넌트

### 💝 vue 컴포넌트 등록과 표시

```ts
<!-- HTML 컴포넌트 표시-->

<div id="app">
  <!-- ✅ v-bind:프롭스이름 ===> Props 넘기기 위한 v-bind -->
  <app-header v-bind:title="상위 컴포넌트의 데이터 이름" v-on:refresh="showAlert"></app-header>
</div>

<script>
let appContents = {
  tempate: '...',
  method: {
    sendEvent() {
      this.$emit('refresh'); // v-on:refresh
    }
  }
}
// 루트 컴포넌트
 Vue.createApp({
  data() {
    return {
      appTitle: 'props 넘기기'
    }
  },
  methods: {
    showAlert() {
      alert("새로고침");
    }
  },
  components: {
    // 인스턴스 옵션 속성 - 옵션 API
    'app-header':{ // --> 이부분이 바로 컴포넌트 등록
      template: '<h1>{{ title }}</h1>', // --> vue에서는 {{ }} 이렇게 중괄호를 2개 사용해서 한다.
      props: ['title']
    }
  }
 }).mount('#app');
</script>
```

화면에 표시될 HTML의 모양을 정의한 거라고 보면 된다.

---

<br />

### 💝 Vue 컴포넌트 통신 방식

- 상위 컴포넌트 -> 하위 컴포넌트 (props 전달)
- 하위 컴포넌트 -> 상위 컴포넌트 (이벤트가 발생)
  데이터는 항상 위에서 아래로 흐르고, 아래에서 위로 이벤트가 올라간다고 보면 된다.
