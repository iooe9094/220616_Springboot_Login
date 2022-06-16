<template></template>

<script>
import User from "@/models/user";

export default {
  name: "Login",
  // 뷰의 변수들을 초기화하는 곳 : data()
  data() {
    return {
      user: new User("", ""),
      loading: false,
      message: "",
    };
  },
  computed: {
    // 값은 true 또는 false
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  // 화면이 뜨자마자 실행되는 이벤트
  // created(Vue 객체가 만들어질 때, mounted(화면 모두 뜰 때 실행))
  created() {
    // 로그인이 되면 loggedIn = ture
    // 로그인이 안되면 LoggedOut = false
    // 로그인이 되면 사용자를 프로필 페이지로 안내
    if (this.loggedIn) {
      // profile 페이지로 강제 이동
      this.$router.push("/profile");
    }
  },
  methods: {},
};
</script>

<style></style>
