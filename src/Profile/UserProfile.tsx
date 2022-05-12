import {Profileprops} from "../type";
import React from "react";
import { Dispatch, SetStateAction, useCallback} from "react";
import {Profileimg,Profile,ProfileName,ProfileIntro} from "./UserProfileDesign"
import nowUser from "../data/user.json";

function UserProfile({changeUser,setChangeUser,currentUser} : Profileprops){

     const toggleUser = () => {
         if(changeUser == 0)
          {
              setChangeUser(currentUser);
        }
        else
        { 
            setChangeUser(0);
        }
        };
    //확장성 고려해서 roomid로 바꾸기

    const {name, intro , profile} = nowUser[changeUser];
    
   console.log(intro.length);
    return( 
    <Profile>
        <Profileimg  src = {profile} onClick = {toggleUser}/>
        <ProfileName>{name}<span> 🟢</span></ProfileName>
        <ProfileIntro introLength = {intro.length}>{intro}</ProfileIntro>
    </Profile>
    )

    };

 export default UserProfile;