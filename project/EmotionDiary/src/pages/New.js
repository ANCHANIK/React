import { useEffect } from "react";
import DiaryEditor from "../components/DiaryEditor";

const New = () => {
  // 페이지 이동시마다 상단 head의 타이틀 변경
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장, 새 일기`;
  }, []);

  return (
    <>
      <DiaryEditor />
    </>
  );
};

export default New;
