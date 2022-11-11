import React, { useEffect, useState } from "react";
import { LifecycleContainer } from "../style/DiaryContainer";

const UnmountTest = () => {
  useEffect(() => {
    console.log("Mount!!!");

    // unMount 확인
    // 리턴되는 이 함수는 unMount 시점에 실행
    return () => {
      console.log("unMount!!!!");
    };
  }, []);

  return <div>Unmount Testing Component</div>;
};

const LifecycleUnmount = () => {
  const [isVisible, setIsvisible] = useState(false);
  const toggle = () => setIsvisible(!isVisible);

  return (
    <LifecycleContainer>
      <h4>Unmount</h4>
      <button onClick={() => toggle()}>On/Off Toggle</button>
      {isVisible && <UnmountTest />}
    </LifecycleContainer>
  );
};

export default LifecycleUnmount;
