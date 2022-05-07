import React from "react";
import styled from 'styled-components';
import { useMessageDispatch } from '../Context/MessageContext';
import useInput from '../Hooks/useInput';

// useMessageState

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
            placeholder = "Text your message here."
        />
        <InsertBtn onClick={onSubmit}>
        +
        </InsertBtn>
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

const InputField = styled.input`
    font-family: sans-serif;
    text-align: left;
    justify-content : center;
    width: calc(100% - 120px) ;
    height : 36px;
    margin: 0px 24px;
    padding : 0px 16px;
    font-size: 12px;

    border: 1px solid #d2d2d2;
    border-radius: 12px;
`;

const InsertBtn = styled.button`
    width: 40px;
    height: 40px;
    margin-right: 24px;
    border-radius : 16px;
    background: #567BFF;
    border : none;
    color : white;
    font-size : 24px;
`;

export default InputBox;