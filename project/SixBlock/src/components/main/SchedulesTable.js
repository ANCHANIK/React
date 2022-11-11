import { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import { Table } from "../../styles/MainStyle"
// import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DaySchedules from "./ScheduleTable/DaySchedules"
import MonthSchedules from "./ScheduleTable/MonthSchedules";
import WeekSchedules from "./ScheduleTable/WeekSchedules";
import SelectDate from "./SelectDate";


const SchedulesTable = () => {

    const { selectDate } = useContext(MainContext);
    // const settings = {
    //     // 슬라이드 옵션들
    //     arrows: false,  // 화살표 표시
    //     dots: false,  // 밑에 현재 페이지와 나머지 페이지 점으로 표시
    //     infinite: false,  // 무한 반복
    //     speed: 500,  // 넘기는 속도
    //     slidesToShow: 1,  // 슬라이드에 보여지는 아이템 개수
    //     slidesToScroll: 1,  // 슬라이드 넘기는 아이템 개수
    //     autoplay: false,  // 자동 재생
    //     autoplaySpeed: 0,  // 자동 재생 속도
    // };

    return (
        <Table>
            <SelectDate></SelectDate>
            {
                selectDate === "Day" ? <DaySchedules></DaySchedules> :
                selectDate === "Week" ? <WeekSchedules></WeekSchedules> :
                selectDate === "Month" && <MonthSchedules></MonthSchedules>
            }
            {/* <Slider {...settings}>
                <DaySchedules></DaySchedules>
                <WeekSchedules></WeekSchedules>
                <MonthSchedules></MonthSchedules>
            </Slider> */}

        </Table>
    )
}

export default SchedulesTable;
