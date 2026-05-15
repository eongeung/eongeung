import Carousel from '../components/Carousel';

const EXPERIENCES = [
  { title: 'IT-UP SQL 기반 데이터 분석 실습 과정', period: '2024.06 ~ 2024.07', desc: 'SQL을 활용한 데이터 처리 및 분석 실습 경험' },
  { title: 'HDF CPD', period: '2025.03 ~ 2025.06', desc: '다학제 프로그램에 참여하여 디자인 및 경영학과 학생들과 협업해 문제를 정의하고 해결함.' },
  { title: 'H-BRIDGE Global CDP', period: '2025.07 ~ 2025.07', desc: '글로벌 워크숍 및 프로젝트 협업을 통한 국제 협업 경험' },
  { title: 'Google AI Essentials', period: '2025.10 ~ 2025.10', desc: 'AI 기초 모델 이해 및 실습 프로젝트 수행' },
  { title: 'HDF IPD', period: '2025.10 ~ 2025.12', desc: '기업 연계 기반 프로젝트 수업에 참여하여 실제 기업과 협업해 문제를 정의하고 해결함.' },
  { title: '피자몰 뷔페', period: '2021.12 ~ 2024.02', desc: '조리 흐름 전반 운영 및 매장 지원' },
  { title: '롯데리아', period: '2022.03 ~ 2023.06', desc: '키오스크·포스·마감 운영을 통한 시스템 이해도 향상' },
  { title: '빽다방', period: '2023.06 ~ 2024.02', desc: '1인 근무 기반 멀티태스킹 수행 및 상황 대응 역량 향상' },
  { title: '연구실 학부연구생', period: '2024.03 ~ 2025.02', desc: '실험 보조 및 연구 환경 개선을 통한 프로젝트 지원' },
  { title: '뚜레쥬르', period: '2025.05 ~ 2026.01', desc: '재고·유통기한·진열을 기준화하여 서비스 품질 유지' },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="experience-section">
        <h1>Experience</h1>
        <Carousel>
          {EXPERIENCES.map(e => (
            <div key={e.title} className="experience-entry">
              <h2>{e.title}</h2>
              <span>{e.period}</span>
              <p>{e.desc}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
