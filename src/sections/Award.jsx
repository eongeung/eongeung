import Carousel from '../components/Carousel';

const AWARDS = [
  { title: '코너스톤', subtitle: '농아인을 위한 화재 발생 시 대피 안내 어플리케이션 (2등 수상)', desc: '플래시 기능 구현 및 형상 관리' },
  { title: '교내 컴퓨터공학과 학술제', subtitle: '캠퍼스 기반 미션형 공유 물품 플랫폼 (입선)', desc: '백엔드 개발 및 연동 담당' },
  { title: 'Spark Design Award', subtitle: '디지털 라이프스타일을 지키는 스마트 IoT 서비스 (Finalist)', desc: 'UX 및 소프트웨어 설계 담당' },
  { title: '한이음 ICT 프로젝트', subtitle: 'CBDC 기반 자율주행차 결제 시스템 (장려상)', desc: '백엔드 및 시스템 설계' },
  { title: '대전을 혁신하는 청년 해커톤', subtitle: '임산부를 위한 버스 시스템 보완 (우수상)', desc: '소프트웨어 설계' },
  { title: '탄소 관련 공모전', subtitle: '전기화물차 리스 플랫폼 (우수상)', desc: 'UI 설계 및 앱 제작' },
];

export default function Award() {
  return (
    <section id="award">
      <div className="experience-section">
        <h1>Award</h1>
        <Carousel>
          {AWARDS.map(a => (
            <div key={a.title} className="experience-entry">
              <h2>{a.title}</h2>
              <span>{a.subtitle}</span>
              <p>{a.desc}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
