import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { DailyStyle } from "../../../styles/MainStyle";



const DailyTable = ({ typeNum }) => {

    const {
        daylistTransform, setDaylistTransform, totalData, setTotalData,
        dayState, setDayState
    } = useContext(MainContext);
    
    const [textareaValue, setTextareaValue] = useState('');
    const [inputValue, setInputValue] = useState("");
    const [isButtonState, setIsButtonState] = useState(false);


    // textarea input Event
    const InputData = (e) => {
        const { name, value } = e.target;
        setInputValue(value);
    }



    // 수정완료 Submit Event
    const onSubmit = (e) => {
        e.preventDefault();
        setIsButtonState(!isButtonState);
        setDaylistTransform(!daylistTransform);
        
        if(dayState && inputValue){
            // 하루 단위 
            setDayState(
                {
                    ...dayState,
                    list:
                    dayState.list.length === 0 ?
                    [
                        {
                            code: typeNum,
                            content: inputValue
                        }
                    ]
                    :
                    dayState.list.find(type => type.code === typeNum) ?
                    //존재하는 코드인 경우 list 안에서 찾기
                    dayState.list.map(type => type.code === typeNum ?
                        {
                            ...type,
                            content: inputValue
                        }
                        : type)
                    : //존재하지 않는 코드의 경우 list 새로 생성
                    [
                        ...dayState.list,
                        {
                            code: typeNum,
                            content: inputValue
                        }
                    ]
                }
            )
        }
    }
    

    // 수정 Button Event
    const onClick = (e) => {
        e.preventDefault();
        setIsButtonState(!isButtonState);
    }

    // 성공 button event
    const successBtn = (e) => {
        e.preventDefault();
    }


    useEffect(() => {
        setTextareaValue("")
        setInputValue("")
        
        if(dayState && dayState.list) {
            
            dayState.list.map(con => con.code === typeNum ?
                setTextareaValue(con.content)
            :
                null
            )
        }

    }, [daylistTransform]);

    
    // 날짜 클릭시 해당 data 출력
    useEffect(() => {

        totalData.length > 0 &&
        setTotalData(
            totalData.map(data => data.YMD === dayState.YMD ?
                
                {
                    ...data,
                    list : dayState.list
                }
                
            :
            data
            )
        )
    }, [dayState]);


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
                                value={textareaValue}
                                name={typeNum}
                                disabled
                            />
                        )
                    }
                </div>
                <div>
                    <button onClick={successBtn}>Success</button>
                    {
                        isButtonState ? (
                            <button>OK</button>
                            ) : (
                            <button onClick={onClick}>Edit</button>
                        )
                    }
                </div>
            </form>
            
        </DailyStyle>
    )
}

export default DailyTable;
