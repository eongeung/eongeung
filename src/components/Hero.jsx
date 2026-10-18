import { useLang } from '../contexts/LangContext';
import { useState, useEffect } from 'react';

const STACK = ['Java', 'Spring Boot', 'Oracle', 'React', 'AWS'];

export default function Hero() {
  const { lang } = useLang();
  const [displayed, setDisplayed] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullText = lang === 'ko'
    ? '요구사항을 실제 동작하는 서비스로 만드는 백엔드 중심 풀스택 개발자입니다.'
    : 'A backend-focused full-stack developer who turns requirements into working services.';

  // 타이핑 애니메이션
  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const delay = setTimeout(() => {
      const timer = setInterval(() => {
        if (i < fullText.length) {
          setDisplayed(fullText.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
        }
      }, 45);
      return () => clearInterval(timer);
    }, 900);
    return () => clearTimeout(delay);
  }, [fullText]);

  // 커서 깜빡임
  useEffect(() => {
    const cursor = setInterval(() => setShowCursor(v => !v), 530);
    return () => clearInterval(cursor);
  }, []);

  // 패럴랙스
  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector('.hero');
      if (hero) hero.style.backgroundPositionY = `calc(center + ${window.scrollY * 0.35}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-status">
          <span className="hero-status-dot" />
          {lang === 'ko' ? '풀스택 개발자로 재직 중' : 'Currently working as a Full-Stack Developer'}
        </div>
        <div className="hero-eyebrow">Backend · Full-Stack Developer</div>
        <h1 className="hero-name">
          {lang === 'ko' ? '이 영 흔' : 'Ellie Lee'}
        </h1>
        <p className="hero-tagline">
          {displayed}
          <span className="hero-cursor" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
        </p>
        <div className="hero-chips">
          {STACK.map(t => (
            <span key={t} className="hero-chip">{t}</span>
          ))}
        </div>
        <a href="#projects" className="hero-cta">
          {lang === 'ko' ? '프로젝트 보기' : 'View Projects'} <span aria-hidden="true">→</span>
        </a>
        <div className="hero-links">
          <a href="mailto:2yeongheun@gmail.com">Email ↗</a>
          <a href="https://github.com/eongeung" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://eong-tory.tistory.com/" target="_blank" rel="noreferrer">Blog ↗</a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="hero-scroll-bar" />
        <span className="hero-scroll-label">scroll</span>
      </div>
    </div>
  );
}
