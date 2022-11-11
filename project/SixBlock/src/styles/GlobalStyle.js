import styled from "styled-components";

export const GlobalStyle = styled.div`
    * {
        margin:0;
        /* padding:0; */
        box-sizing:border-box;
    }
    ul,li,ol{
        list-style: none;
    }
    img,fieldset{
        border:0;
    }
    img{
        vertical-align: top;
    }
    a,a:link{
        text-decoration: none;
        color:#000;
    }
    input,select,textarea,button{
        vertical-align: middle;
        border-radius: 0;
        cursor: pointer;
        /*ios대응*/
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        -webkit-border-radius: 0;
        font-family: 'BodyfriendM';
    }
    input[type="text"]:focus,
    input[type="text"]:hover{
        outline : none;
    }
    input[type="checkbox"],
    input[type="radio"]{
        cursor: pointer;
    }
    input[type="button"]{
        border:none;
    }
    textarea:disabled{
        background:#f1f1f1;
        color:#000;
    }
    i,em,address{
        font-style:normal;
    }
    table {
        table-layout: fixed;
        border-collapse: collapse;
        border-spacing: 0;
        empty-cells: show;
    }
    legend, caption {
        line-height:0;
        width:0;
        height:0;
        overflow:hidden;
        font-size:0;
    }
    button{
        border:0;
        font-family: 'BodyfriendM';
        cursor: pointer;
        outline: none;
        -webkit-tap-highlight-color : transparent !important;
    }
    span{
        display: block;
    }
`
