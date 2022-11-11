import React from 'react';
import Container from './Container';
import Counter from './Counter';
import MyHeader from './MyHeader';
// import './App.css';

function App() {

  const counterProps = {
    a: 1,
    b: 2,
    c: 4,
    d: 234,
    e: 69,
    // initialValue: 5
  }

  return (
    <Container>
      {/* // JSX 문법 */}
      <div>
        <MyHeader />
        <Counter {...counterProps} />
      </div>

    </Container>
  );
}

export default App;
/*
Common.js module system 에서는
module.exports={} 를 사용
(알고 있을 것)

export default ?
React 는 es module system 을 사용하고 있다.
=> export default 로 내포낸 파일은 다른 파일에서 import 해서 사용할 수 있다
=> export default 는 1개만 내보낼 수 있다.
*/
