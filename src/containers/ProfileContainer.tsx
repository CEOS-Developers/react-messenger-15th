import React from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../hooks'
import { setClient } from '../state/clientSlice'

const Container = styled.div`
  width: 50vw;
  height: 8rem;
  max-width: 30rem;
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
  background-color: rgba(255, 255, 255, ${(props)=>(props.selected? "1":"0")});
  color: rgba(150, 150, 150, 1);
  margin-top: 0.6rem;
  padding: 0 1rem 0 1rem;
  text-align: center;
`

const ProfileButton = styled.button<{selected: boolean}>`
  width: 6rem;
  height: 6rem;
  border-radius: 3rem;
  position: relative;
  border: transparent;
  cursor: pointer;
  background-color: rgba(255, 255, 255, ${(props)=>(props.selected? "0.5":"0")});
  z-index: 1;
`
const ProfileIamge = styled.img`
  border-radius: inherit;
  width: 80%;
  height: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

function ProfileContainer() {
  const {clients, currentClient} = useAppSelector((state)=> state.client)
  const dispatch = useAppDispatch();

  return (
    <Container>
      {clients.map(client=>{
        const selected = client.clientId === currentClient?.clientId? true : false
        return(
          <ProfileDiv>
          <ProfileButton selected={selected} onClick={()=>{
            dispatch(setClient(client))
          }}><ProfileIamge src={client.imageUrl} /></ProfileButton>
          <ProfileName selected={selected}>{client.name}</ProfileName>
        </ProfileDiv>
        )
      })}
    </Container>
  )
}

export default ProfileContainer