import React from "react";
import styled from 'styled-components';
//import { useMessageState, useMessageDispatch } from '../Context/MessageContext';


const UserBox = ( ) => {
    //const state = useMessageState();
    //const dispatch = useMessageDispatch();

    const onClick = ( e : React.FormEvent ): void => {
        e.preventDefault(); //여기에 current 유저 토글기능 넣기
    }

    return<>
        <UserField onClick={onClick}>
            <UserProfile>
                <ProfileImg/>
                <ProfileText>
                    <UserName>{"Nick Wilde"}</UserName>
                    <UserComment>{"Way to hustle, bud!"}</UserComment>
                </ProfileText>
            </UserProfile>
        </UserField>
    </>    
};

const UserField = styled.button`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    width: 100%;
    height: 12%;
    margin: auto;

    background: #FFFFFF;
    border-radius: 24px;
    border: none;
`;

const UserProfile = styled.div`
    display: flex;
    align-items: left;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: auto 24px;
`;

const ProfileText = styled.div`
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


const ProfileImg = styled.img`
    width : 40px;
    height : 40px;
    margin : auto;

    background: #567BFF;
    border-radius: 16px;
        `;




export default UserBox;