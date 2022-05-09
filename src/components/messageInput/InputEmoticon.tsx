import { IInputEmoticon } from "interface";
import EmoticonPopover from "./EmoticonPopover";
import styled from "styled-components";
import React, { useState } from "react";

const InputEmoticon = ({ addEmoticonMessage }: IInputEmoticon) => {
  const [visiblePopover, setVisiblePopover] = useState(false);

  const handlePopover = (): void => {
    setVisiblePopover(!visiblePopover);
  };

  return (
    <section>
      {visiblePopover && (
        <EmoticonPopover
          addEmoticonMessage={addEmoticonMessage}
          handlePopover={handlePopover}
        />
      )}
      <Emoticon onMouseEnter={handlePopover}>❤️</Emoticon>
    </section>
  );
};

const Emoticon = styled.section`
  width: 2rem;
  margin-left: 1rem;
  cursor: pointer;
`;

export default React.memo(InputEmoticon);
