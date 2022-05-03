import useInput from "hooks/useInput";
import React, { useState } from "react";
import styled from "styled-components";
import useMessage from "hooks/useMessage";
import InputEmoticon from "./InputEmoticon";
import Alert from "components/Alert";

const InputMessageForm = () => {
  const { text, handleTextChange, resetText } = useInput("");
  const { addMessage } = useMessage();
  const [visibleAlert, setVisibleAlert] = useState(false);

  // 메시지 전송
  const _addInputMessage = (e: React.FormEvent): void => {
    e.preventDefault();

    if (!text.trim()) setVisibleAlert(true);
    else {
      addMessage(text);
    }
    resetText();
  };

  // 이모티콘 전송
  const addEmoticonMessage = (emo: string): void => {
    addMessage(emo);
    resetText();
  };

  return (
    <InputForm onSubmit={_addInputMessage}>
      {visibleAlert && (
        <Alert
          setVisibleAlert={setVisibleAlert}
          value="메시지를 입력해주세요"
        />
      )}
      <InputEmoticon addEmoticonMessage={addEmoticonMessage} />
      <InputText
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
  padding-top: 10px;
`;
const InputText = styled.input`
  border: 1px solid lightgrey;
  border-radius: 10px;
  padding: 12px;
  width: 230px;
  height: 15px;
  font-size: 12px;
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
  padding-top: 6px;
  :hover {
    opacity: 0.7;
    transition: 0.15s;
  }
`;

export default InputMessageForm;
