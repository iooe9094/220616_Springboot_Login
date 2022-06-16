<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light fixed-top small"
      id="mainNav"
    >
      <div class="container">
        <a class="navbar-brand" href="#">
          <router-link to="/home">
            <img width="50" height="50" alt="" src="#" />
          </router-link>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <!-- dropdown #1 시작 -->
            <li class="nav-item dropdown mr-4">
              <a
                class="nav-link dropdown-toggle mr-5"
                href="../../assets/img/bg-callout.jpg"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <router-link to="/" class="dropdown-item">
                  나의 메뉴
                </router-link>
                <router-link to="/complain" class="dropdown-item">
                  Complain
                </router-link>
              </div>

              <!-- 로그인 태그 추가 -->
              <div v-if="currentUser" class="navbar-nav ml-auto">
                <router-link to="/profile" class="nav-link">
                  <!-- 웹 아이콘 추가 : user -->
                  <font-awesome-icon icon="user"></font-awesome-icon>
                  {{ currentUser.username }}
                </router-link>
              </div>
            </li>
            <li class="nav-item">
              <!-- @click.prevent: a태그의 기능을 막는 역할 -->
              <a href @click.prevent="logOut" class="nav-link">
                <!-- 웹 아이콘 추가 : logOut -->
                <font-awesome-icon icon="sign-out-alt"></font-awesome-icon>
                LogOut
              </a>
            </li>
            <!-- dropdown #1 끝 -->
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  // html에서 변수처럼 호출 : 뒤에 () 붙이면 안된다 ex) currentUser
  // 속도는 computed 빠름
  computed: {
    currentUser() {
      // 공유저장소의 전역변수 (공유변수 : user)
      // 자동으로 로그인 되었으면 loggedIn = true
      // 아니면 loggedIn = false, user객체 = null
      // return this.$route.auth.user;
      return true; // 테스트용
    },
  },
  // html에서 함수처럼 호출 : 뒤에 () 붙음 ex) logOut(), logOut
  methods: {
    logOut() {
      // dispatch 호출하는 메소드 : actions 있는 메소드를 호출
      this.$store.dispatch("auth/logout");
      // 로그아웃 후 이동할 페이지 지정
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
