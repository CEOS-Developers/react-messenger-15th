import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../hooks'
import { setActiveClient } from '../state/chatSlice'

const Container = styled.div`
  width: 50vw;
  height: 8rem;
  max-width: 35rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 3vh;
  z-index: 1;
`

const ProfileDiv = styled.div`
  width: 5em;
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 1rem;
  margin-right: 1rem;
  & p{
    font-size: 0.8rem;
  }
`

const ProfileName = styled.p<{selected: boolean}>`
  border-radius: 0.4rem;
  background-color: rgba(255, 255, 255, ${({selected})=>(selected? "1":"0")});
  color: ${({selected})=>(selected? "rgba(150, 150, 150, 1)":"rgba(255, 255, 255, 1)")};
  margin-top: 0.6rem;
  padding: 0 1rem 0 1rem;
  text-align: center;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, ${({selected})=>(selected? "1":"0")});
  text-shadow: 0px 0px 10px rgba(255, 255, 255, ${({selected})=>(selected? "0":"1")});
`

const ProfileButton = styled.button<{selected: boolean}>`
  width: 6rem;
  height: 6rem;
  border-radius: 3rem;
  position: relative;
  border: transparent;
  cursor: pointer;
  background-color: rgba(255, 255, 255, ${({selected})=>(selected? "1":"0")});
  z-index: 1;
  font-size: 4rem;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, ${({selected})=>(selected? "1":"0")});
  &:hover{
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
`
const ProfileImage = styled.img`
  width: 80%;
  height: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

function ProfileContainer() {
  const {clients, activeClient} = useAppSelector((state)=> state.chat.chats[state.chat.acidx!])
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <ProfileDiv>
        <ProfileButton selected={false} onClick={()=>{
          navigate(-1);
        }}>🫲🏻</ProfileButton>
        <ProfileName selected={false}>{"뒤로가기"}</ProfileName>
      </ProfileDiv>
      {clients.map(client=>{
        const selected = client.id === activeClient?.id? true : false
        return(
          <ProfileDiv key={client.id}>
          <ProfileButton selected={selected} onClick={()=>{
            dispatch(setActiveClient(client))
          }}><ProfileImage src={client.imageUrl} /></ProfileButton>
          <ProfileName selected={selected}>{client.name}</ProfileName>
        </ProfileDiv>
        )
      })}
    </Container>
  )
}

export default ProfileContainer