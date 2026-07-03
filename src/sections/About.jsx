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
              ? 'Spring Boot와 React를 중심으로 실서비스 배포부터 AI 연동, IoT 하드웨어 통합까지 경험한 풀스택 개발자입니다. PL 역할로 기획부터 배포까지 전 과정을 주도한 경험이 있으며, Redis 분산 락, LLM 챗봇 등 다양한 기술을 실제 프로젝트에 적용했습니다.'
              : 'Full-stack developer with experience spanning live deployments, AI integration, and IoT hardware, centered on Spring Boot and React. Led full project lifecycles as PL and applied technologies including Redis distributed locks and LLM chatbots across real-world projects.'}
          </p>
          <div className="about-links">
            <a href="https://github.com/eongeung" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://velog.io/@0nee/posts" target="_blank" rel="noreferrer">Velog ↗</a>
            <a href="mailto:2yeongheun@gmail.com">2yeongheun@gmail.com ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}
