import styled  from "styled-components";
import { FriendItem } from "../type";

export interface IFriendIntro {

   introLength :number;
    
  }

  export type IFriendItem={
    friend : FriendItem;
}

export const Input = styled.input
`
font-family: 'SuncheonB';
width: 300px;
height: 30px;
border-radius: 9px;
margin:10px;


`;

export const FriendWrapper = styled.div
`
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
export const FriendContainer = styled.div
`
display:flex;
display: inline-block
flex-direction:column;
cursor:pointer;

:hover{
  opacity :0.5;
}

`;

export const FriendProfile =styled.img
`
width: 50px;
height: 50px;
border-radius: 30px;
border:1px solid lightgrey;
margin:10px;

`;


export const FriendName = styled.div
`  
text-align:left;
padding:1.2rem;
font-size:15px;
flex:0.7;
  
`;

export const Header = styled.header
`
  font-size: 30px;
  text-align:left;
  padding:20px;
`;

export const FriendIntro = styled.div<IFriendIntro>
`
{
    position: relative;
    width: ${(props) => props.introLength * 5};
    height: 10px;
    padding: 5px;
    margin-top:15px;
    background: #FFFFFF;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    border: #7E7F7F solid 2px;
    font-size : 13px;
    color:skyblue;

}

:after
{
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 5px 7px 0;
    border-color: #FFFFFF transparent;
    display: block;
    width: 0;
    z-index: 1;
    bottom: -5px;
    left: 17px;
}

:before
{
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 6px 8px 0;
    border-color: #7E7F7F transparent;
    display: block;
    width: 0;
    z-index: 0;
    bottom: -8px;
    left: 16px;
}

`;

export const FriendChat = styled.div
`
display :flex;
flex-direction:column;

`;
export const LastChat = styled.div
`
text-align:left;
padding :1.2rem;
padding-top:0rem;
font-size:11px;
flex:0.3;
color:grey;


`;

