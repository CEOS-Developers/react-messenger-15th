import GlobalStyle from './styles/GlobalStyle';
import { Main } from './styles/Container';
import ChatRoom from './pages/ChatRoom';
function App() {
    return (
        <>
            <GlobalStyle />
            <Main>
                <ChatRoom roomId={'0'} />
            </Main>
        </>
    );
}

export default App;
