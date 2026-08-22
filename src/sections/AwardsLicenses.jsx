import { useLang } from '../contexts/LangContext';

const AWARDS = [
  {
    title: 'KB국민은행장 표창', titleEn: 'KB Kookmin Bank Award',
    sub: '졸업식 표창', subEn: 'Graduation Commendation',
    role: '-', roleEn: '-',
  },
  {
    title: '탄소 관련 공모전', titleEn: 'Carbon Competition',
    sub: '전기화물차 리스 플랫폼 · 우수상', subEn: 'Electric Freight Vehicle Leasing Platform · Excellence',
    role: 'UI 설계 · 앱 제작', roleEn: 'UI design · App dev',
  },
  {
    title: '대전을 혁신하는 청년 해커톤', titleEn: 'Daejeon Youth Hackathon',
    sub: '임산부를 위한 버스 시스템 보완 · 우수상', subEn: 'Bus System for Pregnant Women · Excellence',
    role: '소프트웨어 설계', roleEn: 'Software design',
  },
  {
    title: '한이음 ICT 프로젝트', titleEn: 'Hanium ICT Project',
    sub: 'CBDC 기반 자율주행차 결제 시스템 · 장려상', subEn: 'CBDC Autonomous Vehicle Payment · Encouragement',
    role: '백엔드 · 시스템 설계', roleEn: 'Backend · System design',
  },
  {
    title: 'Spark Design Award', titleEn: 'Spark Design Award',
    sub: '디지털 라이프스타일 스마트 IoT 서비스 · Finalist', subEn: 'Smart IoT Digital Lifestyle Service · Finalist',
    role: 'UX · 소프트웨어 설계', roleEn: 'UX · Software design',
  },
  {
    title: '교내 컴퓨터공학과 학술제', titleEn: 'Dept. Academic Fair',
    sub: '캠퍼스 기반 미션형 공유 물품 플랫폼 · 입선', subEn: 'Campus Mission-Type Shared Item Platform · Honorable Mention',
    role: '백엔드 · 연동 담당', roleEn: 'Backend · Integration',
  },
  {
    title: '코너스톤', titleEn: 'Cornerstone',
    sub: '농아인 화재 대피 안내 어플리케이션 · 2등', subEn: 'Fire Evacuation App for the Deaf · 2nd Place',
    role: '플래시 구현 · 형상 관리', roleEn: 'Flash feature · Version control',
  },
];

const LICENSES = [
  {
    id: 'sqld', badge: 'SQL', category: 'data',
    ko: 'SQLD', en: 'SQLD',
    descKo: 'SQL 개발자', descEn: 'SQL Developer',
    issuerKo: '데이터자격검정원', issuerEn: 'Korea Data Agency',
  },
  {
    id: 'linux', badge: 'LX', category: 'os',
    ko: '리눅스마스터 2급', en: 'Linux Master Lv.2',
    descKo: '리눅스 시스템 관리', descEn: 'Linux System Management',
    issuerKo: '한국정보통신진흥협회', issuerEn: 'KAIT',
  },
  {
    id: 'network', badge: 'NET', category: 'network',
    ko: '네트워크관리사 2급', en: 'Network Admin. Lv.2',
    descKo: '네트워크 구축 및 관리', descEn: 'Network Configuration & Management',
    issuerKo: '한국정보통신자격협회', issuerEn: 'KAIT',
  },
  {
    id: 'gtq', badge: 'GTQ', category: 'design',
    ko: 'GTQ 1급', en: 'GTQ Level 1',
    descKo: '그래픽기술자격 1급', descEn: 'Graphic Technology Qualification',
    issuerKo: '한국생산성본부', issuerEn: 'Korea Productivity Center',
  },
  {
    id: 'driver', badge: 'DL', category: 'life',
    ko: '운전면허 2종 보통', en: "Driver's License Type 2",
    descKo: '도로교통법 기반 운전자격', descEn: 'Standard Driver Authorization',
    issuerKo: '도로교통공단', issuerEn: 'Korea Road Traffic Authority',
  },
];

export default function AwardsLicenses() {
  const { lang } = useLang();

  return (
    <section id="award" data-reveal>
      <h1>Awards & Licenses</h1>
      <div className="al-grid">
        <div className="al-col">
          <div className="al-col-label">Awards</div>
          <div className="award-list" data-reveal="stagger-left">
            {AWARDS.map((a, i) => (
              <div className="award-row" key={a.title}>
                <div className="award-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="award-body">
                  <div className="award-title">{lang === 'ko' ? a.title : a.titleEn}</div>
                  <div className="award-sub">{lang === 'ko' ? a.sub : a.subEn}</div>
                </div>
                {a.role !== '-' && (
                  <div className="award-role">{lang === 'ko' ? a.role : a.roleEn}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="al-col">
          <div className="al-col-label">Licenses</div>
          <div className="license-list" data-reveal="stagger">
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
        </div>
      </div>
    </section>
  );
}
