import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Rooms from './pages/rooms';
import General from './pages/general';

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
