import { useCallback } from 'react';
import { initialText } from '../components/recoilState';
import { useRecoilState } from 'recoil';

const useInput = () => {
  const [inputText, setInputText] = useRecoilState<string>(initialText);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setInputText(e.target.value);
    },
    []
  );

  const reset = (): void => {
    setInputText('');
  };

  return { inputText, handleInputChange, reset };
};

export default useInput;
