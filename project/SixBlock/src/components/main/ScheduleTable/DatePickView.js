import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../../contexts/MainContext";
import DailyTable from "./DailyTable";

const DatePickView = () => {

    const {  } = useContext(MainContext);

    
    
    return (
        <>
            <div className="today_warp">
                <h5>Morning</h5>
                <div>
                    <DailyTable typeNum="m1"></DailyTable>
                    <DailyTable typeNum="m2"></DailyTable>
                </div>
            </div>
            <div className="today_warp">
                <h5>Afternoon</h5>
                <div>
                    <DailyTable typeNum="a1"></DailyTable>
                    <DailyTable typeNum="a2"></DailyTable>
                </div>
            </div>
            <div className="today_warp">
                <h5>Dinner</h5>
                <div>
                    <DailyTable typeNum="d1"></DailyTable>
                    <DailyTable typeNum="d2"></DailyTable>
                </div>
            </div>
        </>
    )
}

export default DatePickView;
