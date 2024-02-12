<template>
  <div>
    <form action="" @submit="submitForm">
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

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    // event.preventDefault(); 이걸 생략하는 방법중에서는
    //  <form action="" @submit="submitForm"> 이 부분에 @submit.prevent라고 하면 된다.
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
  },
};
</script>

<style lang="scss" scoped></style>
