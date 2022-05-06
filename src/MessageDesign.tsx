import styled  from "styled-components";
export const Wrapper = styled.div
    `
    flex:1;
    overflow: auto;
    ::-webkit-scrollbar{
        width:8px;
        heigth:8px;
        background-color: white;
        /* 스크롤바 둥글게 설정    */
        border-radius: 10px;   
    }
        ::-webkit-scrollbar-track{
            background-color: white;
     
    `;

export const ChatName = styled.div
    `
    text-align:left;
     font-size:13px;
     margin:5px;
    `;

export const Chatcontainer =  styled.div
    ` border-radius: 9px 
    border: 1px solid grey;
      display:flex;
      margin: 5px;
    `;

export const ChatProfile =styled.img
    `
    flex:0.1;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin:10px;
    `;

export const ChatMessage = styled.div
    `
      text-align:left;
      margin-left:10px;
      font-size:13px;
    `;

export const MessageBox = styled.div
    `
      display:flex;
      flex-direction: column;
       
    `;