import Landing from './pages/landing';
import Room from './pages/room';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/room/:id" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
