import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContexts } from "../App";
import DiaryEditor from "../components/DiaryEditor";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const diaryList = useContext(DiaryStateContexts);

  const [originData, setOriginData] = useState();

  // 페이지 이동시마다 상단 head의 타이틀 변경
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장, ${id}번째 일기 수정`;
  }, []);

  // edit component가 mount 되었을 때 비교 해당 데이터 추출
  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (item) => parseInt(item.id) === parseInt(id)
      );

      if (targetDiary) {
        // 해당 targetDiary State에 저장 후 사용
        setOriginData(targetDiary);
      } else {
        // 존재하지 않는 Id 값에 접근하려 할 때
        alert("없는 일기입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]); // id 또는 diaryList가 변할때만

  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  );
};

export default Edit;
