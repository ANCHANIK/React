import { useContext } from "react";
import { useState } from "react";
import { MainContext } from "../../contexts/MainContext";
import { DropMenu, SelectDateStyle } from "../../styles/MainStyle";



const SelectDate = () => {
    const { selectDate, setSelectDate } = useContext(MainContext);
    
    const dateArr = ['Day', 'Week', 'Month'];
    const [date, setDate] = useState('Today')    
    const [drop, setDrop] = useState(false);

    const dropMenu = (e) => {
        setDrop(current => !current)
    }

    const test = (item) => {
        setDrop(false)
        setSelectDate(item)
        item === "Day" ? setDate("Today") :
        item === "Week" ? setDate("This Week") :
        setDate("This Month")
    }


    return (
        <SelectDateStyle>
            <div><strong>{date}</strong> SIX BLOCK</div>
            <div className="select_date" onClick={dropMenu}>{selectDate}</div>
            {
                drop ? (
                    <DropMenu>
                        <ul>
                            {
                                dateArr.map((item, idx) => {
                                    return <li key={idx} onClick={() => test(item)}>{ item }</li>
                                })
                            }
                        </ul>
                    </DropMenu>
                ) : (
                    null
                )
            }

        </SelectDateStyle>

    )
}

export default SelectDate;
