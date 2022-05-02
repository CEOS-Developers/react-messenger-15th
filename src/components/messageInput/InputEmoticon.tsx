import { IInputEmoticon } from "interface";
import EmoticonPopover from "./EmoticonPopover";
import styled from "styled-components";
import { useState } from "react";

const InputEmoticon = ({ addEmoticonMessage }: IInputEmoticon) => {
  const [visiblePopover, setVisiblePopover] = useState(false);

  const popoverEmoticon = (): void => {
    setVisiblePopover(!visiblePopover);
  };

  return (
    <section>
      {visiblePopover && (
        <EmoticonPopover addEmoticonMessage={addEmoticonMessage} />
      )}
      <Emoticon onMouseOver={popoverEmoticon}>❤️</Emoticon>
    </section>
  );
};

const Emoticon = styled.div`
  width: 35px;
  margin-left: 15px;
  cursor: pointer;
`;

export default InputEmoticon;
