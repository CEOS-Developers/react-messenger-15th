import { ResponsiveSizeContext } from "contexts/ResponsiveContext";
import { useContext } from "react";

const useMessage = () => {
  const { isMobile, dispatch } = useContext(ResponsiveSizeContext);

  // isMobile 설정
  const setIsMobile = (isMobile: boolean): void => {
    dispatch({
      type: "RESIZE",
      isMobile,
    });
  };

  return { isMobile, setIsMobile };
};

export default useMessage;
