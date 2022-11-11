import React from "react";
import { useState, useEffect } from "react";

function App3 () {

    // state를 담아줄 array
    
    const [toDo, setToDo] = useState('');
    const [toDos, setToDos] = useState([]);

    const onChange = (event) => {
        setToDo(event.target.value);
    }
    
    const onSumit = (event) => {
        event.preventDefault();
        if(toDo === '') {
            return;
        }
        setToDo(''); // 직접 수정하는 방법
        setToDos(currentArray => [toDo, ...currentArray]) // 함수를 넣어 수정하는 방법
        /*
        const aaa = e
        const bbb = [a,b,c,d]
        |no|
        console.log([aaa,bbb]) -> [e, Array[4]] -> [e, [a,b,c,d]]
        |yes|
        console.log([aaa, ...bbb]) -> [e,a,b,c,d]
        -> ...array ========== '...' 이게 중요함!! =============
        */
        /*
        state를 직접 수정할 수 없다.
        array에 담긴 state를 수정하고 싶다면 
        수정하는 함수를 사용할 것
        */
    }
    // console.log(toDos);

    /* 
    araay.map()
    1) map 은 array안에 새로운 array 값을 가지고 싶을 때, 안에 함수를 넣을 수 있도록 해줌
    2) 이 함수는 array의 모든 item에 대해서 실행될거임!
    3) 실행 된 함수의 return 된 값이 새로운 array 안에 들어가게 된다구!
    => map은 하나의 array에 있는 item을 내가 원하는 무엇이든지로 바꿔주고 새로운 array로 return 해줌

    */
    return (
        <>
            <h1>My To Dos({toDos.length})</h1>
            <form onSubmit={onSumit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="write your to do......"
                />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default App3;