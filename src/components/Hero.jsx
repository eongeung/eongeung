import { useLang } from '../contexts/LangContext';
import { useState, useEffect } from 'react';

const STACK = ['Java', 'Spring Boot', 'React', 'Flutter', 'Python'];

const STAT_TARGETS = [6, 7, 5];
const STAT_LABELS = [
  { ko: '프로젝트', en: 'Projects' },
  { ko: '수상',     en: 'Awards' },
  { ko: '자격증',   en: 'Licenses' },
];

export default function Hero() {
  const { lang } = useLang();
  const [displayed, setDisplayed] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [counts, setCounts] = useState([0, 0, 0]);

  const fullText = lang === 'ko'
    ? '무엇이든 겪어보고 성장하는 것을 좋아합니다.'
    : 'I grow by experiencing everything firsthand.';

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

  // 카운트업
  useEffect(() => {
    const timers = STAT_TARGETS.map((target, i) => {
      let c = 0;
      const delay = setTimeout(() => {
        const t = setInterval(() => {
          c++;
          setCounts(prev => { const n = [...prev]; n[i] = c; return n; });
          if (c >= target) clearInterval(t);
        }, 80);
        return () => clearInterval(t);
      }, 600 + i * 120);
      return delay;
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="hero-eyebrow">Backend · Full-Stack Developer</div>
        <h1 className="hero-name">
          {lang === 'ko' ? '이 영 흔' : 'Yeong Heun Lee'}
        </h1>
        <div className="hero-stats">
          {STAT_TARGETS.map((_, i) => (
            <div key={i} className="hero-stat">
              <span className="hero-stat-num">{counts[i]}</span>
              <span className="hero-stat-label">{STAT_LABELS[i][lang]}</span>
            </div>
          ))}
        </div>
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
      </div>
      <div className="hero-scroll">
        <div className="hero-scroll-bar" />
        <span className="hero-scroll-label">scroll</span>
      </div>
    </div>
  );
}
