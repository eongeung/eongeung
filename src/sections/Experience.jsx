import { useLang } from '../contexts/LangContext';

const EMPLOYMENT = [
  {
    title: 'SRP인포텍', titleEn: 'SRP Infotech',
    role: '풀스택 개발자', roleEn: 'Full-Stack Developer',
    team: '개발1팀', teamEn: 'Development Team 1',
    period: '2026.08 — 재직중', periodEn: '2026.08 — Present',
    techStack: 'WebSquare · Java · Oracle SQL · JasperReports · Git/GitHub · Claude Code',
    responsibilities: [
      'SaaS형 ERP 제품 기능 개발 및 운영 대응 — DB 설계부터 화면·쿼리 수정, 검증 로직까지 end-to-end로 처리',
      '레거시 ERP 테이블·업무 흐름을 분석해 ERD와 문서로 정리',
      '레거시 CVS 저장소를 Git으로 이관',
      'Claude Code 기반 업무 자동화 파이프라인 구축 (코드 추적·문서화·업무 기록 자동화)',
      '고객 문의 원인 조사 및 답변',
    ],
    responsibilitiesEn: [
      'Developed SaaS ERP product features and handled operations support end-to-end — from DB design to screen/query changes and validation logic',
      'Analyzed legacy ERP tables and workflows, documenting them as ERDs',
      'Migrated a legacy CVS repository to Git',
      'Built an AI-assisted workflow automation pipeline with Claude Code (code tracing, documentation, work-log automation)',
      'Investigated and responded to customer inquiries',
    ],
    cases: [
      {
        title: '운영 DB 핵심 테이블 ERD 정리',
        situation: '운영 DB에 테이블이 수백 개에 달해 전체 구조를 한눈에 파악하기 어려웠음',
        action: '업무상 핵심이 되는 테이블만 추려 ERD로 정리해 팀 내 참고 자료로 활용',
      },
      {
        title: '레거시 CVS → Git 이관',
        situation: '소스 관리가 오래된 CVS로 운영되고 있어 협업과 코드 리뷰가 불편했음',
        action: '신규 Git 저장소를 구성하고 빌드 오류·DB 연결 방식을 정리해 운영에 반영, 팀에 전환 공지',
      },
      {
        title: 'Claude Code 기반 업무 자동화',
        situation: '화면·쿼리·Java 호출부를 매번 수동으로 하나씩 추적해야 해서 반복 조사에 시간이 많이 들었음',
        action: '코드·쿼리 추적, 고객 답변 메일 초안, 업무 기록을 자동화하는 커스텀 명령과 파이프라인을 구축해 반복 작업 시간을 줄임',
      },
    ],
    casesEn: [
      {
        title: 'Production DB — Documented Key Tables as an ERD',
        situation: 'The production DB had hundreds of tables, making the overall structure hard to grasp at a glance',
        action: 'Narrowed it down to the tables that actually matter for the business and documented them as an ERD for the team to reference',
      },
      {
        title: 'Legacy CVS → Git Migration',
        situation: 'Source control was still running on an old CVS setup, making collaboration and code review cumbersome',
        action: 'Set up a new Git repository, sorted out build errors and the DB connection method, rolled it into production, and announced the switch to the team',
      },
      {
        title: 'AI-Assisted Workflow Automation with Claude Code',
        situation: 'Manually tracing screens, queries, and Java call paths one by one ate up a lot of time on repetitive investigation',
        action: 'Built custom commands and a pipeline to automate code/query tracing, draft customer reply emails, and log work — cutting down repetitive work',
      },
    ],
    insight: '레거시 시스템에서는 코드만 보고 단정하지 않고, 실제 데이터가 쌓이는 흐름을 먼저 따라가며 확인하는 습관이 중요하다는 걸 배웠습니다.',
    insightEn: 'In legacy systems, I learned the importance of tracing how data actually flows and accumulates, rather than drawing conclusions from the code alone.',
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
          {EMPLOYMENT.map((e) => (
            <div key={e.title}>
              <div className="exp-row">
                <div className="exp-period">{lang === 'ko' ? e.period : e.periodEn}</div>
                <div className="exp-body">
                  <div className="exp-name">
                    {lang === 'ko' ? e.title : e.titleEn}
                    <span className="exp-role">{lang === 'ko' ? e.role : e.roleEn}</span>
                  </div>
                  <div className="exp-desc">{lang === 'ko' ? e.team : e.teamEn}</div>
                </div>
              </div>

              <div className="exp-detail">
                <div className="tech-chips">
                  {e.techStack.split(' · ').map((tech) => (
                    <span key={tech} className="tech-chip">{tech}</span>
                  ))}
                </div>

                <div className="ms ms-contrib-section">
                  <div className="ms-label">RESPONSIBILITIES</div>
                  <table className="contrib-table">
                    <tbody>
                      {(lang === 'ko' ? e.responsibilities : e.responsibilitiesEn).map((item, i) => (
                        <tr key={i}>
                          <td className="contrib-idx">{String(i + 1).padStart(2, '0')}</td>
                          <td className="contrib-item">{item}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="ms">
                  <div className="ms-label">KEY WORK</div>
                  <div className="ts-list">
                    {(lang === 'ko' ? e.cases : e.casesEn).map((c, i) => (
                      <div key={i} className="ts-item">
                        <div className="ts-issue">{c.title}</div>
                        <div className="ts-row"><span className="ts-tag ts-tag-cause">{lang === 'ko' ? '상황' : 'CONTEXT'}</span><span className="ts-body">{c.situation}</span></div>
                        <div className="ts-row"><span className="ts-tag ts-tag-fix">{lang === 'ko' ? '처리' : 'ACTION'}</span><span className="ts-body">{c.action}</span></div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="ms-insight-block">
                  <p className="ms-insight-text">{lang === 'ko' ? e.insight : e.insightEn}</p>
                </div>
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
