import { useLang } from '../contexts/LangContext';

const IT = [
  {
    title: '2026 JAVA 웹 풀스택 과정', titleEn: '2026 JAVA Web Full-Stack Course',
    period: '2026.05 — 07',
    desc: 'Java 기반 웹 풀스택 개발 과정 수강 중',
    descEn: 'Currently enrolled in a Java-based web full-stack development course',
  },
  {
    title: 'HDF IPD', titleEn: 'HDF IPD',
    period: '2025.10 — 12',
    desc: '기업 연계 프로젝트 수업 — 실제 기업과 협업해 문제 정의 및 해결',
    descEn: 'Company-linked project course — collaborated with real companies to define and solve problems',
  },
  {
    title: 'Google AI Essentials', titleEn: 'Google AI Essentials',
    period: '2025.10',
    desc: 'AI 기초 모델 이해 및 실습 프로젝트 수행',
    descEn: 'AI foundational models and hands-on project experience',
  },
  {
    title: 'H-BRIDGE Global CDP', titleEn: 'H-BRIDGE Global CDP',
    period: '2025.07',
    desc: '글로벌 워크숍 및 국제 협업 프로젝트 참여',
    descEn: 'Global workshops and international collaboration project',
  },
  {
    title: 'HDF CPD', titleEn: 'HDF CPD',
    period: '2025.03 — 06',
    desc: '다학제 프로그램 — 디자인·경영학과 학생들과 협업해 문제 정의 및 해결',
    descEn: 'Multidisciplinary program — collaborated with design & business students',
  },
  {
    title: '연구실 학부연구생', titleEn: 'Undergraduate Research Assistant',
    period: '2024.03 — 2025.02',
    desc: '실험 보조 및 연구 환경 개선을 통한 프로젝트 지원',
    descEn: 'Supported projects through experiment assistance and research environment improvement',
  },
  {
    title: 'IT-UP SQL 기반 데이터 분석 실습', titleEn: 'IT-UP SQL Data Analysis Course',
    period: '2024.06 — 07',
    desc: 'SQL을 활용한 데이터 처리 및 분석 실습',
    descEn: 'Hands-on data processing and analysis using SQL',
  },
];

const PART_TIME = [
  {
    title: '뚜레쥬르', titleEn: 'Tous Les Jours',
    period: '2025.05 — 2026.02',
    desc: '재고·유통기한·진열 기준화로 서비스 품질 유지',
    descEn: 'Maintained service quality by standardizing inventory and display',
  },
  {
    title: '롯데리아', titleEn: 'Lotteria',
    period: '2022.03 — 2023.06',
    desc: '키오스크·포스·마감 운영을 통한 시스템 이해도 향상',
    descEn: 'System understanding via kiosk, POS, and closing operations',
  },
  {
    title: '피자몰 뷔페', titleEn: 'Pizza Mall Buffet',
    period: '2021.12 — 2024.02',
    desc: '조리 흐름 전반 운영 및 매장 지원',
    descEn: 'Overall food preparation operations and store support',
  },
];

export default function Experience() {
  const { lang } = useLang();

  return (
    <section id="experience" data-reveal>
      <h1>Experience</h1>
      <div className="exp-grid" data-reveal="stagger">
        <div className="exp-col">
          <div className="exp-col-label">{lang === 'ko' ? 'Dev & Activities' : 'Dev & Activities'}</div>
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
        <div className="exp-col">
          <div className="exp-col-label">{lang === 'ko' ? 'Part-time' : 'Part-time'}</div>
          {PART_TIME.map(e => (
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
