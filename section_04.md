# 📝 템플릿 문법

템플릿 문법은 크게 데이터 바인딩과 디렉티르보 나뉜다.

### ✅ 데이터 바인딩

`{{ }}` 를 사용해서 뷰 인스턴스에서 정의한 속성들을 화면에 표시하는 방법이다.

### ✅ 디렉티브

디렉티브 뷰는 화면의 요소를 더 쉽게 조작하기 위한 문법이다. 화면 조작에서 자주 사용되는 방식들을 모아 디렉티브 형태로 제공하고 있다.

- v-if : 조건식
- v-for : 배열에 있는 거 순회할 때
- v-show
- v-bind : Props를 엮어서 내려 보냈던거
- v-on : 자식 컴포넌트에서 부모 컴포넌트로 올려 보낼 때 (이벤트 제어 함수)

```ts
<div id="app">
<!-- 1️⃣ v-if -->
  <p v-if="login">로그인</p> // 1️⃣ 로그인 값이 true 이면 이 태그가 렌더링되고
  <p v-else>로그인 하세요</p> // 2️⃣ 로그인값이 false이면 이 태그가 렌더링된다.
  <button v-on:click="loginUser">로그인</button>
  // === <button v-on:click="메서드명">로그인</button>

  <hr>

  <!-- 2️⃣ v-show -->
  // 실제 개발자도구에 비춰지는 태그상에서는 <p style="display: none;"> 이라고 나온다.
  <p v-show="login">로그인이 되었습니다</p>
  <button v-on:click="loginUser">로그인</button>
</div>

<script>
Vue.createApp({
  data(){
    return {
      login: false
    }
  },
  methods: {
    loginUser() {
      this.login = !this.login;
    }
  }
}).mount('#app');
</script>
```

### ✅ 클래스 바인딩

```ts
<div id="app">
 <h1>클래스 바인딩</h1>
 <!-- 아래와같이 v-bind를 표기해주면 클래스 바인딩이 된다.-->
 <div v-bind:class="textClass">데이터 바인딩 예제</div>

 <h1>아이디 바인딩</h1>
 <section v-bind:id="sectionId">
  반가워요
 </section>
</div>

<script>
Vue.createApp({
  data(){
    return {
      textClass: 'primary',
      sectionId: 'tab1'
    }
  }
}).mount('#app');
</script>
```

### 📍 Vue3에서는 v-bind 축약어가 : 로 쓰인다.

```ts
<div id="app">
 <h1>클래스 바인딩</h1>
 <div :class="textClass">데이터 바인딩 예제</div>

 <h1>아이디 바인딩</h1>
 <section :id="sectionId">
  반가워요
 </section>
</div>

<script>
 (...)
</script>
```

- `:` 이 들어가면 `v-bind`가 생략됨 !

### 📍 스타일도 바인딩이 가능하다.

```ts
<div id="app">
 <h1>클래스 바인딩</h1>
 <div :class="textClass">데이터 바인딩 예제</div>

 <h1>아이디 바인딩</h1>
 <section :id="sectionId" :style="sectionStyle"> // 이처럼 가능
  반가워요
 </section>
</div>

<script>
Vue.createApp({
  data(){
    return {
      textClass: 'primary',
      sectionId: 'tab1',
      sectionStyle: { color: 'red'}
    }
  }
}).mount('#app');
</script>
```
