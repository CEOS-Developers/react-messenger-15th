import useInput from "hooks/useInput";
import React from "react";
import styled from "styled-components";

const InputMessageForm = () => {
  const { text, handleTextChange, resetText } = useInput("");

  const _addInputMessage = (e: React.FormEvent): void => {
    e.preventDefault();

    if (!text.trim()) alert("메시지를 입력해주세요");

    resetText();
  };

  return (
    <InputForm onSubmit={_addInputMessage}>
      <Input
        placeholder="메시지를 입력하세요"
        value={text}
        onChange={handleTextChange}
      />
      <InputButton>+</InputButton>
    </InputForm>
  );
};

const InputForm = styled.form`
  height: 50px;
  border-top: 1px solid lightgrey;
`;
const Input = styled.input`
  border: 1px solid lightgrey;
  border-radius: 10px;
  padding: 12px;
  width: 230px;
  :focus {
    outline: none;
  }
`;
const InputButton = styled.button`
  font-weight: bold;
  background: none;
  border: none;
  font-size: 30px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 30px;
  :hover {
    color: grey;
    transition: 0.2s;
  }
`;

export default InputMessageForm;
