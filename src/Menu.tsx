import styled  from "styled-components";
import React from "react";
import useNavigator from "./hook/useNavigator";

function Menu () {

     const Menu = styled.div
     `
     text-align: center;
     flex:0.15;
     border-radius: 9px;
     background-color:rgb(189, 223, 227);
     font-size: 15px;
     display:flex;
     flex-direction: column;
     `
     ;

    const Menu1 = styled.div
    `
    flex:0.1;
    cursor:pointer;
    padding-top:17px;
    text-align:center;
    &:hover
    {
      background-color:white;
    }
    `
    ;

    const {HomeLink,FriendListLink,ChatRoomListLink,SettingLink} = useNavigator();

return (

    //추후에 링크가 들어가게 될 부분
    
        <Menu>
            <Menu1 onClick={HomeLink}>🏠</Menu1>
            <Menu1 onClick={FriendListLink}>👩‍👦</Menu1>
            <Menu1 onClick ={ChatRoomListLink}>💬</Menu1>
            <Menu1 onClick ={SettingLink}>⚙︎</Menu1>
        </Menu>

   
);

}

export default React.memo(Menu);