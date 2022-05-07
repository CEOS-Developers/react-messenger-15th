import React from "react";
import styled from 'styled-components';
import { useMessageState, useMessageDispatch } from '../Context/MessageContext';
import useInput from '../Hooks/useInput';



const InputBox = ( ) => {
    //const state = useMessageState();
    const dispatch = useMessageDispatch();
    const { input , onInputChange, resetInput } = useInput('');

    const onSubmit = ( e : React.FormEvent ): void => {
        e.preventDefault();
        if (!input){
            alert('메세지를 입력하세요 !');
        }
        else if(dispatch) {
            dispatch({
                type: 'ADD'
            });
        }
        resetInput();
    }

    return <>
        <InputArea>
        <InputField
            value = { input }
            onChange = { onInputChange }
            placeholder = "메세지를 입력해 주세요."
        />
        <InsertBtn onClick={onSubmit}>
        +
        </InsertBtn>
        </InputArea></>
}

const InputArea = styled.div`
    font-family: sans-serif;
    text-align : center;
    width: 60%;
    height: 40px;
    align-items: center;
    display: flex;
    justify-content: space-evenly;
`;

const InputField = styled.input`
    font-family: sans-serif;
    text-align: left;
    width: 60%;
    height: 100%;

    outline: none;
    font-size: 12px;

    border: 1px solid #d2d2d2;
    border-radius: 12px;
`;

const InsertBtn = styled.button`
    font-family: sans-serif;
    width: 10%;
    height: 50%;

    border: none;
    background: none;
`;


export default InputBox;