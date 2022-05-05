import React, {useState} from 'react'
import {v4 as uuidv4} from "uuid";
import { useAppSelector, useAppDispatch } from '../hooks';
import { addMessage } from '../state/slices';

function InputContainer() {
  const [message, setMessage] = useState("");
  const dispatch = useAppDispatch();

  const submitHandler = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if(message != ""){

      dispatch(addMessage({
        msgId: uuidv4(),
        ownerId: 0,
        content: message,
        time: new Date().toString(),
      }));

      setMessage("");
    }
  }

  return (
    <>
      <div>InputContainer</div>
      <form onSubmit={(e)=>submitHandler(e)}>
        <input type="text" id="messageInput" placeholder="죽을만큼 사랑해" onChange={(e)=>setMessage(e.target.value)} value={message}/>
        <button type="submit"><p>submit</p></button>
      </form>
    </>
    
  )
}

export default InputContainer