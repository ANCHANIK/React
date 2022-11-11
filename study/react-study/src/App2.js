import React from 'react';
import { useState, useEffect } from 'react';

// 보여지거나 파괴될 컴포넌트 제작
function Hello () {
    
    useEffect( () => {
        console.log('Hi ;)') // useEffect 안의 return에 쓰면, 컴포넌트가 파괴될 때 뭔가 할 값을 주고 사라질 수 있엄
        return () => {
            console.log('bye ;(');
        }
    }, []);
    
    return (
        <h1>반갑습니당당당다라당당당</h1>
    )
}

function App2 () {
    const [showing, setShowing] = useState(false);
    const onClick = () => {
        setShowing( prev => !prev );
    }
    return (
        <>
            {showing ? <Hello /> : null}
            <button
                onClick={onClick}
            >
                {showing ? "HIDE" : "SHOW"}
            </button>
        </>
    )
}

export default App2;