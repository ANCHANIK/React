import { useState } from "react";
import { MainScheduleStyle } from "../../styles/MainStyle";
import SchedulesTable from "./SchedulesTable";


const MainSchedules = () => {

    return (
        <MainScheduleStyle>

            {/* <SelectDate /> */}

            <SchedulesTable />

        </MainScheduleStyle>
    )
}

export default MainSchedules;
