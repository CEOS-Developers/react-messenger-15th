import React, {useState} from 'react'
import styled from 'styled-components'

import FriendsContainer from '../containers/FriendsContainer'

const Wrapper = styled.div`
  width: 90vw;
  max-width: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  height: 3rem;
  width: 80%;
  border-radius: 4rem;
  border-color: transparent;
  padding-left: 1.2rem;
  font-size: 1rem;
  margin-bottom: 2rem;
  outline: none;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 1);
  &:hover {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
  }
`

function FriendList() {
  const [query, setQuery] = useState("");

  return (
    <Wrapper>
      <Input type="text" id="messageInput" placeholder="찾고 싶은 사람을 입력하세요" onChange={(e)=>setQuery(e.target.value)} value={query}/>
      <FriendsContainer query={query}/>
    </Wrapper>
  )
}

export default FriendList