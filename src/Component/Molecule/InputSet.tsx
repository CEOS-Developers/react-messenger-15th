import React from "react";
import styled from 'styled-components';

import InputField from '../Atom/InputField';
import SquareButton from '../Atom/SquareButton';

import useInput from '../../Hooks/useInput';

type InputSetprops = {
    value : string
    placeholder : string
    key : string;
    onclick( e : React.FormEvent ) : void
}

const Inputset = ( {value, placeholder, key, onclick} : InputSetprops ) => {
    const { input , onchange, resetInput } = useInput('');
    return 
    <InputWrapper>
        <InputField value={value} placeholder={placeholder} onchange={onchange}/>
        <SquareButton key ={key} onclick={onclick}></SquareButton>
    </InputWrapper>
}

const InputWrapper = styled.div`
    width: 100%;
    height: 12%;
    margin: auto;
    display : flex;
    flex-direction : row;
    font-family: sans-serif;
    align-items: center;
    justify-content: space-evenly;
    background: #FCFCFC;
    border-radius: 24px;
`;

export default Inputset;