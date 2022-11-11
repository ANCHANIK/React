import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";
import MyButton from "./MyButton";

const sortOptionList = [
  { value: "lastest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];
const filterOptionList = [
  // 1,2,3 : 좋은 감정 / 4,5: 좋아질 감정
  { value: "all", name: "모든 감정" },
  { value: "good", name: "좋은 감정" },
  { value: "bad", name: "좋아질 감정" },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  // value: select가 어떤 것을 선택하고 있는지
  // onChange: select가 선택한 것을 바꿀 기능을 할 함수
  // optionList: option
  return (
    <select
      className="ControlMenu"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((item, idx) => (
        <option key={idx} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

const DiaryList = ({ diaryList }) => {
  // 새 일기쓰기 router
  const navigate = useNavigate();

  // 날짜별 filtering
  const [sortType, setSortType] = useState("latest");
  // 감정별 filtering
  const [filter, setFilter] = useState("all");

  //select에 따른 데이터 변환
  const getProcessedDiary = () => {
    // 감정 filtering callback 함수
    const filterCallback = (item) => {
      if (filter === "good") {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };

    // 비교함수
    const compare = (a, b) => {
      // parseInt : 형변환(문자열 -> 숫자열)
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date); // 문자열이 들어올 수 있기 때문에 === parseInt === 적용
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };
    // diaryList.sort 를 쓰면 데이터 자체를 정렬하기 때문에 사용 X
    const copyList = JSON.parse(JSON.stringify(diaryList)); // diaryList를 JSON화 시킨 후 다시 복호화를 통해 copyList에 담았기에 복사 됨.

    // copyList 감정 filtering
    const filteredList =
      filter === "all" ? copyList : copyList.filter((it) => filterCallback(it));

    // const sortedList = copyList.sort(compare);
    const sortedList = filteredList.sort(compare);

    return sortedList;
  };

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <ControlMenu
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
          />
        </div>
        <div className="right_col">
          <MyButton
            type={"positive"}
            text={"새 일기쓰기"}
            onClick={() => navigate("/new")}
          />
        </div>
      </div>
      {getProcessedDiary().map((it) => (
        <DiaryItem key={it.id} {...it} />
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
