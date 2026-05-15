import { useState } from 'react';
import { useLang } from '../contexts/LangContext';

const PROJECTS = [
  {
    year: '2023', name: 'Hanpiece',
    desc: '보드게임의 전략성과 재미를 디지털로 구현한 턴 기반 시뮬레이션 게임임.\nC 언어로 핵심 로직과 사용자 인터페이스 구현함.',
    descEn: 'Turn-based simulation game implementing the strategy and fun of a board game digitally.\nImplemented core logic and UI in C.',
    stack: 'C',
  },
  {
    year: '2023', name: 'Smart Pet Mate',
    desc: 'Arduino 기반 자동 급식 시스템 개발 프로젝트임.\n시간 기반 동작 알고리즘 설계 및 예외 상황 처리 로직 구현함.\n급식 동작 테스트와 보정 과정을 반복해 안정성 개선함.',
    descEn: 'Arduino-based automatic pet feeding system.\nDesigned time-based operation algorithm and exception handling logic.\nImproved stability through repeated feeding tests and calibration.',
    stack: 'Arduino, C',
  },
  {
    year: '2024', name: 'safe-tech',
    desc: '라즈베리파이·Arduino 연동 및 YOLO 기반 안전모 착용 인식 시스템 기획함.\n인식 결과를 관리자에게 전달하고 관리하는 흐름 설계함.\nDjango 기반 관리자 웹 구축 및 결과 조회·관리 화면 개발 담당함.',
    descEn: 'Planned Raspberry Pi & Arduino integration and YOLO-based helmet detection system.\nDesigned the flow for delivering and managing recognition results to administrators.\nBuilt Django-based admin web with result inquiry and management screens.',
    stack: 'Raspberry Pi, Arduino, YOLO, Django, Python',
  },
  {
    year: '2024', name: 'Iruri',
    desc: '백그라운드 데시벨 측정 및 임계치 기반 경고 로직 구현함.\n플래시 기반 시각 경고 기능 구현 및 동작 테스트 개선함.\nGit 브랜치 관리와 커밋 규칙 정리 및 개발 문서 작성 담당함.',
    descEn: 'Implemented background decibel measurement and threshold-based warning logic.\nImplemented flash-based visual alert and improved operation tests.\nManaged Git branches, commit conventions, and development documentation.',
    stack: 'Android Studio, Java',
  },
  {
    year: '2024', name: 'DUNE',
    desc: 'C언어 기반 RTS 게임 로직 구조화 및 핵심 자료구조 설계함.\n구조체로 유닛 상태와 자원 정보를 모델링하고 기능별 모듈로 분리함.\n턴 처리와 전투 규칙 등 게임 알고리즘 구현 및 디버깅함.',
    descEn: 'Structured C-based RTS game logic and designed core data structures.\nModeled unit states and resource info with structs, separated into functional modules.\nImplemented and debugged game algorithms including turn processing and combat rules.',
    stack: 'C',
  },
  {
    year: '2025', name: 'C:BOX',
    desc: '캠퍼스 공유 물품을 QR로 대여·반납하는 모바일 플랫폼 개발함.\n백엔드 담당으로 로그인 인증, 대여·반납 로직, 중복 대여 방지, 자동 반납 기한 구현함.\nQR 스캔부터 상태 업데이트까지 실시간 대여 파이프라인 설계함.',
    descEn: 'Developed a mobile platform for campus shared item rental/return via QR.\nAs backend developer, implemented login auth, rental/return logic, duplicate prevention, and auto-return deadline.\nDesigned real-time rental pipeline from QR scan to status update.',
    stack: 'Spring Boot, MySQL, Flutter',
  },
  {
    year: '2025', name: 'Ondy',
    desc: '커서 위치를 따라 이동하는 캐릭터 시각화 앱 구현함.\n좌표 이벤트 처리 및 애니메이션 동작 구성함.',
    descEn: 'Implemented a character visualization app that follows cursor position.\nHandled coordinate events and configured animation behavior.',
    stack: 'Python',
  },
  {
    year: '2025', name: 'NODE',
    desc: '디지털 라이프 스타일 웨어러블 개발 프로젝트임.\nMediaPipe 기반 자세 기울기 인식 시스템 구축함.\nArduino–Python 실시간 캐릭터 시각화 앱 개발함.',
    descEn: 'Digital lifestyle wearable development project.\nBuilt MediaPipe-based posture tilt detection system.\nDeveloped Arduino–Python real-time character visualization app.',
    stack: 'MediaPipe, Python, Arduino',
  },
  {
    year: '2025', name: 'Ansim-on',
    desc: 'Arduino 회로 설계 및 Spring Boot 서버 개발 담당함.\nRFID 감지–서버 전송–LED 알림 활성화로 이어지는 전체 흐름 구현함.\n대중교통 배려석 자동화 모델로 실사용 가능성 검증함.',
    descEn: 'Responsible for Arduino circuit design and Spring Boot server development.\nImplemented full flow from RFID detection to server transmission to LED alert activation.\nVerified feasibility as an automated model for public transportation priority seats.',
    stack: 'Arduino, RFID, Spring Boot',
  },
  {
    year: '2025', name: 'AeroPick',
    desc: '항공사(AERO-K) 연계 기반 제품 개발 프로젝트임.\nSpring Boot 기반 백엔드 서버 구축 및 Flutter 기반 크로스플랫폼 앱 개발함.\n시리얼 통신 연동 및 QR 기반 결과 제공 서버 구축함.',
    descEn: 'Product development project in collaboration with airline AERO-K.\nBuilt Spring Boot-based backend server and Flutter-based cross-platform app.\nImplemented serial communication integration and QR-based result server.',
    stack: 'Spring Boot, Flutter, Arduino, Raspberry Pi',
  },
  {
    year: '2025', name: 'MotoWallet',
    desc: 'CBDC 모델 기반 토큰을 활용한 자율주행 모빌리티 자동결제 시스템 설계 및 구현함.\n학술대회 프로시딩 게재 및 공모전 수상, 특허 출원 진행 포함함.\nFlutter 기반 크로스플랫폼 앱 프론트엔드 개발 및 UI/UX 구현함.',
    descEn: 'Designed and implemented an autonomous mobility auto-payment system using CBDC-based tokens.\nIncludes academic proceedings publication, competition award, and patent application.\nDeveloped Flutter-based cross-platform app frontend and UI/UX.',
    stack: 'Flutter, React, Spring Boot, Etherium, MySQL',
  },
  {
    year: '2026', name: 'Frankly',
    desc: '익명 기반 소통 플랫폼 개발 프로젝트임.\n익명 API 설계 및 서버 구축 담당함.',
    descEn: 'Anonymous-based communication platform development project.\nResponsible for anonymous API design and server building.',
    stack: 'Spring Boot',
  },
];

const YEARS = ['all', '2023', '2024', '2025', '2026'];

export default function Projects() {
  const { lang } = useLang();
  const [filter, setFilter] = useState('all');
  const [openIdx, setOpenIdx] = useState(null);

  const filtered = PROJECTS.filter(p => filter === 'all' || p.year === filter);

  const handleProjectClick = (idx) => {
    setOpenIdx(prev => (prev === idx ? null : idx));
  };

  const handleFilterClick = (year) => {
    setFilter(year);
    setOpenIdx(null);
  };

  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="projects-list">
        <div className="filter-buttons">
          {YEARS.map(y => (
            <button
              key={y}
              data-year={y}
              className={filter === y ? 'active' : ''}
              onClick={() => handleFilterClick(y)}
            >
              {y === 'all' ? 'All' : y}
            </button>
          ))}
        </div>
        {filtered.map((p, idx) => (
          <div key={`${p.year}-${p.name}`} className="project" onClick={() => handleProjectClick(idx)}>
            <strong>{p.name}</strong>
            <div className="description" style={{ display: openIdx === idx ? 'block' : 'none' }}>
              {(lang === 'ko' ? p.desc : p.descEn).split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
              <br />
              <b>Tech Stack:</b> {p.stack}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
