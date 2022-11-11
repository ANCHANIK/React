import { useEffect, useRef, useState } from "react";
import { CalendarStyle } from "../styles/MainStyle";


const UseCalendar = () => {
    
	const [weeklist, setWeeklist] = useState({});
	const [weeklistUpdate, setWeeklistUpdate] = useState(false);
	// const [weekArr, setWeekArr] = useState(() => {

	// });
    const [yearMonth, setYearMonth] = useState('');

	const now = new Date();
	const date = new Date(now.getFullYear(), now.getMonth(), now.getDate()) // 요일

    console.log('date',date);

	useEffect(()=>{
		setWeeklist({date, week});
        setYearMonth(`${date.getFullYear()}.${date.getMonth()+1}`)
	},[])

	// 주단위
	const makeWeekArr = (date) => {
		const day = date.getDay();
		const week = [];
		for (let i = 0; i < 7; i++) {
            const newDate = new Date(date.valueOf() + 86400000 * (i - day));
            const dateInfo = new Date(date.getFullYear(), date.getMonth(), date.getDate()+newDate)
			week.push({"day":i, "date":newDate.getDate(), "dateInfo": dateInfo});
		}

		return week;
	}
    const week = makeWeekArr(date);
    
    console.log('week',week);


	// 지난주 일주일
	const arrowLeft = () => {
		let newDate = new Date(weeklist.date.valueOf() - 86400000 * 7);
		let newWeek = makeWeekArr(newDate);
		
		setWeeklist({
			date: newDate,
			week: newWeek
		})
        setYearMonth(`${newDate.getFullYear()}.${newDate.getMonth()+1}`)
		
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
        setYearMonth(`${newDate.getFullYear()}.${newDate.getMonth()+1}`)
		
		setWeeklistUpdate(!weeklistUpdate)
	}

    //해당 날짜 클릭 Date info
    const currentDate = (data) => {
        console.log('e',data)
    }
	


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
                        weeklist.week &&
                        weeklist.week.map(({day,date}) => {
                            return <col key={day} />
                        })
                    }
                </colgroup>
                <thead>
                    <tr>
                        {
                            weeklist.week &&
                            weeklist.week.map(({day,date}) => {
                                switch (day) {
                                    case 0:
                                    return <th key={day}>일</th>
                                    break;
                                    case 1:
                                    return <th key={day}>월</th>
                                    break;
                                    case 2:
                                    return <th key={day}>화</th>
                                    break;
                                    case 3:
                                    return <th key={day}>수</th>
                                    break;
                                    case 4:
                                    return <th key={day}>목</th>
                                    break;
                                    case 5:
                                    return <th key={day}>금</th>
                                    break;
                                    case 6:
                                    return <th key={day}>토</th>
                                    break;
                                    default:
                                    break;
                                }
                                // return <th key={day}>{day}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                <tr>
                    {
                        weeklist.week &&
                        weeklist.week.map(({day,date}) => {
                            return (
                                <td key={day}>
                                    <span onClick={() => currentDate(date)}>{date}</span>
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

export default UseCalendar; 
