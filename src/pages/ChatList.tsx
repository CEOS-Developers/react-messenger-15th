import React from 'react'
import styled from 'styled-components'

import { useAppSelector } from '../hooks'
import ChatButtonComponent from '../components/ChatButtonComponent'

const Wrapper = styled.div`
  width: 90vw;
  max-width: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function ChatList() {
  const chats = useAppSelector((state)=>state.chat.chats);

  return (
    <Wrapper>
      {chats.map(chat=>{
        return(
          <ChatButtonComponent key={chat.chatId} chat={chat}/>
        )
      })}
    </Wrapper>
  )
}

export default ChatList