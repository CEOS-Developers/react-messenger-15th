import React from "react";
import styled from 'styled-components';
import useInput from '../Hooks/useInput';

// useMessageState

const InputBox = ( ) => {

    return <>
        <InputArea>
        </InputArea></>
}

const InputArea = styled.div`
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


export default InputBox;