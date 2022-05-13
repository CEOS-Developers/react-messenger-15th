import React, {useState} from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../hooks'

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
const FriendsContainer = styled.div`
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

function FriendList() {
  const [message, setMessage] = useState("");
  const {clients} = useAppSelector((state)=> state.client);

  return (
    <Wrapper>
      <Input type="text" id="messageInput" placeholder="찾고 싶은 사람을 입력하세요" onChange={(e)=>setMessage(e.target.value)} value={message}/>
      <FriendsContainer>
      {clients.map(client=>{
        if(client.name.includes(message)){
          return(
            <ProfileDiv>
              <ProfileButton onClick={()=>{
              }}><ProfileImage src={client.imageUrl} /></ProfileButton>
              <ProfileName>{client.name}</ProfileName>
            </ProfileDiv>
            )
        }
        })}
      </FriendsContainer>
    </Wrapper>
  )
}

export default FriendList