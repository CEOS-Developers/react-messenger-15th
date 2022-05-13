import styled from "styled-components";
import {Header} from "../List/BasicListDesign";
function Setting(){

    const SettingMenu = styled.div
    `
    text-align:left;
    margin:1.6rem;
    margin-bottom :0rem;
    font-size : 1.0rem;
    align-self:stretch;
    cursor : pointer;
    `;

    const settingMenus = ["프로필💕", "뮤직💓", "게임💖","깃허브🥰"];
    const settingMenuList = settingMenus.map((settingMenus) => (<SettingMenu>{settingMenus}</SettingMenu>));

    return(
        <div id ="Wrapper">
            <Header>설정</Header>
            {settingMenuList}
        </div>
       
        
    );
}
export default Setting;