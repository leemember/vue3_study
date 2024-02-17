# 🍿 Vue Composition API

- Vue3 부터 라이브러리 공식 API로 채택 됐다.
  > https://ko.vuejs.org/guide/extras/composition-api-faq

### Vue Composition API 기본

- Composition API 버전

```ts
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">change</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const message = ref('Hello');
    // 메서드 정의한 부분
    const changeMessage = () => {
      // 값에 접근
      message.value = 'Hi';
    }

    return { message, changeMessage }
  }
}
</script>
```

이전 코드와 비교했을 때 script 쪽이 달라진 것을 볼 수 있다. `setup()`을 사용해서 내용 구현이 가능함

- 기존 옵션 API 버전

```ts
<script>
export default {
  data() {
    return {
      message: 'Hi'
    }
  },
  methods: {
    changeMessage() {
      this.message = 'Hello'
    }
  }
}
</script>
```

기존에는 이처럼 메서드며, 데이터에 담길 메시지 등등 전부 직접 다 선언해주어야 됐었는데 컴포지션 API로 바꿔 나갈 때는 `setup()`을 사용하여 함수형 식으로 표현할 수가 있다.

### 함수 표현식의 장점

- ‘함수 표현식이 호이스팅에 영향을 받지 않는다’
  - 클로저로 사용할 수 있다.
  - 콜백으로 사용 (다른 함수의 인자로 넘길 수 있다)

### 📝 composition api 코드 기본 작성

```ts
<template>
  <div>
    <p>{{ msg }}</p>
    <button @click="changeMessage">변경</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    // data 초기값
    const msg = ref("HELLO");

    // methods
    const changeMsg = () => {
      // 꼭 value까지 작성해줘야함
      msg.value = "BYE";
    };

    // 정의한 데이터와 메서드는 반드시 return으로 작성해줘야한다.
    // 그래야 setup 바깥에서 사용할 수 있다.
    return {
      msg,
      changeMsg,
    };
  },
};
</script>

<style lang="scss" scoped></style>
```

## ✅ 장점

1. 타입 추론이 개발자 입장에서 봤을 때 좀 더 용이해졌다.
2. 로직들을 재사용할 수가 있도록 별도의 파일을 만들어 import 해올 수가 있다. (클린코드를 위한 관심사 분리 가능)

다만, 아래와같은 코드량은 굳이 분리하지 않아도 된다.
몇백줄 이상이 된다고 한다면 그때는 역할에 따라 로직을 분리시켜 관심사를 분리시켜 볼 수 있다.

```ts
import { ref } from "vue";

const useMsg = () => {
  const msg = ref("HELLO");

  const changeMsg = () => {
    msg.value = "BYE";
  };

  return {
    msg,
    changeMsg,
  };
};

export { useMsg };
```

## ✅ 단점

- setup안에 사용되는 computed 또는 watch, watchEffect 등의 러닝커브가 있을 수도

---

### 이벤트 발생 - setup()

- 이벤트 발생은 하위 컴포넌트에서 -> 상위 컴포넌트로 신호를 보내는 컴포넌트 통신 방식입니다. 컴포지션에서는 어떻게 컴포넌트 이벤트를 발생시킬 수 있는지 알아보겠습니다!

#### 컴포넌트 이벤트 발생

- 기존 인스턴스 옵션 속성으로 이벤트를 발생시키는 방법은 `$emit()` API 였습니다!

#### 기존

```ts
this.$emit();
```

이런식으로 이벤트를 발생시켰다면

#### context

```ts
context.emit("change");
context.emit("change", 100); // change 이벤트 발생 후 인자 100을 같이 넘긴다.
```

#### 💚 이벤트를 하위컴포넌트에서 -> 상위컴포넌트로 보내는 법

```ts
<TodoList @하위컴포넌트 이벤트이름="상위컴포넌트의 메서드 이름"></TodoList>
```
TodoInput에서 

```ts
function addTodo() {
  const todo = todoInput.value;
  localStorage.setItem(todo, todo);
  // this.$emit('') 과 동일한 이벤트발생 역할을 한다.
  ✅ context.emit("add" -> 이벤트이름, todo);
  clearTodo();
}
```
이렇게 `add` 라는 이벤트를 썼음.

```ts
<TodoList @add=""></TodoList>
```