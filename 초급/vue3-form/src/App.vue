<template>
  <div>
    <form action="" @submit.prevent="submitForm">
      <div>
        <label for="userId">ID : </label>
        <input type="text" id="userId" v-model="username" />
      </div>
      <div>
        <label for="password">PW : </label>
        <input type="text" id="password" v-model="password" />
      </div>
      <button type="submit" @click="logText">로그인</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  /**
   * data() {
    return {
      username: "",
      password: "",
    };
  }
  위와 같은 코드가 setup()으로 표현하면 ref를 사용해서 작업할 수가 있다.
   */

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
};
</script>

<style lang="scss" scoped></style>
