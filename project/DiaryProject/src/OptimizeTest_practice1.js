import React, { useEffect, useState } from "react";

const TextView = React.memo(({ text }) => {
  // text state가 바뀌지 않는 한, TextView component는 re-rendering이 되지 않는다!!
  useEffect(() => {
    //console.log(`Update::Text::${text}`);
  });
  return <div>{text}</div>;
});

const CountView = React.memo(({ count }) => {
  // 마찬가지로, count state가 바뀌지 않는 한, CountView component는 re-rendering이 되지 않는다!!
  useEffect(() => {
    //console.log(`Update::Count::${count}`);
  });
  return <div>{count}</div>;
});

const OptimizeTest_practice1 = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  useEffect(() => {}, []);

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h5>실습1</h5>
      </div>
      <div>
        <h2>count</h2>
        <CountView count={count} />
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
      <div>
        <h2>text</h2>
        <TextView text={text} />
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default OptimizeTest_practice1;
