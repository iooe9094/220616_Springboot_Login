// JWT(Java Web Token)를 헤더에 저장해서 전송

export default function authheader() {
  // user 항목에 대한 로컬 스토리지(크롬 애플리케이션/로컬스토리지)를 확인
  // 있으면 user에 객체, 없으면 빈 객체(null, undefined) 들어옴
  let user = JSON.parse(localStorage.getItem("user"));

  // 서버 페이지 접근할 때 토큰이 필요
  if (user && user.token) {
    // springBoot로 전송 시 아래 포맷을 이용
    return { Authorization: "Bearer" + user.token };
    // node.js의 경우
    // return { 'x-access-token' : user.accessToken };
  } else {
    return {};
  }
}
