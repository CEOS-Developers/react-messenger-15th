import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useRecoilState } from 'recoil';
import { usersState } from '../State/Users'

import InputSet from '../Component/Molecule/InputSet';
import Userprofile from "../Component/Molecule/Userprofile";


const Userlist = () => {
    const [users , setUsers] = useRecoilState(usersState); 
    const filteredUserList = users.filter(user => user.id != '0');
    const userList = filteredUserList.map((user) => (<StyledLink to ={`/Room${user.id}`}><Userprofile id={user.profileLink} maintext={user.profileName} subtext={user.profileText}></Userprofile></StyledLink>));

    const onclick = ( e : React.FormEvent ): void => {
        
    }

    return (
    <PageWrapper>
        <PageName>친구</PageName>
        <InputSet placeholder={'검색할 이름을 입력해 주세요.'} key={'search'} onclick={onclick}></InputSet>
        <UserListWrapper>
            {userList}
        </UserListWrapper>
    </PageWrapper>
    );
};

const PageName = styled.div`
    width: 100%;
    font-weight : 700;
    font-size : 20px;
`;

const StyledLink = styled(Link)`
    width: 100%;
    height: 100%;
    text-decoration: none;
`;

const PageWrapper = styled.div`
    width : 100%;
    height: 100%;
    margin: 20px 20px 20px 20px;
    flex-direction : column;
    font-family: sans-serif;
    align-items: left;
    background: #FFFFFF;
    border-radius: 24px;
`;

const UserListWrapper = styled.div` 
    display : flex;
    flex-direction : column;
    font-family: sans-serif;
    align-items: left;
    justify-content : center;
    background: #FFFFFF;
`;

export default Userlist;