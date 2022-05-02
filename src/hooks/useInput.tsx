import { useState } from "react";

const useInput = (initialValue: string) => {
  const [text, setText] = useState(initialValue);

  // input text 변경
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  // 입력값 초기화
  const resetText = (): void => {
    setText("");
  };

  return { text, handleTextChange, resetText };
};

export default useInput;
