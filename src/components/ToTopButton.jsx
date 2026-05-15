import { useEffect, useState } from 'react';

export default function ToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      id="toTopBtn"
      title="top"
      style={{ display: visible ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center' }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <img src="/assets/images/top.png" alt="top" />
    </button>
  );
}
