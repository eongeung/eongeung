import { useLang } from '../contexts/LangContext';
import { useTheme } from '../contexts/ThemeContext';

const LINKS = [
  { id: 'about',      label: 'About' },
  { id: 'projects',   label: 'Projects' },
  { id: 'techstack',  label: 'Stack' },
  { id: 'experience', label: 'Exp' },
  { id: 'contact',    label: 'Contact' },
];

export default function Nav() {
  const { lang, toggle: toggleLang } = useLang();
  const { isDark, toggle: toggleTheme } = useTheme();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <a
        className="nav-name"
        href="#"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
      >
        이영흔
      </a>
      <div className="nav-links">
        {LINKS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => { e.preventDefault(); scrollTo(id); }}
          >
            {label}
          </a>
        ))}
        <button className="nav-theme" onClick={toggleTheme} aria-label="테마 전환">
          {isDark ? '☀' : '◑'}
        </button>
        <button className="nav-lang" onClick={toggleLang}>
          {lang === 'ko' ? 'EN' : 'KO'}
        </button>
      </div>
    </nav>
  );
}
