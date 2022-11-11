import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data; // 새로운 state
    }
    case "CREATE": {
      const create_date = new Date().getTime();
      const newItem = {
        ...action.data,
        create_date,
      };
      return [newItem, ...state];
    }
    case "REMOVE": {
      return state.filter((elm) => elm.id !== action.targetId);
    }
    case "EDIT": {
      return state.map((elm) =>
        elm.id === action.targetId
          ? { ...elm, content: action.newContent }
          : elm
      );
    }
    default:
      return state;
  }
};

const App = () => {
  // const [data, setData] = useState([]);
  // useReducer
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0); // 아이디 값 1씩 늘려 추가해줌

  // 일기의 기초 데이터로 사용
  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((item) => {
      // map을 이용해 res의 값을 바꾸어 새롭게 만든 배열 값을 return하여 initData에 태운다. 0 ~ 19번째 값만.
      return {
        author: item.email,
        content: item.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        create_date: new Date().getTime(),
        id: dataId.current++, // 후위연산자 사용
      };
    });

    dispatch({ type: "INIT", data: initData });
    // setData(initData);
  };

  // App.js 가 mount 되자마자 getData()를 실행
  useEffect(() => {
    getData();
  }, []);

  // '일기 저장하기' button handler를 눌렀는때 data State에 item을 추가하는 함수
  const onCreate = useCallback((author, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: { author, content, emotion, id: dataId.current },
    });

    // const create_date = new Date().getTime();
    // const newItem = {
    //   author,
    //   content,
    //   emotion,
    //   create_date,
    //   id: dataId.current, // current는 현재 0이 초기값
    // };
    dataId.current += 1;
    // setData((data) => [newItem, ...data]); // 추가되는 새로운 list 는 맨 앞에 추가됨.
  }, []);

  // 해당 data 삭제 작동
  const onRemove = useCallback((targetId) => {
    // useCallback을 썼을때 아래와 같이 작성
    dispatch({ type: "REMOVE", targetId });
    // setData((data) => data.filter((item) => item.id !== targetId));
    alert(`${targetId}가 삭제되었습니다.`);
  }, []);

  // 해당 data 수정 작동
  const onEdit = useCallback((targetId, newContent) => {
    dispatch({ type: "EDIT", targetId, newContent });
    // setData(
    //   (
    //     data //마찬가지로 함수형 update 사용
    //   ) =>
    //     data.map((data) =>
    //       data.id === targetId ? { ...data, content: newContent } : data
    //     )
    // );
  }, []);

  // Memoization (연산 최적화)
  const getDiartyAnalysis = useMemo(() => {
    const goodCount = data.filter((item) => item.emotion >= 3).length;
    const badCount = data.length - goodCount; // 강의에서 쓴거
    const goodRatio = Math.floor((goodCount / data.length) * 100);

    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getDiartyAnalysis;

  return (
    <div>
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 갯 수 : {goodCount}</div>
      <div>기분 안 좋은 일기 갯 수 : {badCount}</div>
      <div>기분이 좋은 일기의 비율 : {goodRatio} %</div>
      <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit} />
    </div>
  );
};

export default App;
