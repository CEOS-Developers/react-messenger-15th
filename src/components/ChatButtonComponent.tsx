import React from 'react'
import styled from 'styled-components'

import { useAppDispatch, useAppSelector } from '../hooks'
import { useNavigate } from 'react-router-dom'
import { setActiveChat } from '../state/chatSlice'
import { Chat } from '../types'

const Component = styled.button`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-start;
  border-radius: 3rem;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 1rem 0 1rem 0;
  border: transparent;
  padding: 0 2rem 0.5rem 2rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 20px rgba(230, 230, 230, 1);
  }
`
const ProfileDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  height: 3rem;
  align-items: center;
`

const NameDiv = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 3rem;
  padding: 0.3rem 1rem 0.3rem 1rem;
  margin-left: 0.5rem;
  text-transform: lowercase;
  color: rgb(130, 130, 130);
  font-size: 1rem;
  box-shadow: 0px 5px 10px rgba(230, 230, 230, 0.3);
`
const MessageDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 1rem 0.3rem 1rem;
  text-transform: lowercase;
  color: rgb(130, 130, 130);
  font-size: 1.3rem;
  box-shadow: 0px 5px 10px rgba(230, 230, 230, 0.3);
`

const TimeP = styled.p`
  font-size: 1rem;
`

const ProfileImage = styled.img`
  position: relative;
  bottom: 1rem;
  width: 4rem;
  height: 4rem;
  object-fit: cover;
`

function ChatButtonComponent({chat}:{chat:Chat}) {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const clients = useAppSelector((state)=>state.client.clients);

  return (
    <Component onClick={()=>{
      dispatch(setActiveChat(chat.chatId));
      navigate(`/chats/${chat.chatId}`);
    }}>
      {chat.clients.map((client)=>{
        if(client.id !== clients[0].id)
          return(
            <ProfileDiv key={chat.chatId}>
              <ProfileImage src={client.imageUrl}/>
              <NameDiv>{client.name}</NameDiv>
            </ProfileDiv>
          )
      })}
      <MessageDiv>
        <>{chat.messages[chat.messages.length-1]? chat.messages[chat.messages.length-1].content : ""}</>
        <TimeP>{chat.messages[chat.messages.length-1]? chat.messages[chat.messages.length-1].timeString : ""}</TimeP>
      </MessageDiv>
    </Component>
  )
}

export default ChatButtonComponent