import React, { useState, useRef } from "react";
import { DiaryContainer } from "./style/DiaryContainer";

const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }

    onCreate(state.author, state.content, state.emotion);
    alert("저장 성공");
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <DiaryContainer>
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          onChange={handleChangeState}
          value={state.author}
          ref={authorInput}
        />
      </div>
      <div>
        <textarea
          name="content"
          onChange={handleChangeState}
          value={state.content}
          ref={contentInput}
        />
      </div>
      <div>
        오늘의 감정 점수 :
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </DiaryContainer>
  );
};

export default React.memo(DiaryEditor);
