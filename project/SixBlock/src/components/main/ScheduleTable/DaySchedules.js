import { useContext, useEffect, useState } from "react";
import DatePickView from "./DatePickView";
import { MainContext } from "../../../contexts/MainContext";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import WeekCustomCalendar from "./WeekCustomCalendar";



const DaySchedules = () => {

    const { clickDay, setClickDay, daylistTransform,
            totalData, setTotalData, dayState,
            setDaylistTransform, setDayState
        } = useContext(MainContext);
    
        console.log('clickDay',clickDay);
    // today default value
    useEffect(()=>{
        setDayState(clickDay);
    },[clickDay])

    useEffect(()=>{
        console.log('dayState124rsfefve',dayState);
        //currentDate();

    },[dayState])

    const currentDate = (e) => {
        //select date
        let selectYear = e.getFullYear();
        let selectMonth = ("0" + (1 + e.getMonth())).slice(-2);
        let selectDay = ("0" + e.getDate()).slice(-2);
        
        const selectDate = e.toDateString().substr(0, 3);
        const selectYMD = selectYear+selectMonth+selectDay;

        e &&
        setClickDay({
            date: selectDate,
            YMD: selectYMD,
            list: []
        })
        
        let selDate = {
            date: selectDate,
            YMD: selectYMD,
            list: []
        }

        if(totalData.find(data => data.YMD === selectYMD)){
            selDate.list = totalData.find(data => data.YMD === selectYMD).list
        }

        setDaylistTransform(!daylistTransform);
        setDayState(selDate);


        // ?. 으로 수정해 볼것
        totalData.length > 0 ?
            // 중복 데이터 검증 후 push
            totalData.find(data => data.YMD === selDate.YMD) ||
                // 존재하는 리스트 경우 중복 제거
            totalData.map(data => data.YMD === selDate.YMD ||
                setTotalData([...totalData,selDate])
            )
        :
        // 초기 데이터 없을 시 push
        setTotalData([selDate])
    }


    return (
        <>
            <div className="custom_calendar">
                <WeekCustomCalendar currentDate={currentDate} />
            </div>
            <DatePickView />
        </>
    )
}

export default DaySchedules;
