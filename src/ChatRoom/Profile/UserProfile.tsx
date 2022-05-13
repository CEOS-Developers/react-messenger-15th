import {Profileprops} from "../../type";
import {Profileimg,Profile,ProfileName,ProfileIntro} from "./UserProfileDesign"
import user from "../../data/user.json";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../../recoil";

function UserProfile({currentUser} : Profileprops){

    const changeUser = useRecoilValue(userState);
    const setChangeUser = useSetRecoilState(userState);

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

    const {name, intro , profile} = user[changeUser];
    
    return( 
    <Profile>
        <Profileimg  src = {profile} onClick = {toggleUser} loading="lazy"/>
        <ProfileName>{name}<span> 🟢</span></ProfileName>
        <ProfileIntro introLength = {intro.length}>{intro}</ProfileIntro>
    </Profile>
    )

    };

 export default UserProfile;