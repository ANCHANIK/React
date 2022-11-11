import { useSearchParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // searchParams : useState의 첫 번째 index와 같이 첫 번째로 반환받는 값은
  // url에 전달받은 query string을 꺼내 쓸 수 있는 값을 get을 통해 가져올 수 있다.
  // setSearchParams : searchParams를 변경시킬 수 있는 역할을 한다.
  // 즉 query string을 바꿀 수 있다는 얘기

  const navigate = useNavigate();
  // 페이지를 이동시키는 함수를 한 개 반환한다.

  // setTimeout(() => {
  //   navigate("/home");
  // }, 5000);

  const id = searchParams.get("id");
  console.log(id);
  const mode = searchParams.get("mode");
  console.log(mode);

  return (
    <>
      <h1>Edit</h1>
      <p> 일기 수정 페이지 입니다.</p>
      <button onClick={() => setSearchParams({ who: "anchanik" })}>
        {/* 파라미터 값이 바뀜 */}
        QS 바꾸기
      </button>
      <button
        onClick={() => {
          navigate("/home");
        }}
        // 로그인을 안한 사용자를 강제로 로그인 페이지로 보낼 때 주로 사용
      >
        홈으로 이동
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </>
  );
};

export default Edit;
