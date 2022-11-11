import styled from "styled-components";
import logo from "../assets/img/ico/ico_hexagon.svg";
import menu from "../assets/img/ico/ico_menu.svg";
import search from "../assets/img/ico/ico_search.svg";

export const HeaderStyle = styled.section`
    & > div {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 20px 20px;
        span {
            width: 2.5rem;
            height: 2.5rem;
            background: url(${logo}) no-repeat center;
            background-size: contain;
        }
        h1 {
            padding: 0;
            margin-left: 0.5rem;
            margin-top: .2rem;
            font-size: 30px;
        }
        .search{
            width: 1.8rem;
            height: 1.8rem;
            position: absolute;
            right: 4%;
            background: url(${search}) no-repeat center;
            background-size: contain;
        }
    }
`
