import { useContext, useEffect, useRef, useState } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { CalendarStyle } from "../../../styles/MainStyle";


const WeekCustomCalendar = ({ currentDate }) => {

    const { totalData } = useContext(MainContext)
    
	const [weeklist, setWeeklist] = useState({});
    const [yearMonth, setYearMonth] = useState('');
    const [detailDate, setDetailDate] = useState(null)
	const [weeklistUpdate, setWeeklistUpdate] = useState(false);
    const [addUnderLine, setAddUnderLine] = useState(false)

	const now = new Date();
	const date = new Date(now.getFullYear(), now.getMonth(), now.getDate()) // 요일


	useEffect(()=>{
		setWeeklist({date, week});
        setYearMonth(`${date.toLocaleString("en-US", { month: "short" })} ${date.getFullYear()}`)
	},[])

	// 주단위
	const makeWeekArr = (date) => {

		const day = date.getDay();
		const week = [];
		for (let i = 0; i < 7; i++) {
			const newDate = new Date(date.valueOf() + 86400000 * (i - day));
			week.push({"day":i, "date":newDate.getDate(), "detail":newDate});
		}

		return week;
	}
	const week = makeWeekArr(date);


	// 지난주 일주일
	const arrowLeft = () => {
		let newDate = new Date(weeklist.date.valueOf() - 86400000 * 7);
		let newWeek = makeWeekArr(newDate);
		
		setWeeklist({
			date: newDate,
			week: newWeek
		})
        setYearMonth(`${newDate.toLocaleString("en-US", { month: "short" })} ${newDate.getFullYear()}`)
		
		setWeeklistUpdate(!weeklistUpdate)
	}

	// 다음주 일주일
	const arrowRight = () => {
		let newDate = new Date(weeklist.date.valueOf() + 86400000 * 7);
		let newWeek = makeWeekArr(newDate);
		
		setWeeklist({
			date: newDate,
			week: newWeek
		})
        setYearMonth(`${newDate.toLocaleString("en-US", { month: "short" })} ${newDate.getFullYear()}`)
		
		setWeeklistUpdate(!weeklistUpdate)
	}

    //해당 날짜 클릭
    const datePick = (detail) => {
        currentDate(detail) // 자식 component -> 부모 component로 데이터 전송
        setDetailDate(`${detail.getFullYear()}${("0" + (1 + detail.getMonth())).slice(-2)}${("0" + detail.getDate()).slice(-2)}`)
        setWeeklistUpdate(!weeklistUpdate)
    }

    useEffect(() => {
        console.log("totallllllll",totalData);
        console.log(detailDate);

        //totalData.find(day => day.YMD === detailDate) 

        totalData.length > 0 && detailDate &&
        //?
        // totalData.find(data => data.YMD === detailDate).list.length > 0 &&

        totalData.map((elm) => elm.YMD === detailDate && 
            elm.list.length > 0 && setAddUnderLine(true)
        )
        // console.log("ㄱㄱ")
       // :
        //setAddUnderLine(false)

    }, [detailDate]);
    
	useEffect(()=>{console.log("totalData", totalData)},[totalData])
    
    
    // totalData.find(Tdata => Tdata.YMD === weekListYMD) ?
    // totalData.map(Tdata => Tdata.YMD === weekListYMD &&
    //     Tdata.list.length > 0 ?
    //     <span className="underLine" onClick={() => datePick(detail)}>{date}</span>
    //     :
    //     <span onClick={() => datePick(detail)}>{date}</span>
    // )
    // :
    // <span onClick={() => datePick(detail)}>{date}</span>
    // :
    // <span onClick={() => datePick(detail)}>{date}</span>

	return (
        <CalendarStyle>
            <div className="arrowBtnAndMonth">
                <button onClick={arrowLeft}>Left</button>
                <div>{yearMonth}</div>
                <button onClick={arrowRight}>Right</button>
            </div>
            <table>
                <colgroup>
                    {
                        weeklist.week?.map(({day,date}) => {
                            return <col key={day} />
                        })
                    }
                </colgroup>
                <thead>
                    <tr>
                        {
                            weeklist.week?.map(({day,date}) => {
                                switch (day) {
                                    case 0:
                                    return <th key={day}>Sun</th>
                                    break;
                                    case 1:
                                    return <th key={day}>Mon</th>
                                    break;
                                    case 2:
                                    return <th key={day}>Tue</th>
                                    break;
                                    case 3:
                                    return <th key={day}>Wed</th>
                                    break;
                                    case 4:
                                    return <th key={day}>Thu</th>
                                    break;
                                    case 5:
                                    return <th key={day}>Fri</th>
                                    break;
                                    case 6:
                                    return <th key={day}>Sat</th>
                                    break;
                                    default:
                                    break;
                                }
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                <tr>
                    {
                        weeklist.week?.map(({day,date,detail}) => {

                            return (
                                <td key={day}>
                                    <span className={addUnderLine ? 'underLine' : null} onClick={() => datePick(detail)} >{date}</span>
                                </td>
                            )
                        })
                    }
                </tr>
                </tbody>
            </table>
        </CalendarStyle>
	)
}

export default WeekCustomCalendar;
