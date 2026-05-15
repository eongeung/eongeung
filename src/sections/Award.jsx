import Carousel from '../components/Carousel';
import { useLang } from '../contexts/LangContext';

const AWARDS = [
  {
    title: 'KB국민은행장 표창', titleEn: 'KB Kookmin Bank Award',
    subtitle: '졸업식 표창',
    subtitleEn: 'Commendation at Graduation Ceremony',
    desc: 'KB국민은행장 표창 수여',
    descEn: 'Received the KB Kookmin Bank President Award',
  },
  {
    title: '탄소 관련 공모전', titleEn: 'Carbon Competition',
    subtitle: '전기화물차 리스 플랫폼 (우수상)',
    subtitleEn: 'Electric Freight Vehicle Leasing Platform (Excellence Award)',
    desc: 'UI 설계 및 앱 제작',
    descEn: 'UI design and app development',
  },
  {
    title: '대전을 혁신하는 청년 해커톤', titleEn: 'Daejeon Youth Hackathon',
    subtitle: '임산부를 위한 버스 시스템 보완 (우수상)',
    subtitleEn: 'Bus System Improvement for Pregnant Women (Excellence Award)',
    desc: '소프트웨어 설계',
    descEn: 'Software design',
  },
  {
    title: '한이음 ICT 프로젝트', titleEn: 'Hanium ICT Project',
    subtitle: 'CBDC 기반 자율주행차 결제 시스템 (장려상)',
    subtitleEn: 'CBDC-Based Autonomous Vehicle Payment System (Encouragement Award)',
    desc: '백엔드 및 시스템 설계',
    descEn: 'Backend and system design',
  },
  {
    title: 'Spark Design Award', titleEn: 'Spark Design Award',
    subtitle: '디지털 라이프스타일을 지키는 스마트 IoT 서비스 (Finalist)',
    subtitleEn: 'Smart IoT Service for Digital Lifestyle (Finalist)',
    desc: 'UX 및 소프트웨어 설계 담당',
    descEn: 'UX and software design',
  },
  {
    title: '교내 컴퓨터공학과 학술제', titleEn: 'Dept. Academic Fair',
    subtitle: '캠퍼스 기반 미션형 공유 물품 플랫폼 (입선)',
    subtitleEn: 'Campus-Based Mission-Type Shared Item Platform (Honorable Mention)',
    desc: '백엔드 개발 및 연동 담당',
    descEn: 'Backend development and integration',
  },
  {
    title: '코너스톤', titleEn: 'Cornerstone',
    subtitle: '농아인을 위한 화재 발생 시 대피 안내 어플리케이션 (2등 수상)',
    subtitleEn: 'Fire Evacuation Guidance App for the Deaf (2nd Place)',
    desc: '플래시 기능 구현 및 형상 관리',
    descEn: 'Flash feature implementation and version control',
  },
];

export default function Award() {
  const { lang } = useLang();

  return (
    <section id="award">
      <div className="experience-section">
        <h1>Award</h1>
        <Carousel>
          {AWARDS.map(a => (
            <div key={a.title} className="experience-entry">
              <h2>{lang === 'ko' ? a.title : a.titleEn}</h2>
              <span>{lang === 'ko' ? a.subtitle : a.subtitleEn}</span>
              <p>{lang === 'ko' ? a.desc : a.descEn}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
