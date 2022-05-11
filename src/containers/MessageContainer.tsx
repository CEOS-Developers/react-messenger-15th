import React, { useEffect } from 'react'
import styled from 'styled-components'

import { useAppSelector } from '../hooks'
import { Message } from "../types"
import MessageBubbleComponent from '../components/MessageBubbleComponent'

const Container = styled.div`
  width: 90vw;
  margin-top: 20vh;
  height: 65vh;
  z-index: 0;
  max-width: 45rem;
  position: absolute;
  overflow: scroll;
  &::-webkit-scrollbar {
    display:none;
  }
`

function MessageContainer() {

  const messages = useAppSelector((state)=> state.message.messages);
  const {currentClient} = useAppSelector((state)=>state.client);
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(
    ()=>{
      containerRef.current!.scrollTop =  containerRef.current!.scrollHeight
    }
  );

  return (
    <Container ref={containerRef}>
      {messages.map((message: Message)=>{
        const timeString: string = message.timeString;
        const selected: boolean = message.client.clientId === currentClient?.clientId;
        return <MessageBubbleComponent key={message.msgId} msg={message} timeString={timeString} selected={selected} manner={message.messageType}/>
      })}
    </Container>
  )
}

export default MessageContainer