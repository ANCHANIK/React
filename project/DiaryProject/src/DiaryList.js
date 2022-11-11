import DiaryItem from "./DiaryItem";
import { DiaryListContainer } from "./style/DiaryContainer";

const DiaryList = ({ diaryList, onRemove, onEdit }) => {
  return (
    <DiaryListContainer>
      <h2>Diary List</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((arr, idx) => (
          <DiaryItem
            key={arr.id}
            {...arr}
            onRemove={onRemove}
            onEdit={onEdit}
          />
        ))}
      </div>
    </DiaryListContainer>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
