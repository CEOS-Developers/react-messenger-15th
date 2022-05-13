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
    width: 40px;
    height: 40px;
    border-radius: 16px;
    object-fit: cover;
    background-color : #999999;
    border : none;
    align-item : center;
`;

export default SquareButton;