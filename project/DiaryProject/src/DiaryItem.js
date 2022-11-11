import React, { useRef, useState } from "react";
import { DiaryItemContainer } from "./style/DiaryContainer";

const DiaryItem = ({
  onRemove,
  onEdit,
  author,
  content,
  create_date,
  emotion,
  id,
}) => {
  const localContentInput = useRef();
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  // 수정시 사용되는 state
  const [localContent, setLocalContent] = useState(content);

  const handleRemove = () => {
    if (window.confirm(`해당 일기(${id + 1}번째)를 정말 삭제 하시겠어요?`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }
    if (window.confirm(`해당 일기(${id + 1})를 정말 수정 하시겠어요?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  return (
    <DiaryItemContainer>
      <div className="info">
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(create_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
              ref={localContentInput}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleEdit}>Edit Complete</button>
          <button onClick={handleQuitEdit}>Edit Cancel</button>
        </>
      ) : (
        <>
          <button onClick={toggleIsEdit}>Edit</button>
          <button onClick={handleRemove}>Remove</button>
        </>
      )}
    </DiaryItemContainer>
  );
};

export default React.memo(DiaryItem);
