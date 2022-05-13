import {useState,useCallback} from "react";
import {useRecoilState} from "recoil";
import { messageState } from "../recoil";

const useInput = () => {
    const [message, setMessage] = useRecoilState(messageState);
  
    const onChange = useCallback((event : React.ChangeEvent<HTMLInputElement>) => {setMessage(event.target.value)},[]);
  
    return { message, onChange, setMessage };
  };
  
  export default useInput;