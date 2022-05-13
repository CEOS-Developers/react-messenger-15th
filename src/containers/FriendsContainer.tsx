import React from 'react'
import styled from 'styled-components' 
import { useNavigate } from 'react-router-dom'
import {v4 as uuidv4} from "uuid";

import { useAppDispatch, useAppSelector } from '../hooks'
import { addChat, setActiveChat, setActiveClient } from '../state/chatSlice'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
  padding: 1rem;
  overflow: scroll;
  height: 60vh;
  &::-webkit-scrollbar {
    display:none;
  }
`

const ProfileDiv = styled.div`
  width: 8rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 2rem;
  & p{
    font-size: 0.8rem;
  }
  &:hover{
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
`

const ProfileName = styled.p`
  border-radius: 3rem;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(150, 150, 150, 1);
  margin: 1rem 0 1rem 0;
  padding: 0.2rem 1rem 0.2rem 1rem;
  text-align: center;
  box-shadow: 0px 5px 10px rgba(230, 230, 230, 0.3)
`

const ProfileButton = styled.button`
  width: 6rem;
  height: 6rem;
  border-radius: 0;
  border: transparent;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0);
  z-index: 1;
  font-size: 4rem;
  overflow: visible;
`
const ProfileImage = styled.img`
  width: 6rem;
  height: 6rem;
  display: block;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
`

function FriendsContainer({query}:{query: string}) {
  const {clients} = useAppSelector((state)=> state.client);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Container>
    {clients.map(client=>{
      if(client.name.includes(query) && client.id !== clients[0].id){
        return(
          <ProfileDiv key={client.id}>
            <ProfileButton onClick={()=>{
              const id = uuidv4();
              dispatch(addChat({
                chatId: id,
                activeClient: clients[0],
                clients: [clients[0], client],
                messages: [],
              }));
              dispatch(setActiveChat(id));
              dispatch(setActiveClient(clients[0]));
              navigate(`/chats/${id}`);
            }}>
              <ProfileImage src={client.imageUrl}/>
            </ProfileButton>
            <ProfileName>{client.name}</ProfileName>
          </ProfileDiv>
          )
      }
      })}
    </Container>
  )
}

export default FriendsContainer