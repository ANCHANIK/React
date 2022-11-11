import { useContext, useEffect, useState } from "react";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import DiaryList from "../components/DiaryList";
import { DiaryStateContexts } from "../App";

const Home = () => {
  const diaryList = useContext(DiaryStateContexts);

  // curDate state 날짜에 따른 가공
  const [data, setData] = useState([]);

  // 날짜 data
  const [curDate, setCurDate] = useState(new Date());
  // Header에 들어가는 년월
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  // 페이지 이동시마다 상단 head의 타이틀 변경
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장`;
  }, []);

  // 해당하는 달의 데이터만 추출해야 하므로 useEffect 사용
  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date( // 해당 달의 1일 자를 구함
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();

      const lastDay = new Date( // 해당 달의 마지막일 자를 구함
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0,
        23,
        59,
        59 // 시분초까지 작성해야 해당 달의 마지막 까지 등록됨
      ).getTime();

      // 해당 달에 입력된 데이터 filter
      setData(
        diaryList.filter(
          (item) => firstDay <= item.date && item.date <= lastDay
        )
      );
    }
  }, [diaryList, curDate]);

  // 월 증가 함수
  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };
  // 월 감소 함수
  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <>
      <MyHeader
        headerText={headText}
        leftchild={<MyButton text={"<"} onClick={decreaseMonth} />}
        rightchild={<MyButton text={">"} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data} />
    </>
  );
};

export default Home;
