import styled from "styled-components";
import React from "react";
import { IEmoticonPopover } from "interface";

const emoticonList = ["❤️", "😄", "👍", "✨", "🖐"];

const EmoticonPopover = ({
  addEmoticonMessage,
  handlePopover,
}: IEmoticonPopover) => {
  // 이모티콘 전송
  const _handleClick = (e: React.MouseEvent): void => {
    const target = e.target as HTMLElement;
    addEmoticonMessage(target.innerText);
  };

  return (
    <PopoverContainer onMouseLeave={handlePopover}>
      {emoticonList.map((emo, idx) => (
        <EmoticonBox key={idx} onClick={_handleClick}>
          {emo}
        </EmoticonBox>
      ))}
    </PopoverContainer>
  );
};

const PopoverContainer = styled.section`
  position: absolute;
  transform: translate(0, -120%);
  background-color: #f1f1f3;
  display: flex;
  padding: 0.6rem;
  border-radius: 0.5rem;
  :before {
    border-color: #f1f1f3 transparent;
    border-style: solid;
    border-width: 0.5rem 0.5rem 0 0.5rem;
    content: "";
    display: block;
    left: 1.15rem;
    position: absolute;
    bottom: -0.5rem;
  }
`;
const EmoticonBox = styled.section`
  cursor: pointer;
  & + & {
    margin-left: 0.7rem;
  }
`;

export default EmoticonPopover;
