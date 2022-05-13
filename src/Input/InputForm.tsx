import {MessageItem} from "../type"
import React from "react";
import {useCallback} from "react";
import { Dispatch, SetStateAction} from "react";
import useInput from "../hook/useInput";
import {Input,MessageButton,Form,InputWrapper,Emojimerong} from "./InputformDesign";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { messageListState, userState } from "../recoil";

type InputProps = {
    messageList : MessageItem[];
    setMessageList : Dispatch<SetStateAction<MessageItem[]>>
  };

function Inputform ({messageList, setMessageList} : InputProps){

    const{message, onChange ,setMessage} = useInput();
    const currentUser = useRecoilValue(userState); //currentUser 불러오기
    
    //const messageList =useRecoilValue(messageListState);
    //const setMessageList = useSetRecoilState(messageListState);
  
    const submitEmoji = useCallback((event : React.SyntheticEvent) => {
      event.preventDefault();
        setMessageList(messageList => [...messageList,
        {
          roomId : currentUser,
          text: "😛",
          userId: currentUser,
        }]);  
        //입력받은 걸 배열에 넣음
  
      },[currentUser]);
    
      const submitInput = useCallback((event : React.SyntheticEvent) => {
        event.preventDefault();
        
         if (message) {
          setMessageList(messageList => [...messageList,
          {
            roomId : currentUser,
            text: message,
            userId: currentUser,
          }]);
          //입력받은 걸 배열에 넣음
  
        }
      
        else{
           alert("메시지를 입력하세요!");
        }
        
        setMessage("");
      },[message]);
      
      return(
        <Form onSubmit={submitInput} >
          <Emojimerong onClick={submitEmoji}>😛</Emojimerong>
          <Input
            onChange={onChange}
            value={message}
            type="text"
            placeholder="메시지를 입력하세요"
            autoFocus = {true}
            spellCheck="false"
            
          />
          <MessageButton onClick={submitInput}>보내기</MessageButton>
        </Form>
        );
  }
  
  
  export default React.memo(Inputform);