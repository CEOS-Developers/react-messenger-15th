import { useState } from 'react';



const useInput = (initialText : string) => {
    const [input, setInput] = useState<string>(initialText);
    function onInputChange(e : React.ChangeEvent<HTMLInputElement>) : void {
        setInput(e.target.value);
    };
    function resetInput() : void {
        setInput('');
    };

    return {input, onInputChange, resetInput};
};

export default useInput;
