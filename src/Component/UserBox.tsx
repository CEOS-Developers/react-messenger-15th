import React from "react";
import styled from 'styled-components';
import { useMessageState, useMessageDispatch } from '../Context/MessageContext';


const UserBox = ( ) => {
    //const state = useMessageState();
    //const dispatch = useMessageDispatch();

    const onClick = ( e : React.FormEvent ): void => {
        e.preventDefault(); //여기에 current 유저 토글기능 넣기
    }

        return<>
        <UserField onClick={onClick}>
            <ProfileImg
                src={`../imgs/0.png`}
                />
            <UserName>{"Nick Wild"}</UserName>
        </UserField>
        </>    
};

const UserField = styled.button`
    width: 40%;
    height: 75%;    
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const UserName = styled.div`
    width: 100%;
    height: 50%;
    font-size: 16px;
    display: flex;
    align-items: center;
`;
        
        
const ProfileImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
        `;


export default UserBox;