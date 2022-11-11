import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { WeeklyTableStyle } from "../../../styles/MainStyle";

const WeekSchedules = () => {
    const { totalData } = useContext(MainContext);

    console.log('totalData',totalData.length);

    return (
        <>
            {
                totalData.length > 0 ? (
                    <WeeklyTableStyle>
                        <colgroup>
                            <col style={{ width: "10%" }} />
                            <col span="2" style={{ width: "15%" }} />
                            <col span="2" style={{ width: "15%" }} />
                            <col span="2" style={{ width: "15%" }} />
                        </colgroup>
                        <thead>
                            <tr>
                                <th></th>
                                <th colSpan="2">Morning</th>
                                <th colSpan="2">Afternoon</th>
                                <th colSpan="2">Dinner</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {
                                data.map((el, idx) => {
                                    
                                    let days = Object.keys(el)[0];
                                    
                                    return (
                                        <tr key={el}>
                                            <td>{days}</td>
                                                {
                                                    el[days].map((con, indx) => {
                                                        return (
                                                            <td key={indx}>{con.content}</td>
                                                        )
                                                    })
                                                }
                                        </tr>
                                    )
                                })
                            } */}
                        </tbody>
                    </WeeklyTableStyle>
                ) : (
                    <div className="no_week_data">하루 일과를 등록해 보세요!</div>
                )
            }
        </>
    )
}

export default WeekSchedules;
