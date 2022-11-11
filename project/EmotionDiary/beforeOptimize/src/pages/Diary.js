import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContexts } from "../App";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";

import { getStringDate } from "../util/date";
import { emotionList } from "../util/emotion";

const Diary = () => {
  const navigator = useNavigate();
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContexts);

  const [data, setData] = useState();

  // useEffect 사용으로 id, diaryList가 변경될때만 해당 데이터 출력
  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (item) => parseInt(item.id) === parseInt(id)
      );

      if (targetDiary) {
        // targetDiary가 존재할 때
        setData(targetDiary);
      } else {
        // targetDiary가 존재하지 않을 때
        alert("없는 일기입니다.");
        navigator("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  // DiaryList 출력 로직
  if (!data) {
    return <div className="DiaryPage">로딩중 입니다...</div>;
  } else {
    const curEmotionData = emotionList.find(
      (item) => parseInt(item.emotion_id) === parseInt(data.emotion)
    );

    return (
      <div className="DiaryPage ">
        <MyHeader
          headerText={`${getStringDate(new Date(data.date))} 기록`}
          leftchild={
            <MyButton text={"< 뒤로가기"} onClick={() => navigator(-1)} />
          }
          rightchild={
            <MyButton
              text={"수정하기"}
              onClick={() => navigator(`/edit/${data.id}`)}
            />
          }
        />
        <article>
          <section>
            <h4>오늘의 감정</h4>
            <div
              className={[
                "diary_img_wrapper",
                `diary_img_wrapper_${data.emotion}`,
              ].join(" ")}
            >
              <img src={`${curEmotionData.emotion_img}`} />
              <div className="emotion_descript">
                {curEmotionData.emotion_descript}
              </div>
            </div>
          </section>
          <section>
            <h4>오늘의 일기</h4>
            <div className="diary_content_wrapper">
              <p>{data.content}</p>
            </div>
          </section>
        </article>
      </div>
    );
  }
};

export default Diary;
