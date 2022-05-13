import React from "react";
import styled from 'styled-components';

import SquareImage from '../Atom/SquareImage';

type Userprofileprops = {
    id : string
}

const Userprofile = ( { id } : Userprofileprops ) => {
    return <UserprofileWrapper>
        <SquareImage id={id}/>
        <ProfileTextWrapper>
            <UserName></UserName> //map으로 id 검색 후 name 
            <UserComment></UserComment> //map으로 id 검색 후 text
        </ProfileTextWrapper>
    </UserprofileWrapper>
}

const UserprofileWrapper = styled.div`
    display: flex;
    align-items: left;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: auto 24px;
`;

const ProfileTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align : left;
    align-self: stretch;
    flex-grow: 0;
    padding : 10px;
`;

const UserName = styled.span`
font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #000000;
`;

const UserComment = styled.span`
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #999999;
`;

export default Userprofile;