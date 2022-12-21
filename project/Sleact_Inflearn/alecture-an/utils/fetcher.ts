import axios from 'axios';

const fetcher = (url: string) => (
  axios
    .get(url, {
      withCredentials: true,
      // 프론트 서버와 백엔드 서버의 도메인이 다르면 서로 쿠키를 보내거나 받을 수 없다.
      // 이를 해결해 주는 설정
      // POST에서는 세 번째 자리에 설정
      // GET 에서는 두 번째 자리에 설정
    })
    .then((response) => response.data)
)



export default fetcher;
