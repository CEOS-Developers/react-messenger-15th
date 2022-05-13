import React from "react";
import styled from 'styled-components';

type Buttonprops = {
    key : string
    onclick( e :  React.FormEvent ) : void
}

const SquareButton = ( {key, onclick} : Buttonprops ) => {

    return <Btn key = {key} onclick={onclick}></Btn>
}

const Btn = styled.button<Buttonprops>`
    width: 20px;
    height: 20px;
    border-radius: 8px;
    object-fit: cover;
    background-color : #999999;
`;

export default SquareButton;