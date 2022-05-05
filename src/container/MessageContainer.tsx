import React from 'react'
import { useAppSelector } from '../hooks'
import { Message } from '../state/types'

function MessageContainer() {

  const messages = useAppSelector((state)=> state.message.messages)

  return (
    <>
    <div>MessageContainer</div>
      {messages.map((message: Message)=>(
        <div><p>{message.content}</p></div>
      ))}
    </>
  )
}

export default MessageContainer