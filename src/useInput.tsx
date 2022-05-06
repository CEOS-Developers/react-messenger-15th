import {useState,useCallback} from "react";

const useInput = () => {
    const [message, setMessage] = useState<string>("");
  
    const onChange = useCallback((event : React.ChangeEvent<HTMLInputElement>) => {setMessage(event.target.value)},[]);
  
    return { message, onChange, setMessage };
  };
  
  export default useInput;