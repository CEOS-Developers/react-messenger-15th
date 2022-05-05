import Landing from './pages/landing';
import Room from './pages/room';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/room/:id" element={<Room />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
