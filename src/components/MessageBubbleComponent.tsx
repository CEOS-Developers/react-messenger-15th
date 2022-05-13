import { Message, MessageType } from '../types'
import styled from 'styled-components'

const componentPadding = {
  [MessageType.BASE]: "0.5rem 1rem 0.5rem 1rem",
  [MessageType.HEAD]: "0.5rem 1rem 0rem 1rem",
  [MessageType.BODY]: "0rem 1rem 0rem 1rem",
  [MessageType.TAIL]: "0rem 1rem 0.5rem 1rem",
}

const bubbleRadiusSelected = {
  [MessageType.BASE]: "1rem",
  [MessageType.HEAD]: "1rem 1rem 0.3rem 1rem",
  [MessageType.BODY]: "1rem 0.3rem 0.3rem 1rem",
  [MessageType.TAIL]: "1rem 0.3rem 1rem 1rem",
}
const bubbleRadiusDeselected = {
  [MessageType.BASE]: "1rem",
  [MessageType.HEAD]: "1rem 1rem 1rem 0.3rem",
  [MessageType.BODY]: "0.3rem 1rem 1rem 0.3rem",
  [MessageType.TAIL]: "0.3rem 1rem 1rem 1rem",
}


const Component = styled.div<{selected: boolean, manner: MessageType}>`
  width: 100%;
  display: flex;
  flex-direction: ${({selected})=>(selected? "row-reverse":"row")};
  padding: ${({manner})=>componentPadding[manner]};
`
const MessageProfileImg = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: contain;
`
const MessageProfileDiv = styled.div`
  width: 3rem;
  height: 3rem;
`
const MessageContentDiv = styled.div`
  width: 30vw;
  max-width: 20rem;
  margin-left: 1rem;
  margin-right: 1rem
`
const Name = styled.p<{selected: boolean}>`
  font-size: 0.8rem;
  text-align: ${({selected})=>(selected? "right":"left")};
`

const MessageHolderDiv = styled.div<{selected: boolean}>`
  width: 100%;
  display: flex;
  flex-direction: ${({selected})=>(selected? "row-reverse":"row")};
  align-items: flex-end;
`

const MessageBubbleDiv = styled.div<{selected: boolean, manner: MessageType}>`
  max-width: calc(100% - 4rem);
  height: 100%;
  background-color: ${({selected})=>(selected? "#e07800":"#cbf542")};
  border-radius: ${({selected, manner})=>(selected? bubbleRadiusSelected[manner]:bubbleRadiusDeselected[manner])};
  padding: 0.8rem;
  margin-top: 0.2rem;
  color: ${({selected})=>(selected? "white":"black")};
  word-wrap: break-word;
`
const Time = styled.p`
  font-size: 0.6rem;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
`

const MessageBubbleComponent = ({msg, timeString, selected, manner}: {msg:Message, timeString:string, selected:boolean, manner:MessageType}) => {
  
  return(
    <Component selected={selected} manner={manner}>
      <MessageProfileDiv>
      {manner === MessageType.BASE || manner === MessageType.HEAD? <MessageProfileImg src={msg.client.imageUrl}/> : "" }
      </MessageProfileDiv>
      <MessageContentDiv>
        {manner === MessageType.BASE || manner === MessageType.HEAD? <Name selected={selected}>{msg.client.name}</Name> : "" }
        <MessageHolderDiv selected={selected}>
          <MessageBubbleDiv selected={selected} manner={manner}><p>{msg.content}</p></MessageBubbleDiv>
          {manner === MessageType.BASE || manner === MessageType.TAIL? <Time>{timeString}</Time> : "" }
        </MessageHolderDiv>
      </MessageContentDiv>
    </Component>
  )
}

export default MessageBubbleComponent;