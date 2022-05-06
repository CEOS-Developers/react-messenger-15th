import {MessageItem} from "./type"
import React from "react";
import {useCallback} from "react";
import { Dispatch, SetStateAction} from "react";

type InputProps = {
    changeUser  :number;
    messageList : MessageItem[];
    setMessageList : Dispatch<SetStateAction<MessageItem[]>>
  };

function Inputform ({changeUser, messageList, setMessageList} : InputProps){

    const{message, onChange ,setMessage} = useInput();
  
    const submitEmoji = useCallback((event : React.SyntheticEvent) => {
      event.preventDefault();
        setMessageList(messageList => [...messageList,
        {
          text: "😛",
          userId: changeUser,
        }]);  
        //입력받은 걸 배열에 넣음
  
      },[]);
    
      const submitInput = useCallback((event : React.SyntheticEvent) => {
        event.preventDefault();
        
         if (message) {
          setMessageList(messageList => [...messageList,
          {
            text: message,
            userId: changeUser,
          }]);
          //입력받은 걸 배열에 넣음
  
        }
      
        else{
           alert("메시지를 입력하세요!");
        }
        
        setMessage("");
      },[message]);