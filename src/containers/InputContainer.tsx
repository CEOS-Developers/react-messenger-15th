import React, {useState} from 'react'
import {v4 as uuidv4} from "uuid";
import { useAppSelector, useAppDispatch } from '../hooks';
import { addMessage } from '../state/messageSlice';
import styled from 'styled-components';
import { Client, Message } from '../state/types';

const Container = styled.div`
  width: 90vw;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5vh;
  z-index: 1;
`

const Form = styled.form`
  width: 90vw;
  max-width: 45rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const Button = styled.button`
  width: 4rem;
  height: 4rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 4rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
    background-color: rgba(255, 255, 255, 0.8);
  }
  & p {
    font-size: 2.5rem;
    width: 3rem;
    text-align: center;
  }
`

const Input = styled.input`
  height: 4rem;
  width: 70%;
  border-radius: 4rem;
  border-color: transparent;
  padding-left: 1.2rem;
  outline: none;
    box-shadow: 0px 0px 20px rgba(255, 255, 255, 1);
  &:hover {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
  }
  font-size: 1rem;
`
function InputContainer() {
  const [message, setMessage] = useState("");
  
  const {clients, currentClient} = useAppSelector((state)=>state.client);
  const dispatch = useAppDispatch();

  const submitHandler = (message: string, e?:React.FormEvent<HTMLFormElement>) => {

    if(e) e.preventDefault();
    if(message !== "" && currentClient){

      dispatch(addMessage({
        msgId: uuidv4(),
        client: currentClient,
        content: message,
        time: new Date().toString(),
      }));

      setMessage("");
    }else if(message === ""){
      alert("enter the message")
    }else{
      alert("select the profile")
    }
  }

  return (
    <Container>
        <Form onSubmit={(e) => submitHandler(message, e)}>
        <Button type="button" onClick={()=>{
          submitHandler("❤️");
        }}><p>❤️</p></Button>
        <Input type="text" id="messageInput" placeholder="메시지를 입력하세요" onChange={(e)=>setMessage(e.target.value)} value={message}/>
        <Button type="submit"><p>💬</p></Button>
        </Form>
    </Container>
    
  )
}

export default InputContainer