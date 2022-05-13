import React from "react";
import styled from 'styled-components';

import InputField from '../Atom/InputField';
import SquareButton from '../Atom/SquareButton';

import useInput from '../../Hooks/useInput';

type InputSetprops = {
    placeholder : string
    key : string;
    onclick( e : React.FormEvent ) : void
}

const Inputset = ( {placeholder, key, onclick} : InputSetprops ) => {
    const { input , onchange, resetInput } = useInput('');
    return <InputWrapper>
        <InputField value={input} placeholder={placeholder} onchange={onchange}/>
        <SquareButton key ={key} onclick={onclick}></SquareButton>
    </InputWrapper>
}

const InputWrapper = styled.div`
    width: calc(100%-60px);
    height: 40px;
    padding: 20px 20px 0px 0px;
    display : flex;
    flex-direction : row;
    font-family: sans-serif;
    align-items: center;
    justify-content: space-between;
    background: #FCFCFC;
    border-radius: 24px;
`;

export default Inputset;