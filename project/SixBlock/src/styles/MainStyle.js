
import styled from "styled-components";
import icoArrowDrop from "../assets/img/ico/ico_arrowDrop.svg"
import icoArrowRight from "../assets/img/ico/ico_arrow_forward.svg"
import icoArrowLeft from "../assets/img/ico/ico_arrow_back.svg"


export const MainScheduleStyle = styled.section`
    margin-top: 25px !important;
    padding: 0 5px !important;
    h5{padding-left: 10px;}
`

export const SelectDateStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 35px;
    position: relative;
    padding-left: 5px;
    border-bottom: 1px solid #EAEAEA;
    .select_date{
        padding: 5px 10px;
        position: relative;
        font-size: 14px;
        &::after{
            position: absolute;
            left: -10px;
            top: 7px;
            content: "";
            width: 18px;
            height: 18px;
            background: url(${icoArrowDrop}) no-repeat center;
            background-size: contain;
        }
    }
`

export const DropMenu = styled.div`
    display: block;
    position: absolute;
    right: 0;
    top: 30px;
    border: 1px solid #e6e6e6;
    background-color: #fff;
    border-radius: 5px;
    z-index: 9999;
    ul{
        padding: 0;
        li{
            font-size: 12px;
            padding: 7px;
            text-align: center;
        }
    }
`

export const Table = styled.div`
    padding: 0px 0 10px;
    & .today_warp{
        &:not(:first-child){
            margin-top: 15px;
        }
        & > div{
            display: flex;
            margin-top: 5px;
        }
    }
    .custom_calendar{
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        
    }
`
export const DailyStyle = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 50%;
    height: 120px;
    box-sizing: border-box;
    & > form {
        width: 100%;
        height: 100%;
        & > div:nth-of-type(1){height: 70%}
        & > div:nth-of-type(2){height: 30%}
        & textarea{
            width: 100%;
            height: 100%;
            padding: 5px;
            border: none;
            border: 1px solid #eaeaea;
            border-bottom: none;
            resize: none;
            font-size: 20px;
            background-color: ${props => `${props.notUse ? '#fff' : '#f1f1f1'}}`};
            &:focus{
                outline: none;
            }
        }
        & button{
            width: 50%;
            height: 100%;
            background-color: #e7e7e7;
            &:last-child{
                background-color: #a5cbff;
            }
        }
    }
`
export const WeeklyTableStyle = styled.table`
    margin-top: 30px !important;
    thead > tr {border-bottom: 5px solid #fff;}
    th{
        font-size: 13px;
        &:nth-of-type(2){ background-color:#ffddd7 }
        &:nth-of-type(3){ background-color:#ffffc4 }
        &:nth-of-type(4){ background-color:#daf1da }
        border: 1px solid #fff;
    }
    td{
        /* border: 1px solid #fff; */
        height: 60px;
        font-size: 10px;
        border: 1px solid #fff;
        box-sizing: unset;
        padding: 3px;
        &:nth-of-type(1){font-size:11px; font-weight: 600;}
        &:nth-of-type(2),&:nth-of-type(3){
            background-color:#ffddd7;
        }
        &:nth-of-type(4),&:nth-of-type(5){
            background-color:#ffffc4;
        }
        &:nth-of-type(6),&:nth-of-type(7){
            background-color:#daf1da;
        }
    }
`

export const MonthlyTableStyle = styled.div`
    .md-custom-event-img {
    width: 30px;
    height: 30px;
    }

    .mbsc-custom-event-name {
        padding: 0 10px;
    }

    .md-custom-event-cont {
        display: flex;
        align-items: center;
        padding-top: 10px;
        font-size: 13px;
    }

    .md-custom-event-btn.mbsc-button {
        position: absolute;
        right: 10px;
        bottom: 8px;
        line-height: 20px;
        padding: 0px 6px;
    }

    .custom-event-popover.mbsc-material .mbsc-popover-list .mbsc-event {
        padding: 10px 14px;
    }

    .custom-event-popover.mbsc-ios .mbsc-popover-list {
        width: 340px;
    }

    .custom-event-popover.mbsc-material .mbsc-popover-list {
        width: 320px;
    }

    .custom-event-popover.mbsc-windows .mbsc-popover-list {
        width: 340px;
    }


`

export const CalendarStyle = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 90%;
    margin-top: 1rem !important;
    padding: 0 1rem 1rem;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #00000054;
    .arrowBtnAndMonth {
        display: flex;
        padding: .7rem 0;
        button {
            width: 1.3rem;
            text-indent: -9999px;
            color: #eaeaea;
            -webkit-tap-highlight-color : transparent !important;
            &:nth-of-type(1) {
                background: url(${icoArrowLeft}) no-repeat center;
                background-size: contain;
            }
            &:nth-of-type(2) {
                background: url(${icoArrowRight}) no-repeat center;
                background-size: contain;
            }
        }
        & > div {
            width: 6rem;
            text-align: center;
            font-size: .8rem;
            color: #545454;
            font-weight: 700;
        }
    }
    table{
        col{
            width: calc(100%/11);
        }
        th,td{
            padding: .5rem;
            text-align: center;
            font-size: .7rem;
            font-weight: 600;
            &:nth-of-type(1) {
                color: #ff270091;
            }
            &:nth-of-type(7) {
                color: #6b81ff91;
            }
        }
        td{
            padding: .3rem 0 0;
            span{
                position: relative;
                width: 20px;
                height: 20px;
                margin: 0 auto;
                font-size: 0.7rem;
                font-weight: 600;
                line-height: 20px;
                transition: all 0.2s ease;
                &:active{
                    border-radius: 10px;
                    background-color: #e0e0e0;
                    color: #eaeaea;
                }
                &.underLine::before{
                    content: "";
                    position: absolute;
                    width: 10px;
                    height: 2px;
                    background-color: #ffbc00b8;
                    left: 50%;
                    bottom: -3px;
                    transform: translate(-50%);
                }
            }
        }
    }
`
