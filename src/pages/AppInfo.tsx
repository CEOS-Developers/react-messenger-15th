import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 90vw;
  max-width: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MenuDiv = styled.div`
  width: 80%;
  height: 3rem;
  border-radius: 3rem;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  margin: 0.8rem 0 0.8rem 0;
  padding-left: 2rem;
  align-items: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 20px rgba(230, 230, 230, 1);
  }
`
const TextDiv = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 3rem;
  padding: 0.3rem 1rem 0.3rem 1rem;
  text-transform: lowercase;
  color: rgb(130, 130, 130);
  font-size: 1rem;
  box-shadow: 0px 5px 10px rgba(230, 230, 230, 0.3);
`

const menuItems = ["Profile", "Privacy", "General", "Payments", "Notifications"]

function AppInfo() {
  return (
    <Wrapper>
      {menuItems.map((item)=><MenuDiv><TextDiv>{item}</TextDiv></MenuDiv>)}
    </Wrapper>
  )
}

export default AppInfo