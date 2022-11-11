import { useState } from "react";
import OddEvenResult from "./OddEvenResult";


const Counter = ({ initialValue }) => {

    // console.log(props);

    // const {a,initialValue} = props

    const [count, setCount] = useState(initialValue)

    const onIncrease = () => {
        setCount(count + 1)
    }
    const onDecrease = () => {
        setCount(count - 1)
    }

    return (
        <>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <OddEvenResult count={count} />
        </>
    )
}

Counter.defaultProps = {
    initialValue: 0
}
// defaultProps 를 써 줌으로써 부모 component에서
// 값이 안내려 와도 위와 같이 기본 값을 설정해 놓으면 오류를 방지할 수 있다.
export default Counter;