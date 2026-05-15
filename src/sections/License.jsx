import { useLang } from '../contexts/LangContext';

const LICENSES = [
  { ko: 'SQLD', en: 'SQLD (SQL Developer)' },
  { ko: '리눅스마스터 2급', en: 'Linux Master Level 2' },
  { ko: '네트워크 관리사 2급', en: 'Network Administrator Level 2' },
  { ko: '운전면허 2종 보통', en: "Driver's License (Type 2)" },
  { ko: 'GTQ 1급', en: 'GTQ Level 1' },
];

export default function License() {
  const { lang } = useLang();

  return (
    <section id="license">
      <div className="license-section">
        <h1>License</h1>
        <ul className="license-list">
          {LICENSES.map(l => (
            <li key={l.ko}>
              <span className="license-check">✓</span>
              {lang === 'ko' ? l.ko : l.en}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
