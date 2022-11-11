import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import RouteTest from "./components/RouteTest";
import MyHeader from "./components/MyHeader";
import MyButton from "./components/MyButton";

const App = () => {
  // localStorage 저장하는 법
  useEffect(() => {
    localStorage.setItem("item1", 10);
    localStorage.setItem("item2", "20");
    localStorage.setItem("item3", { number: 20, string: "문자" });
    // 객체{} 를 보내면 브라우저에서 인식이 안됨. [object object] 이렇게 나옴
    localStorage.setItem(
      "item",
      JSON.stringify({ number: 20, string: "문자" })
      // JSON.stringify 를 통해 집열화를 시켜줘야함.
    );
  }, []);

  // localStorage 꺼내오는 법
  // localStorage에 저장되는 값들은 문자열로 변환되어 저장된다.
  // Number 타입으로 저장했어도, 추출했을 때 String 타입으로 나옴
  useEffect(() => {
    const item1 = localStorage.getItem("item1");
    const item2 = localStorage.getItem("item2");
    const item3 = localStorage.getItem("item3");
    const item = JSON.parse(localStorage.getItem("item"));
    console.log({ item1, item2, item3, item });
  }, []);

  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headerText={"App"}
          leftchild={
            <MyButton text={"왼쪽 버튼"} onClick={() => alert("왼쪽 버튼")} />
          }
          rightchild={
            <MyButton
              text={"오른쪽 버튼"}
              onClick={() => alert("오른쪽 버튼")}
            />
          }
        />
        <h1>App.js</h1>

        <MyButton
          text={"저장"}
          onClick={() => alert("저장 버튼")}
          type={"positive"}
        />
        <MyButton
          text={"삭제"}
          onClick={() => alert("삭제 버튼")}
          type={"negative"}
        />
        <MyButton text={"수정"} onClick={() => alert("수정 버튼")} />
        <MyButton
          text={"수정"}
          onClick={() => alert("수정 버튼")}
          type={"sdklfjlkasdj"}
        />

        <h1>App.js</h1>

        <img src={process.env.PUBLIC_URL + `/assets/emotion1.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion2.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion3.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion4.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion5.png`} />
        {/* 
          process.env.PUBLIC_URL : 파일이 어떤 위치에 있던간에 /public 을 가르킨다.
        */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          {/* useParams 사용 */}
          <Route path="/diary/:id" element={<Diary />} />
          {/* <Route path="/diary" element={<Diary />} /> */}
          {/* /:id 를 작성하지 않으면 id값이 없을때 diary로 이동 */}
        </Routes>
        <RouteTest></RouteTest>
      </div>
    </BrowserRouter>
  );
};

export default App;
