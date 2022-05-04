import { useEffect } from 'react';
import { ChatRoom } from './pages/ChatRoom';

export function App() {
  const setResponsiveVh = () => {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight * 0.01}px`
    );
  };

  useEffect(() => {
    setResponsiveVh();
  });

  return (
    <>
      <ChatRoom />
    </>
  );
}
