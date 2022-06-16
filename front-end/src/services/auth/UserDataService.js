import http from "@/http-auth";
import authheader from "@/services/auth/AuthHeader";

// springBoot 서버와 axios 통신하는 클래스
class userDataService {
  getPublicContent() {
    return http.get("/all");
  }

  // 권한이 부여된 화면에 접근 시 아래 형태로 요청
  // 헤더에 웹 토큰이 포함된 형태로 요청(get, post 등)
  getUserBoard() {
    return http.get("/user", { headers: authheader() });
  }
}
