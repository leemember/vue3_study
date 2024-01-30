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
