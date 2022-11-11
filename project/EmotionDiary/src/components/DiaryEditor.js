import { useNavigate } from "react-router-dom";
import { useCallback, useContext, useEffect, useRef, useState } from "react";

import MyHeader from "./MyHeader";
import MyButton from "./MyButton";
import EmotionItem from "./EmotionItem";
import { DiaryDispatchContexts } from "../App";

import { getStringDate } from "../util/date";
import { emotionList } from "../util/emotion";

const DiaryEditor = ({ isEdit, originData }) => {
  const navigate = useNavigate();

  // 날짜 설정 state
  const [date, setDate] = useState(getStringDate(new Date()));

  // 감정 설정 state
  const [emotion, setEmotion] = useState(3);
  // emotion 클릭시 event
  const handleClickEmote = useCallback((emotion) => {
    setEmotion(emotion);
  }, []);

  // 일기 작성 state
  const contentRef = useRef();
  const [content, setContent] = useState("");

  // 작성 완료 event
  const { onCreate, onEdit, onRemove } = useContext(DiaryDispatchContexts); // App.js
  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }

    if (
      window.confirm(
        isEdit ? "일기를 수정하시겠어요?" : "새로운 일기를 작성하시겠어요?"
      )
    ) {
      if (!isEdit) {
        onCreate(date, content, emotion); // 매개변수 : date, content, emotion
        // 매개변수 보내는 순서 정확할 것. date, emotion, content로 보내서 애먹음 20220911
      } else {
        onEdit(originData.id, date, content, emotion);
      }
    }

    navigate("/", { replace: true }); // replace: true -> 다시 현 화면으로 못 돌아오게 하는 속성
  };

  // 일기 삭제하기
  const handleRemove = () => {
    if (
      window.confirm("정말 삭제하시겠어요?\n삭제된 일기는 복구되지 않습니다.")
    ) {
      onRemove(originData.id);
      navigate("/", { replace: true });
    }
    console.log("test");
  };

  // 일기 수정하기 part
  // isEdit === true로 내려줬을 때만 아래 로직 실행
  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setEmotion(originData.emotion);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  return (
    <div className="DiaryEditor">
      <MyHeader
        headerText={isEdit ? "일기 수정하기" : "새 일기쓰기"}
        leftchild={
          <MyButton
            text={"< 뒤로가기"}
            onClick={() => {
              navigate(-1);
            }}
          />
        }
        rightchild={
          isEdit && (
            <MyButton
              text={"삭제하기"}
              type={"negative"}
              onClick={() => {
                handleRemove();
              }}
            />
          )
        }
      />
      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className="input_box">
            <input
              className="input_date"
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
        </section>
        <section>
          <h4>오늘의 감정</h4>
          <div className="input_box emotion_list_wrapper">
            {emotionList.map((item) => (
              // <EmotionItem key={item.emotion_id} {...item} />
              <EmotionItem
                key={item.emotion_id}
                {...item}
                onClick={handleClickEmote}
                isSelected={item.emotion_id === emotion}
                // 선택의 유무 확인을 위한 props, 같다면 true 다르면 false 전달
              />
            ))}
          </div>
        </section>
        <section>
          <h4>오늘의 일기</h4>
          <div className="input_box text_wrapper">
            <textarea
              ref={contentRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={"오늘 하루는 어땠어요?"}
            />
          </div>
        </section>
        <section>
          <div className="control_box">
            <MyButton text={"취소하기"} onClick={() => navigate(-1)} />
            <MyButton
              text={"작성완료"}
              type={"positive"}
              onClick={handleSubmit}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;
