import { IInputEmoticon } from "interface";
import styled from "styled-components";

const InputEmoticon = ({ addEmoticonMessage }: IInputEmoticon) => {
  const _addEmoticon = (): void => {
    addEmoticonMessage("❤️");
  };

  return <Box onClick={_addEmoticon}>❤️</Box>;
};

const Box = styled.div`
  width: 35px;
  margin-left: 15px;
  :hover {
    cursor: pointer;
  }
`;

export default InputEmoticon;
