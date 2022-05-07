import React, {useEffect} from 'react'
import { useAppSelector, useAppDispatch } from '../hooks'
import { Message } from '../state/types'
import styled from 'styled-components'

const Container = styled.div`
  width: 90vw;
  margin-top: 15vh;
  padding: 5vh 0 5vh 0;
  height: 75vh;
  z-index: 0;
  max-width: 45rem;
  position: absolute;
  overflow: scroll;
  &::-webkit-scrollbar {
    display:none;
  }
`

const MessageDiv = styled.div<{selected: boolean}>`
  width: 100%;
  display: flex;
  flex-direction: ${(props)=>(props.selected? "row-reverse":"row")};
  padding: 0.5rem 1rem 0.5rem 1rem;

`

const MessageProfileImg = styled.img`
  width: 3rem;
  height: 3rem;
`
const MessageContentDiv = styled.div`
  width: 100%;
  margin-left: 1rem;
  margin-right: 1rem;
`
const Name = styled.p<{selected: boolean}>`
  font-size: 0.8rem;
  text-align: ${(props)=>(props.selected? "right":"left")};
`

const MessageHolderDiv = styled.div<{selected: boolean}>`
  width: 100%;
  display: flex;
  flex-direction: ${(props)=>(props.selected? "row-reverse":"row")};
  align-items: flex-end;
`

const MessageBubbleDiv = styled.div<{selected: boolean}>`
  max-width: calc(100% - 4rem);
  height: 100%;
  background-color: ${(props)=>(props.selected? "#e07800":"#cbf542")};
  border-radius: 1rem;
  padding: 0.8rem;
  margin-top: 0.2rem;
  color: ${(props)=>(props.selected? "white":"black")};
  word-wrap: break-word;
`

const Time = styled.p`
  font-size: 0.6rem;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
`

const MessageBubbleComponent = ({msg, timeString, selected}: {msg:Message, timeString:string, selected:boolean}) => {
  return(
    <MessageDiv key = {msg.msgId} selected={selected}>
      <MessageProfileImg src={msg.client.imageUrl}/>
      <MessageContentDiv>
        <Name selected={selected}>{msg.client.name}</Name>
        <MessageHolderDiv selected={selected}>
          <MessageBubbleDiv selected={selected}><p>{msg.content}</p></MessageBubbleDiv>
          <Time>{timeString}</Time>
        </MessageHolderDiv>
      </MessageContentDiv>
    </MessageDiv>
  )
}

function MessageContainer() {

  const messages = useAppSelector((state)=> state.message.messages);
  const {clients, currentClient} = useAppSelector((state)=>state.client);
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(
    ()=>{
      if(containerRef.current){
        containerRef.current.scrollTop =  containerRef.current.scrollHeight
      }
    }
  );

  return (
    <Container ref={containerRef}>
      {messages.map((message: Message)=>{
        const date: Date = new Date(message.time);
        const hourString: string = date.getHours().toString() 
        const minString: string = date.getMinutes().toString()
        const timeString: string = (hourString.length == 2? hourString : "0" + hourString) + ": " + (minString.length == 2? minString : "0" + minString)
        const selected: boolean = message.client.clientId === currentClient?.clientId;
        
        return(
          <MessageBubbleComponent msg={message} timeString={timeString} selected={selected}/>
        )
      })}
    </Container>
  )
}

export default MessageContainer