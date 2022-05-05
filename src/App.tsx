import GlobalStyle from './styles/GlobalStyle';
import { Main } from './styles/Container';
import ChatRoom from './pages/ChatRoom';
import { RecoilRoot } from 'recoil';

function App() {
    return (
        <>
            <GlobalStyle />
            <RecoilRoot>
                <Main>
                    <ChatRoom roomId={0} />
                </Main>
            </RecoilRoot>
        </>
    );
}

export default App;
