import useInput from "hooks/useInput";
import React from "react";
import styled from "styled-components";
import InputEmoticon from "./InputEmoticon";

const InputMessageForm = () => {
  const { text, handleTextChange, resetText } = useInput("");

  const _addInputMessage = (e: React.FormEvent): void => {
    e.preventDefault();

    if (!text.trim()) alert("메시지를 입력해주세요");

    resetText();
  };

  const addEmoticonMessage = (emo: string): void => {
    resetText();
  };

  return (
    <InputForm onSubmit={_addInputMessage}>
      <InputEmoticon addEmoticonMessage={addEmoticonMessage} />
      <Input
        placeholder="메시지를 입력하세요"
        value={text}
        onChange={handleTextChange}
      />
      <InputButton>
        <img alt="send" src="send.png" width={20} />
      </InputButton>
    </InputForm>
  );
};

const InputForm = styled.form`
  height: 50px;
  border-top: 1px solid lightgrey;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  border: 1px solid lightgrey;
  border-radius: 10px;
  padding: 12px;
  width: 230px;
  height: 15px;
  :focus {
    outline: none;
  }
`;
const InputButton = styled.button`
  font-weight: bold;
  background: none;
  border: none;
  margin-left: 10px;
  cursor: pointer;
`;

export default InputMessageForm;
