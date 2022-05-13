import React from "react";
import styled from 'styled-components';

type SquareImageprops = {
    id : string;
}

const SquareImage = ( {id} : SquareImageprops ) => {
    return <Image src = {`../Asset/Image/${id}.png`}/>
}

const Image = styled.img`
    width : 40px;
    height : 40px;
    margin : 0px 12px 0px 0px;
    border-radius: 16px;
`;

export default SquareImage;