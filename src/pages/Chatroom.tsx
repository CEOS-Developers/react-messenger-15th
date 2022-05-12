import React from 'react'
import styled from 'styled-components'
import InputContainer from '../containers/InputContainer'
import MessageContainer from '../containers/MessageContainer'
import ProfileContainer from '../containers/ProfileContainer'

function Chatroom() {
  return (
    <>
      <ProfileContainer/>
      <MessageContainer/>
      <InputContainer/>
    </>
  )
}
export default Chatroom
