import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import SquareButton from '../Atom/SquareButton';

const IconTextSet = ( ) => {

    const onUserClick = ( e : React.FormEvent ): void => {
        
    }
    const onMessageClick = ( e : React.FormEvent ): void => {
        
    }
    const onSettingClick = ( e : React.FormEvent ): void => {
        
    }

    return <IconWrapper>
        <IconAlign>
            <Link to="/Userlist">
                <SquareButton key ={'user'} onclick={onUserClick}></SquareButton>
            </Link>
        </IconAlign>
        <IconAlign>
            <Link to="/">
                <SquareButton key ={'message'} onclick={onMessageClick}></SquareButton>
            </Link>
        </IconAlign>
        <Link to="/Setting">
            <SquareButton key ={'setting'} onclick={onSettingClick}></SquareButton>
        </Link>
    </IconWrapper>
}

const IconWrapper = styled.div`
    height: 100%;
    margin: 20px 20px 20px 20px;
    padding : 0px 0px 20px 0px;
    display : flex;
    flex-direction : column;
    font-family: sans-serif;
    align-items: center;
    justify-content: left;
    background: #FCFCFC;
    border-radius: 24px;
`;

const IconAlign = styled.div`
    margin: 0px 20px 20px 20px;
`;

export default IconTextSet;