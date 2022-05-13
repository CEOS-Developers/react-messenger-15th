import React from 'react'
import styled from 'styled-components'
import InputContainer from '../containers/InputContainer'
import MessageContainer from '../containers/MessageContainer'
import ProfileContainer from '../containers/ProfileContainer'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: space-between;
  height: 100vh;
`

function Chatroom() {
  return (
    <Wrapper>
      <ProfileContainer/>
      <MessageContainer/>
      <InputContainer/>
    </Wrapper>
  )
}
export default Chatroom
