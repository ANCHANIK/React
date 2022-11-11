import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <h1>Diary</h1>
      <p>이 곳은 diary 상세 페이지 입니다.</p>
    </>
  );
};

export default Diary;
