import styled from "styled-components";

export const DiaryContainer = styled.div`
  border: 1px solid #bbb;
  text-align: center;
  padding: 20px;
  & input,
  & textarea {
    margin-bottom: 20px;
    width: 500px;
    padding: 10px;
    border: 1px solid #bbb;
  }
  & textarea {
    height: 150px;
    resize: none;
  }
  & select {
    width: 300px;
    padding: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    border: 1px solid #bbb;
  }
  & button {
    width: 500px;
    padding: 10px;
    background-color: #154bafbd;
    border: none;
    color: #fff;
    cursor: pointer;
  }
`;

export const DiaryListContainer = styled.div`
  border: 1px solid #bbb;
  padding: 20px;
  margin-top: 20px;
  h2 {
    text-align: center;
  }
  h4 {
    font-size: 14px;
  }
`;

export const DiaryItemContainer = styled.div`
  background-color: #f4f4f4;
  margin-bottom: 10px;
  padding: 20px;
  font-size: 12px;
  .info {
    border-bottom: 1px solid #bbb;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  .date {
    color: #bbb;
    font-size: 11px;
  }
  .content {
    font-weight: 600;
    margin: 30px 0 30px;
  }
  textarea {
    width: calc(100% - 20px);
    padding: 10px;
    resize: none;
  }
  button {
    width: 60px;
    height: 27px;
    border: none;
    border-radius: 6px;
    font-size: 10px;
    color: #fff;
    cursor: pointer;
  }
  button:nth-of-type(1) {
    background-color: #3dab6770;
    &:hover {
      background-color: #3dab67b3;
    }
    &:active {
      background-color: #3dab67db;
    }
  }
  button:nth-of-type(2) {
    background-color: #ff000070;
    margin-left: 10px;
    &:hover {
      background-color: #ff0000a3;
    }
    &:active {
      background-color: #ff0000d1;
    }
  }
`;

export const LifecycleContainer = styled.div`
  padding: 20px;
`