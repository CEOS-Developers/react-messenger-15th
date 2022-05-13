import React from "react";
import styled from 'styled-components';

type InputFieldprops = {
    value : string
    placeholder : string
    onchange( e : React.ChangeEvent<HTMLInputElement> ) : void
}

const InputField = ( {value, placeholder, onchange} : InputFieldprops ) => {
    return <Input value={value} placeholder={placeholder} onchange={onchange} ></Input>
}

const Input = styled.input<InputFieldprops>`
    font-family: sans-serif;
    text-align: left;
    width: calc( 100% - 90px );
    height : 36px;
    margin: 0px 0px;
    padding : 0px 16px;
    font-size: 12px;

    border: 1px solid #d2d2d2;
    border-radius: 12px;
`;

export default InputField;