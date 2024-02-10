## 🍿 vue

### vue.js란?

- 간단한 화면 UI 개발부터 라우팅(페이지간 이동), SSR 등 지원하는 프레임워크
- 프론트엔드 개발 라이브러리
- 진입 장벽이 낮고 쉽게 배울 수 있다
- 개발 생산성이 높고 자바스크립트 지식이 크게 요구되지 않는다 (?)

### Vue 2와 Vue 3의 차이점

- 라이브러리 내부 로직 타입스크립트 기반으로 재작성
- 주요 개발 도구들 변경
  - 예) 뷰 개발자 도구, VSCode 플러그인 Volar (볼라) 사용, Vite 기반 프로젝트 생성 등
- 컴포지션 API, Teleport 등 새로운 문법 지원
- 리액티비티 시스템 기반 API 변경
- 공식 문서 변경

> Vue3 공식문서 🐿 https://ko.vuejs.org/guide/introduction.html

### Vue3 코드 작성 방식

#### 옵션 API

```ts
<div id="app">{{message}}</div>

<script>
  Vue.createApp({
    data() { //---> 인스턴스 옵션
      return {
        message: 'hi',
      }
    }
  }).mount('#app');
</script>
```

#### 컴포지션 API

```ts
<div id="app">{{message}}</div>

<script>
  Vue.createApp({
    setup() {
      const message = ref('hi');

      return {
        message: 'hi',
      }
    }
  }).mount('#app');
</script>
```

위 코드에서 `const message = ref('hi');`는 리액티비티가 주입이 도면서 자연스럽게 템플릿에서 기존의 데이터 안에 선언한 것과 같은 형태로 동작을 하게 된다.

vue를 막 입문하시는 분들은 컴포지션 api보다 옵션 api를 먼저 입문하는 것이 좋다. 그 이유는 컴포지션 api라는 것이 결국에는 컴포넌트 코드를 정말 많이 작성하고 그런것들을 재활용하거나 별도로 모듈화해서 코드의 클린코드 형태를 지향할 때 사용할 때 사용하는 것이 컴포지션 api 라고 한다.

### 개발환경 구성

- VSCode 플러그인 설치중에 **vue vscode snippets** 을 설치해준다.
- Volar 설치하기
- 구글 확장 프로그램 vue.js devtools 설치하기

> 참고내용 https://joshua1988.github.io/vue-camp/textbook.html

데이터의 변화에 따라서 화면에 UI 값이 바뀌는 것이 바로 뷰에서 추구하는 **리액티비티 (Reactivity)**라고 하는 개념이다.

### new Proxy란?

```ts
<div id="app"></div>

<script>
  const data = {
    a: 10,
  };

  let app = new Proxy(data, {
    //---> new Proxy는 api 동작이다.
    set() {},
    get() {
      console.log("안녕");
    },
  });
</script>
```

- `new Proxy`라고 하는 것이 결국에 이 데이터라고 하는 객체를 모방한 다음에 그 동작을 추가했다고 보면 된다. 여기서 `get`이라고 하는 것이 이 객체의 속성을 접근할 때마다 출력할 내용이라고 보면 됩니다.

```ts
let app = new Proxy(data, {
  //---> new Proxy는 api 동작이다.
  get() {
    console.log("값 접근");
  },
  set() {
    console.log("값 갱신");
  },
});
```

- get 함수에 입력된 '값 접근' 이라는 값이 나오고 app.a = 20 이라는 값을 입력하게 되면 '값 갱신' 이라는 값이 나온다.
- 이런 것들이 Proxy를 통해서 이 객체의 동작을 정의하고 추가적으로 지정할 수 있는 것을 알 수 있다.

```ts
let app = new Proxy(data, {
  //---> new Proxy는 api 동작이다.d
  get() {
    console.log("값 접근");
  },
  set(target, prop, newValue) {
    target[prop] = newValue;
    console.log("값 갱신");
    render(newValue);
  },
});
```

⭐️ **vue3** 에서는 프록시라고 하는 API를 이용해서 화면을 변경하고 있다.⭐️
프록시를 이용해서 간단한 리액티비티 시스템을 구현

### Reactivity 차이점 (Vue2 & Vue3)

> 읽어볼 내용 https://ko.vuejs.org/guide/extras/reactivity-in-depth.html <br /> https://v2.ko.vuejs.org/v2/guide/reactivity.html#ad

데이터가 getter, setter에 의해 셋업이 됨으로 인해서 Watcher를 통해서 컴포넌트가 렌더가 되고 정확히는 컴포넌트 안에 렌더 펑션이 별도로 되어 있다. 그리고 최종적으로 Virtual DOM 트리로 화면에 UI가 그려지게 된다.

### 뷰 인스턴스

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
