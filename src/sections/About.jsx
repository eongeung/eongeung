import { useLang } from '../contexts/LangContext';

const BASE = import.meta.env.BASE_URL;

export default function About() {
  const { lang } = useLang();

  return (
    <section id="about" data-reveal>
      <h1>About</h1>
      <div className="about-inner" data-reveal="split">
        <img src={`${BASE}assets/images/pp.jpeg`} alt="profile" className="about-photo" />
        <div className="about-content">
          <div className="about-role">Backend · Full-Stack Developer</div>
          <p className="about-bio">
            {lang === 'ko'
              ? '현재 Java·Oracle 기반 ERP 시스템을 개발하는 풀스택 개발자입니다. 레거시 시스템을 분석하고 SaaS형 ERP 제품의 기능을 end-to-end로 개발하며 실무 경험을 쌓고 있습니다. 개인 프로젝트에서는 Spring Boot와 React로 실서비스를 배포하고, AI 연동·IoT 하드웨어 통합까지 기술 범위를 넓혀왔으며, PL 역할로 기획부터 배포까지 전 과정을 주도한 경험도 있습니다.'
              : "I'm currently a full-stack developer building a Java/Oracle-based ERP system. I analyze legacy systems and develop SaaS ERP product features end-to-end, building hands-on experience. In personal projects, I've deployed live services with Spring Boot and React, extended into AI integration and IoT hardware, and led full project lifecycles as a PL."}
          </p>
          <div className="about-links">
            <a href="https://github.com/eongeung" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://eong-tory.tistory.com/" target="_blank" rel="noreferrer">Blog ↗</a>
            <a href="mailto:2yeongheun@gmail.com">2yeongheun@gmail.com ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}
