import { useState } from 'react';

const useInput = (initialText : string) => {
    const [input, setInput] = useState(initialText);

    const onchange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInput(e.target.value);
    };

    const resetInput = (): void => {
        setInput('');
    };

    return { input , onchange, resetInput };
};

export default useInput;
