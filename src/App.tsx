import { useEffect } from 'react';
import ChatRoom from './pages/ChatRoom';

function App() {
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    setVh();
  }, []);

  return (
    <>
      <ChatRoom />
    </>
  );
}

export default App;
