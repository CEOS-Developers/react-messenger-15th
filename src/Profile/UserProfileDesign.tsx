import styled  from "styled-components";
import {IFriendIntro} from  "../BasicListDesign";

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
margin:1rem;
cursor:pointer;

`;

export const ProfileName = styled.div

`
margin:1.7rem;
font-size:15px;
margin-right:0.5rem;

`;
export const ProfileIntro = styled.div<IFriendIntro>

`
margin-bottom:2rem;
margin-top:2rem;
font-size:13px;
color:grey;

`;