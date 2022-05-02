import { RecoilRoot } from 'recoil';

import GlobalStyle from './styles/GlobalStyle';
import { Main } from './styles/Container';
function App() {
    return (
        <RecoilRoot>
            <GlobalStyle />
            <Main></Main>
        </RecoilRoot>
    );
}

export default App;
