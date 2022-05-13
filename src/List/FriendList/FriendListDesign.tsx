import {FriendIntro, FriendName, FriendProfile,IFriendItem } from "../BasicListDesign";

function FriendLists({friend}:IFriendItem){

    return(
    <>
    <FriendProfile src = {friend.profile} loading="lazy"/>
    <FriendName>{friend.name}</FriendName>
    <FriendIntro introLength ={friend.intro.length}>{friend.intro}</FriendIntro>
    </>

    );

}

export default FriendLists;