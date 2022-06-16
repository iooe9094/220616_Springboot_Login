// Vuex : store/index.js -> 모든 컴포넌트에서 공유할 수 있는 변수를 정의하는 역할

import Vue from "vue";
import Vuex from "vuex";

import { auth } from "../store/AuthModule";

Vue.use(Vuex);

export default new Vuex.Store({
  // 외부 자바스크립트 정의
  modules: {
    auth,
  },
});
