# 🍿 vue 기본 개념과 문법

### 📝 뷰 인스턴스

(vue3에선 애플리케이션 인스턴스라고 부름)

```ts
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<div id="app">{{ message }}</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const message = ref("Hello vue!zzzz");
      return {
        message,
      };
    },
  }).mount("#app");
</script>
```

이 화면의 영역 중에 어느 부분에다가 뷰의 인스턴스를 적용할지 하는 부분이 바로 **마운트** 하는 부분이라고 보면 된다.
애플리케이션 인스턴스를 만들어내면 vue 개발자도구에 있는 root에서 확인할 수 있다.

### ⭐️ vue2의 문법

- **vue 인스턴스**라고 부름

```ts
new Vue({
  el: "#app",
});
```

### ⭐️ Vue3의 문법

- **vue 애플리케이션 인스턴스**라고 부름

```ts
Vue.createApp({
  data() {
    return {
      messages: "10",
    };
  },
}).mount("#app");
```

데이터들은 `createApp` 이라고 하는 코드 안에 선언된 값들을 의미합니다.

### 인스턴스 속성, API들 (Vue 메서드)

- el : 인스턴스가 그려지는 화면의 시작점 (특정 HTML 태그)
- template : 화면에 표시할 요소 (HTML, CSS 등)
- data : 뷰의 반응성이 반영된 데이터 속성
- methods : 화면의 동작과 이벤트 로직을 제어하는 메서드
- created : 뷰의 라이프 사이클과 관련된 속성
- watch : 데이터에서 정의한 속성이 변화했을 때 추가 동작을 수행할 수 있게 정의하는 속성

이 인스턴스 안에 있는 속성들을 컴포넌트 옵션 속성이라고 부른다.
`컴포넌트 옵션 속성 = 인스턴스 옵션 속성 = 옵션 API` 모두 같은 말이다.

```ts
<!-- HTML -->
<div id="app">
  {{ count }} // ---> vue에 Reactivity가 주입된 데이터 속성을 사용하는 방식이다.
  <button v-on:click="addCount">+</button>
</div>

<!-- Vue script 구간 -->
Vue.createApp({
  data() {
     return {
       count:0
    };
  },
 methods: {
  addCount() {
    this.count++
  }
 }
}).mount("#app");
```

인스턴스를 생성하고 mount를 해주면 된다. 마운트 하는 것이 xw이 생성한 애플리케이션 인스턴스를 어느 태그에 지정할건지 선정해주는 부분이다.
뷰에서는 항상 `중괄호 두개 {{ }}`를 붙여서 표현하게 되는데 그것이 데이터에 정의된 값이 화면에 표현이 되는 것이라고 보면된다.

`<button v-on:click="addCount">+</button>` 이 버튼이라고 하는 것에 `v-on` 이라고 하는 디렉티브라고 한다. 여기에 호출된 `addCount`는 메서드에 선언된 `addCount()`의 함수를 실행해준다.

여기서 `v-`가 붙은 HTML Attribute가 뷰의 디렉티브다.

### 💝 디렉티브

```ts
<!-- HTML -->
<div id="app">
  {{ count }}
  <button v-on:click="addCount">+</button>
</div>
```

여기서 `v-on:click` 뿐만 아니라 `v-on:mouseover` 등 여러가지 UI 이벤트들을 다 연결할 수 있다.

`v-if`, `v-else`, `v-for`, `v-bind` 등 다양함!

### v-for 예제

```ts
<!-- HTML -->
<div id="app">
  <ul>
    <li v-for="item in items">
     {{ item }} // items의 item 리스트들이 차례대로 렌더링된다.
    </li>
  </ul>
</div>

<!-- Vue script 구간 -->
Vue.createApp({
  data() {
     return {
       items: ['a','b','c']
    };
  }
}).mount("#app");
```
