import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import General from './pages/General';
import { useRecoilState } from 'recoil';
import { closeWindow } from './store/recoil';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/general" element={<General />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
