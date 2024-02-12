# 🍿 Vue.js 최종 프로젝트

- ⭐️`v-model`⭐️이라는 속성을 사용하면 입력 값이 자동으로 뷰 데이터 속성에 연결됩니다. v-model 속성은 v-bind와 v-on의 기능의 조합으로 동작합니다.

```ts
<input v-bind:value="inputText" v-on:input="updateInput">
```

`v-model`이라는 속성을 사용하면 화면에 입력된 값이 데이터에 연동된다.

---

`vue3-form` 프로젝트 작업하면서,,,

<br />
<br />

### 이전 버전

```ts
submitForm(event) {
      event.preventDefault();
      console.log("제출됨");

      const data = {
        username: this.username,
        password: this.password,
      };

      axios
        .post("https://jsonplaceholder.typicode.com/users/", {
          data,
        })
        .then((res) => console.log(res));
    },
```

### setup() 버전으로 변경했을 때

- 💚 composition API 버전임

```ts
setup() {
    // data 선언
    const username = ref("");
    const password = ref("");

    // methods
    const submitForm = () => {
      axios
        .post("https://jsonplaceholder.typicode.com/users/", {
          username: username.value,
          password: password.value,
        })
        .then((res) => {
          console.log("res", res);
        });
    };
    return {
      username,
      password,
      submitForm,
    };
  },
```
