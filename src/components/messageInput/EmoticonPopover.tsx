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
  padding: 10px;
  border-radius: 10px;
  :before {
    border-color: #f1f1f3 transparent;
    border-style: solid;
    border-width: 8px 6px 0 6.5px;
    content: "";
    display: block;
    left: 20px;
    position: absolute;
    bottom: -8px;
  }
`;
const EmoticonBox = styled.section`
  cursor: pointer;
  & + & {
    margin-left: 10px;
  }
`;

export default EmoticonPopover;
