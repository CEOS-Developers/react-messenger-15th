import styled from "styled-components";
import { IInputEmoticon } from "interface";

const emoticonList = ["❤️", "😄", "👍", "✨", "🖐"];

const EmoticonPopover = ({ addEmoticonMessage }: IInputEmoticon) => {
  const _handleClick = (e: any): void => {
    addEmoticonMessage(e.target.innerText);
  };

  return (
    <PopoverContainer>
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
`;
const EmoticonBox = styled.section`
  cursor: pointer;
  & + & {
    margin-left: 10px;
  }
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

export default EmoticonPopover;
