import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { FiMessageCircle, FiInfo, FiSmile } from "react-icons/fi";

const Container = styled.div`
  display: flex;
  width: 5rem;
  margin-right: 1rem;
  flex: 1;
`

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.5rem 1rem 0.5rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 3rem;
`

const Button = styled.button`
  border-radius: 3rem;
  border: none;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0.3rem 1rem 0.1rem rgba(255, 255, 255, 0.1);
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px rgba(255, 255, 255, 1);
    background-color: rgba(255, 255, 255, 1);
  }
`

const ButtonIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: rgba(200, 200, 200, 1);
`

function SideButtonContainer() {
  const navigate = useNavigate();

  return (
    <Container>
      <ButtonDiv>
        <Button onClick={()=>{navigate("/chats")}}><ButtonIcon><FiMessageCircle/></ButtonIcon></Button>
        <Button onClick={()=>{navigate("/friends")}}><ButtonIcon><FiSmile/></ButtonIcon></Button>
        <Button onClick={()=>{navigate("/info")}}><ButtonIcon><FiInfo/></ButtonIcon></Button>
      </ButtonDiv>
    </Container>
  )
}

export default SideButtonContainer