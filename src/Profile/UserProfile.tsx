import {Profileprops} from "../type";
import React from "react";
import { Dispatch, SetStateAction, useCallback} from "react";
import {Profileimg,Profile,ProfileName,ProfileIntro} from "./UserProfileDesign"
import nowUser from "../data/user.json";
import ProfileImage from "../Image";

function UserProfile({changeUser,setChangeUser} : Profileprops){

     const toggleUser = useCallback (() => {
         changeUser ? setChangeUser(0) : setChangeUser(1);
        },[]);
    //확장성 고려해서 roomid로 바꾸기

    const {name, intro} = nowUser[changeUser];
    
    return( 
    <Profile>
        <Profileimg  src = {ProfileImage[changeUser]} onClick = {toggleUser}/>
        <ProfileName>{name}<span> 🟢</span></ProfileName>
        <ProfileIntro>{intro}</ProfileIntro>
    </Profile>
    )

    };

 export default UserProfile;