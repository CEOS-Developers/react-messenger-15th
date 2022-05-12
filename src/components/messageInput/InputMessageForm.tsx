import useInput from "hooks/useInput";
import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { resizeState } from "recoil/recoil";
import InputEmoticon from "./InputEmoticon";
import { IInputMessageForm } from "interface";
import Alert from "components/common/Alert";

const InputMessageForm = ({ sendMessage }: IInputMessageForm) => {
  const { text, handleTextChange, resetText } = useInput("");
  const isMobile = useRecoilValue(resizeState);
  const [visibleAlert, setVisibleAlert] = useState(false);

  // 메시지 전송
  const _addInputMessage = (e: React.FormEvent): void => {
    e.preventDefault();

    if (!text.trim()) setVisibleAlert(true);
    else {
      sendMessage(text);
    }
    resetText();
  };

  // 이모티콘 전송
  const addEmoticonMessage = useCallback(
    (emo: string): void => {
      sendMessage(emo);
      resetText();
    },
    [sendMessage],
  );

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
        isMobile={isMobile}
      />
      <InputButton>
        <img alt="send" src="/images/send.png" width={20} />
      </InputButton>
    </InputForm>
  );
};

const InputForm = styled.form`
  border-top: 0.05rem solid lightgrey;
  display: flex;
  align-items: center;
  padding-top: 1rem;
`;
const InputText = styled.input<{ isMobile: boolean }>`
  border: 0.05rem solid lightgrey;
  border-radius: 0.7rem;
  padding: 0.7rem;
  width: ${({ isMobile }) => (isMobile ? "78%" : "230px")};
  height: 1rem;
  font-size: 0.75rem;
  :focus {
    outline: none;
  }
`;
const InputButton = styled.button`
  background: none;
  border: none;
  margin-left: 0.7rem;
  cursor: pointer;
  padding-top: 0.5rem;
  :hover {
    opacity: 0.7;
    transition: 0.15s;
  }
`;

export default InputMessageForm;
