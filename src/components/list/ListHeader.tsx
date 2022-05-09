import styled from 'styled-components';

const ListHeader = ({ title }: { title: string }) => {
    return (
        <ListHeaderContainer>
            <Title>{title}</Title>
        </ListHeaderContainer>
    );
};

export default ListHeader;

const ListHeaderContainer = styled.div`
    padding: 20px;
`;
const Title = styled.h2`
    margin: 0px;
    font-size: 16px;
`;
