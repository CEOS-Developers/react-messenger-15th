import React from "react";
import styled from 'styled-components';

import SquareImage from '../Atom/SquareImage';

type Userprofileprops = {
    id : string
    maintext : string
    subtext : string
}

const Userprofile = ( { id, maintext, subtext } : Userprofileprops ) => {
    return <UserprofileWrapper>
    <SquareImage id={id}/>
        <ProfileTextWrapper>
            <UserName>{maintext}</UserName>
            <UserComment>{subtext}</UserComment> 
        </ProfileTextWrapper>
        </UserprofileWrapper>
}

const UserprofileWrapper = styled.button`
    display: flex;
    flex-direction : row;
    align-items : space-evenly;
    justify-content : left;
    margin : 36px 0px 0px 0px;
    border : none;
    padding : 0px;
    background-color : rgba(0,0,0,0);
    text-decoration-line : none;
`;

const ProfileTextWrapper = styled.span`
    display: div;
    text-decoration : none;
`;

const UserName = styled.div`
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #000000;
    padding : 2px;
    text-align : left;
    text-decoration : none;
`;

const UserComment = styled.div`
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #999999;
    padding : 2px;
    text-align : left;
    text-decoration : none;
`;

export default Userprofile;