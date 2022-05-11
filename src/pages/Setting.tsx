import ListHeader from '../components/list/ListHeader';
import { authState } from '../store/recoil';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
const Setting = () => {
    const setAuth = useSetRecoilState(authState);
    return (
        <SettingContainer>
            <ListHeader title={'더보기'} />
            <ListContainer>
                <Divider />
                <LogoutButton
                    onClick={() => {
                        localStorage.removeItem('name');
                        localStorage.removeItem('image');
                        setAuth({ userName: '', profileImage: '', init: false });
                    }}
                >
                    로그아웃
                </LogoutButton>
                <Divider />
            </ListContainer>
        </SettingContainer>
    );
};

export default Setting;

const SettingContainer = styled.div``;

const ListContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
`;

const LogoutButton = styled.div`
    border: 8px;
    padding: 18px 0px;
    width: 100%;
    color: black;
    text-align: center;
    cursor: pointer;
    &:hover {
        background-color: #f7f8f8;
    }
`;

const Divider = styled.div`
    width: calc(100%-36px);
    height: 1px;
    background-color: #f4f4f4;
`;
