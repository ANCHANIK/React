import React, { useEffect, useReducer, useRef } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }

    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }

    case "REMOVE": {
      newState = state.filter((item) => item.id !== action.targetId);
      break;
    }

    case "EDIT": {
      newState = state.map((item) =>
        item.id === action.data.id ? { ...action.data } : item
      );
      break;
    }
    default:
      return state;
  }

  // 모든 데이터는 reducer를 거쳐 조작된다.
  // 일기 데이터의 값이 변경될 때마다 localStorage에 값을 조작할 것이다.
  // 따라서, newState가 변화할 때마다 localStorage에 값을 조작할 것이고,
  // return되기 전에 localStorage에 값을 넣어준다.
  localStorage.setItem("diary", JSON.stringify(newState));

  return newState;
};

//Context
export const DiaryStateContexts = React.createContext();
//Dispatch Context
export const DiaryDispatchContexts = React.createContext();

//dummyData(임시 데이터)
// const dummyData = [
//   {
//     id: 1,
//     emotion: 1,
//     content: "오늘의 일기 1편",
//     date: 1662508800000,
//   },
//   {
//     id: 2,
//     emotion: 4,
//     content: "오늘의 일기 2편",
//     date: 1662595200000,
//   },
//   {
//     id: 3,
//     emotion: 2,
//     content: "오늘의 일기 3편",
//     date: 1662681600000,
//   },
//   {
//     id: 4,
//     emotion: 5,
//     content: "오늘의 일기 4편",
//     date: 1662768000000,
//   },
//   {
//     id: 5,
//     emotion: 3,
//     content: "오늘의 일기 5편",
//     date: 1662830575015,
//   },
// ];

const App = () => {
  const [data, dispatch] = useReducer(reducer, []);

  // App component가 mount 되었을 때, localStorage 데이터를 data 기초값으로 사용
  useEffect(() => {
    const localData = localStorage.getItem("diary");

    if (localData) {
      // localStorage에 데이터가 있을 때, 가장 높은 id 값에 +1을 해주어야 하는데,
      // 가져온 데이터를 sort를 통해 내림차순으로 정렬을 해준다.
      // 0번째 데이터의 id는 가장 높은 값을 가지므로 +1 해주어 dataId 값을 지정해 준다.
      const diaryList = JSON.parse(localData).sort(
        (a, b) => parseInt(b.id) - parseInt(a.id)
      );

      if (diaryList.length > 1) {
        dataId.current = parseInt(diaryList[0].id) + 1;
        dispatch({ type: "INIT", data: diaryList });
      }
    }
  }, []);

  const dataId = useRef(0);
  //dispatch 제작
  // CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current++;
  };
  // REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  // EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <DiaryStateContexts.Provider value={data}>
      <DiaryDispatchContexts.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/diary/:id" element={<Diary />} />
              {/* 
                /:id 를 작성해야 해당 id 값을 router가 인식하여 해당 페이지를 로딩할 수 있음
              */}
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContexts.Provider>
    </DiaryStateContexts.Provider>
  );
};

export default App;
