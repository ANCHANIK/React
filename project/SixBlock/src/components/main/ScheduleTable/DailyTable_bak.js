import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { DailyStyle } from "../../../styles/MainStyle";



const DailyTable = ({ typeNum }) => {

    const {
        clickDay, inputs, setInputs,
        totalData, setTotalData,
        dayDataInSession,
        dayDataInLocal , setDayDataInLocal,
        daylistTransform, setDaylistTransform,
        dayState, setDayState
    } = useContext(MainContext);
    
    const [arrValue, setArrValue] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isButtonState, setIsButtonState] = useState(false);
    // const [dayState, setDayState] = useState([]);


    // setInput에 list 가 쌓이면 localStorage로 보내기
    

    // textarea input Event
    const InputData = (e) => {
        const { name, value } = e.target;
        setInputValue(value);
    }

    // Submit Event
    const onSubmit = (e) => { //OK시 setInput에 list 쌓기
        e.preventDefault();

        setInputs({code: typeNum, content: inputValue})

        setIsButtonState(!isButtonState);
        setDaylistTransform(!daylistTransform);
        setInputValue("");
    }

    // Button Event
    const onClick = (e) => {
        e.preventDefault();
        setIsButtonState(!isButtonState);
    }

    useEffect(() => {
        console.log('dayState 변화', dayState);
        setDayState([
            // ...clickDay,
            {list: inputs}
        ])
        window.localStorage.setItem('dayTotalData', dayState)


    },[inputs])


    useEffect(() => {
        console.log('inputs 변화', inputs);
        
        // window.localStorage.setItem('dayTotalData', inputs)

        // console.log('dayDataInLocal',dayDataInLocal);

        // setDayDataInLocal(inputs)

        // setInputs([
        //     // clickDay,
        //     // {
        //     //     list: {...inputs}
        //     // }
        // ])

        

    },[inputs])

    
    // 날짜 클릭시 해당 data 출력
    useEffect(() => {
        // setNotUse(false);
        setIsButtonState(false);
        setArrValue([]);
        setDayDataInLocal([
            // ...dayDataInLocal,
            {...clickDay, list : []}
        ])
        // setInputValue("");
        
        console.log('clickDay',clickDay)
        // dayDataInLocal !== null ? (
        //     dayDataInLocal.find(date => date.date === clickDay.YMD ? (
        //         // dayDataInLocal.date === 선택한 날짜가 같으면 실행
        //         setArrValue(date.list)
        //         ) : (
        //             // 다른 날짜 선택
        //         setArrValue([]),
        //         console.log('못찾음'),
        //         console.log('arrValue못찾',arrValue)
        //         // setDayDataInLocal(totalData),
        //         // setDayDataInSession(totalData)
        //     ))
        // ) : (
        //     // 데이터 없음
        //     console.log('데이터 없음')
        //     // setDayDataInLocal(totalData),
        //     // setDayDataInSession(totalData)
        // )

    }, [clickDay]);


    return (
        <DailyStyle notUse={isButtonState}>
            <form onSubmit={onSubmit}>
                <div>
                    {
                        isButtonState ? (
                            <textarea
                                onChange={InputData}
                                value={inputValue}
                                name={typeNum}
                            />
                        ) : (
                            <textarea
                            value={
                                arrValue === [] ? (
                                    ''
                                ) : (
                                    arrValue.find(val => val.code === typeNum && (
                                        arrValue.content
                                    ))
                                )
                            }
                            disabled />
                        )
                    }
                </div>
                <div>
                    <button>Success</button>
                    {/* <button onClick={() => EditGoal(typeNum)}>{textEdit}</button> */}
                    {
                        isButtonState ? (
                            <button>수정완료</button>
                            ) : (
                            <button onClick={onClick}>수정</button>
                        )
                    }
                </div>
            </form>
            
        </DailyStyle>
    )
}

export default DailyTable;
