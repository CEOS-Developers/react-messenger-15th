import styled from 'styled-components';

const RoomHeader = () => {
    return <RoomHeaderContainer></RoomHeaderContainer>;
};

export default RoomHeader;

const RoomHeaderContainer = styled.div`
    background-color: #fff;
    @media screen and (min-width: 600px) {
        border-radius: 15px 15px 0px 0px;
    }
`;
