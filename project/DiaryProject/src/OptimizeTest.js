import React, { useEffect, useState } from "react";

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`CounterA::Update::${count}`);
  });
  return <div>{count}</div>;
});
// const CounterB = React.memo(({ obj }) => {
//   useEffect(() => {
//     console.log(`CounterB::Update::${obj.count}`);
//   });
//   return <div>{obj.count}</div>;
// });

// areEqual 비교 함수 제작 ===================================
const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`CounterB::Update::${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

const areEqual = (prevProps, nextProps) => {
  /*
  return true; // 이전 프롭스(prevProps)와 현재 프롭스(nextProps)가 같다 => re-rendering을 일으키지 않는다.
  return false; // 이전 프롭스(prevProps)와 현재 프롭스(nextProps)가 다르다 => re-rendering을 일으킨다.
  */
  // if (prevProps.obj.count === nextProps.obj.count) {
  //   return true; // re-rendering X
  // }
  // return false; // counter가 달라졌으니 re-rendering O

  return prevProps.obj.count === nextProps.obj.count; // 위에 if문을 이렇게 간단하게 작성
};

const MemoizedCounterB = React.memo(CounterB, areEqual);

// 배열은 areEqual을 이용해 true || false를 반환받아 re-rendering || no re-rendering을 결정한다.
// areEqual 비교 함수 제작 =====================================

const OpimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        {/* <CounterB obj={obj} /> */}
        <MemoizedCounterB obj={obj} />
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }
        >
          B button
        </button>
      </div>
    </div>
  );
};

export default OpimizeTest;
