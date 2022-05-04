import { useEffect } from 'react';
import { ChatRoom } from './pages/ChatRoom';

export function App() {
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

  useEffect(() => {
    setVh();
  }, []);

  return (
    <>
      <ChatRoom />
    </>
  );
}
