import { useState } from 'react';

const useInput = (initialText: string) => {
  const [inputText, setInputText] = useState(initialText);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(e.target.value);
  };

  const reset = (): void => {
    setInputText('');
  };

  return { inputText, handleInputChange, reset };
};

export default useInput;
