import { useLang } from '../contexts/LangContext';

const LICENSES = [
  {
    id: 'sqld',
    badge: 'SQL',
    category: 'data',
    ko: 'SQLD',
    en: 'SQLD',
    descKo: 'SQL 개발자',
    descEn: 'SQL Developer',
    issuerKo: '데이터자격검정원',
    issuerEn: 'Korea Data Agency',
  },
  {
    id: 'linux',
    badge: 'LX',
    category: 'os',
    ko: '리눅스마스터 2급',
    en: 'Linux Master Lv.2',
    descKo: '리눅스 시스템 관리',
    descEn: 'Linux System Management',
    issuerKo: '한국정보통신진흥협회',
    issuerEn: 'KAIT',
  },
  {
    id: 'network',
    badge: 'NET',
    category: 'network',
    ko: '네트워크관리사 2급',
    en: 'Network Admin. Lv.2',
    descKo: '네트워크 구축 및 관리',
    descEn: 'Network Configuration & Management',
    issuerKo: '한국정보통신자격협회',
    issuerEn: 'KAIT',
  },
  {
    id: 'gtq',
    badge: 'GTQ',
    category: 'design',
    ko: 'GTQ 1급',
    en: 'GTQ Level 1',
    descKo: '그래픽기술자격 1급',
    descEn: 'Graphic Technology Qualification',
    issuerKo: '한국생산성본부',
    issuerEn: 'Korea Productivity Center',
  },
  {
    id: 'driver',
    badge: 'DL',
    category: 'life',
    ko: '운전면허 2종 보통',
    en: "Driver's License Type 2",
    descKo: '도로교통법 기반 운전자격',
    descEn: 'Standard Driver Authorization',
    issuerKo: '도로교통공단',
    issuerEn: 'Korea Road Traffic Authority',
  },
];

export default function License() {
  const { lang } = useLang();

  return (
    <section id="license">
      <h1>License</h1>
      <div className="license-list">
        {LICENSES.map(l => (
          <div key={l.id} className={`license-row lc-${l.category}`}>
            <span className="license-badge">{l.badge}</span>
            <div className="license-body">
              <div className="license-name">{lang === 'ko' ? l.ko : l.en}</div>
              <div className="license-desc">{lang === 'ko' ? l.descKo : l.descEn}</div>
            </div>
            <span className="license-issuer">{lang === 'ko' ? l.issuerKo : l.issuerEn}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
