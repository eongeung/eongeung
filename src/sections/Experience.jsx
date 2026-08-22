import { useLang } from '../contexts/LangContext';

const EMPLOYMENT = [
  {
    title: 'SRP인포텍', titleEn: 'SRP Infotech',
    role: '풀스택 개발자', roleEn: 'Full-Stack Developer',
    period: '2026.08 — 재직중', periodEn: '2026.08 — Present',
    desc: '웹 기반 ERP 신규 기능 개발 및 운영 유지보수 담당',
    descEn: 'Developing new features and maintaining a web-based ERP system',
  },
];

const IT = [
  {
    title: '2026 JAVA 웹 풀스택 과정', titleEn: '2026 JAVA Web Full-Stack Course',
    period: '2026.05 — 07',
    desc: 'Java 기반 백엔드·프론트엔드 통합 풀스택 개발 트레이닝',
    descEn: 'Full-stack development training covering Java backend and frontend integration',
  },
  {
    title: 'HDF IPD', titleEn: 'HDF IPD',
    period: '2025.10 — 12',
    desc: '기업 연계 프로젝트 — 실제 비즈니스 요구사항 기반 문제 정의 및 해결',
    descEn: 'Company-linked project — defined and solved problems based on real business requirements',
  },
  {
    title: 'Google AI Essentials', titleEn: 'Google AI Essentials',
    period: '2025.10',
    desc: 'AI 파운데이션 모델 이해 및 실전 프로젝트 적용',
    descEn: 'Applied foundational AI models to a hands-on project',
  },
  {
    title: 'H-BRIDGE Global CDP', titleEn: 'H-BRIDGE Global CDP',
    period: '2025.07',
    desc: '글로벌 워크숍 기반 국제 협업 프로젝트 수행',
    descEn: 'Led an international collaboration project through global workshops',
  },
  {
    title: 'HDF CPD', titleEn: 'HDF CPD',
    period: '2025.03 — 06',
    desc: '디자인·경영 전공 팀과 협업해 문제 정의부터 해결까지 주도',
    descEn: 'Cross-functional collaboration with design & business teams — led problem definition through resolution',
  },
  {
    title: '연구실 학부연구생', titleEn: 'Undergraduate Research Assistant',
    period: '2024.03 — 2025.02',
    desc: '실험 설계 지원 및 연구 환경 개선으로 프로젝트 진행에 기여',
    descEn: 'Contributed to project progress through experiment support and research environment improvements',
  },
  {
    title: 'IT-UP SQL 기반 데이터 분석 실습', titleEn: 'IT-UP SQL Data Analysis Course',
    period: '2024.06 — 07',
    desc: 'SQL 기반 대용량 데이터 처리 및 분석 수행',
    descEn: 'SQL-based large-scale data processing and analysis',
  },
];

export default function Experience() {
  const { lang } = useLang();

  return (
    <section id="experience" data-reveal>
      <h1>Experience</h1>
      <div className="exp-grid exp-grid-single" data-reveal="stagger">
        <div className="exp-col">
          <div className="exp-col-label">EMPLOYMENT</div>
          {EMPLOYMENT.map(e => (
            <div className="exp-row" key={e.title}>
              <div className="exp-period">{lang === 'ko' ? e.period : e.periodEn}</div>
              <div className="exp-body">
                <div className="exp-name">
                  {lang === 'ko' ? e.title : e.titleEn}
                  <span className="exp-role">{lang === 'ko' ? e.role : e.roleEn}</span>
                </div>
                <div className="exp-desc">{lang === 'ko' ? e.desc : e.descEn}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="exp-col exp-col-secondary">
          <div className="exp-col-label">DEVELOPMENT</div>
          {IT.map(e => (
            <div className="exp-row" key={e.title}>
              <div className="exp-period">{e.period}</div>
              <div className="exp-body">
                <div className="exp-name">{lang === 'ko' ? e.title : e.titleEn}</div>
                <div className="exp-desc">{lang === 'ko' ? e.desc : e.descEn}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
