import React, { useEffect, useState } from "react";
import { LifecycleContainer } from "../style/DiaryContainer";

const LifecycleMountUpdate = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(0);

  // Mount되는 시점 확인
  useEffect(() => {
    console.log("Mount!");
  }, []);
  // 빈 배열을 쓰면 count가 올라가도 component가 Mount된 시점에만 작동하기 때문에
  // re-rendering되어도 한 번만 작동하게 된다.
  // => 따라서, mount 시점에 어떠한 작업이 필요한 경우, 빈 배열을 두고, 내부에 작성하면 된다.

  // component가 re-rendering될 때 (re-rendering = update)
  // 1) state가 update 될 때
  // 2) 부모 component에서 오는 props가 바뀔 때
  // 3) 부모 component가 re-rendering 될 때
  useEffect(() => {
    console.log("Update!!");
  }); // 빈 비열을 작성하지 않으면, 페이지 안에 있는 state들이 update 될 때 re-rendering 된다.

  useEffect(() => {
    console.log(`count is update : ${count}`);
    if (count > 5) {
      alert(`카운트는 5를 넘길 수 없습니다. 1로 초기화 합니다.`);
      setCount(1);
      return;
    }
  }, [count]); // count가 update될 때 re-rendering 된다.

  useEffect(() => {
    console.log(`text is update : ${text}`);
  }, [text]); // text가 update될 때 re-rendering 된다.
  // => 감지하고 싶은 값만 감지해서 그 값이 변화하는 순간에만 Callback함수를 수행시킬 수 있다.

  return (
    <LifecycleContainer>
      <h4>mount & update</h4>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </LifecycleContainer>
  );
};

export default LifecycleMountUpdate;
