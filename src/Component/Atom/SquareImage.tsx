import React from "react";
import styled from 'styled-components';

type SquareImageprops = {
    id : string;
}

const SquareImage = ( {id} : SquareImageprops ) => {
    return <Image src = {`../Asset/Image/${id}.jp2`}></Image>
}

const Image = styled.img`
    width : 40px;
    height : 40px;
    margin : auto;
    background: #567BFF;
    border-radius: 16px;
`;

export default SquareImage;