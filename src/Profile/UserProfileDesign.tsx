import styled  from "styled-components";
import {IFriendIntro} from  "../FriendListDesign";

export const Profile = styled.div
`
flex:0.1;
text-slign:center;
border-bottom: 1px solid grey;
display:flex;
flex-direction:row;

`
;

export const Profileimg = styled.img
`
width: 50px;
height: 50px;
border-radius: 30px;
border:1px solid lightgrey;
margin:10px;
cursor:pointer;

`;

export const ProfileName = styled.div

`
margin:25px;
font-size:15px;

`;
export const ProfileIntro = styled.div<IFriendIntro>

`
margin: ${(props) => props.introLength}px;
font-size:15px;
color:grey;

`;