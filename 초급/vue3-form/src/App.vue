<template>
  <div>
    <form action="" @submit="submitForm">
      <div>
        <label for="id">ID : </label>
        <input type="text" id="userId" v-model="username" />
      </div>
      <div>
        <label for="password">PW : </label>
        <input type="text" id="password" v-model="password" />
      </div>
      <button type="submit">로그인</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      console.log("제출됨");
      this.username;
      this.password;
    },
  },
};
</script>

<style lang="scss" scoped></style>
