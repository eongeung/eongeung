import { useTheme } from '../contexts/ThemeContext';
import { useLang } from '../contexts/LangContext';

export default function Nav() {
  const { isDark, toggle: toggleTheme } = useTheme();
  const { lang, toggle: toggleLang } = useLang();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <strong>
        {['about', 'techstack', 'career', 'projects', 'award', 'experience', 'license', 'contact'].map((id, i, arr) => (
          <span key={id}>
            <a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>
              {id.charAt(0).toUpperCase() + id.slice(1).replace('stack', ' Stack')}
            </a>
            {i < arr.length - 1 && <span> | </span>}
          </span>
        ))}
        <button className="btn" onClick={toggleLang} style={{ marginLeft: '12px', fontSize: '11px' }}>
          {lang === 'ko' ? 'EN 🇺🇸' : 'KR 🇰🇷'}
        </button>
        <button id="darkModeToggle" className="dark-toggle-btn" onClick={toggleTheme}>
          {isDark ? 'OFF' : 'ON'}
        </button>
      </strong>
    </nav>
  );
}
