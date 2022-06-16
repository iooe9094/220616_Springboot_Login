// login / logout / register 역할
import http from "@/http-auth";

class AuthService {
  // login methods(function)
  login(user) {
    // springboot 서버로 로그인 정보(이름, 암호) 확인 요청
    return (
      http
        .post("/signin", {
          username: user.username,
          password: user.password,
        })
        // 성공하면 then으로 결과가 들어옴
        .then((response) => {
          console.log(response.data),
            console.log("accessToken" + response.data.token);

          // springboot 서버에서 전송한 웹 토큰을 받았으면
          // 로컬스토리지에 user라는 이름으로 저장
          if (response.data.token) {
            // JSON.stringify() : JSON 객체를 문자열로 변환
            // JSON.parse() : 문자열을 JSON 객체로 변환
            localStorage.setItem("user", JSON.stringify(response.data));
          }
          return response.data;
        })
    );
  }
  // logout methods(function)
  // JWT(Java Web Token)를 로컬 저장소(localStorage)에서 제거
  logout(user) {
    localStorage.removeItem("user");
  }

  // POST방식 : springBoot 서버에 회원 가입을 요청 (insert)
  // 영문 사이트 : signup (회원가입)
  register(user) {
    return http.post("/signup", {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }
}

export default new AuthService();
