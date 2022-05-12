import styled from "styled-components";
import {Header} from "./BasicListDesign";
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
    return(
        <div id ="Wrapper">
            <Header>설정</Header>
            <SettingMenu>프로필💕</SettingMenu>
            <SettingMenu>뮤직💓</SettingMenu>
            <SettingMenu>게임💖</SettingMenu>
            <SettingMenu>깃허브🥰</SettingMenu>
        </div>
       
        
    );
}
export default Setting;