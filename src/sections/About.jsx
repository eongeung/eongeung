import FadeIn from '../components/FadeIn';
import { useLang } from '../contexts/LangContext';

export default function About() {
  const { lang } = useLang();

  return (
    <section id="about">
      <h1>About Me</h1>
      <FadeIn>
        <img src={`${import.meta.env.BASE_URL}assets/images/pp.jpg`} alt="portfolio" className="profile-img" />
        {lang === 'ko' ? (
          <p>
            안녕하세요! 저는 컴퓨터공학과를 졸업한 <strong>이영흔</strong>입니다.
            다양한 팀 프로젝트와 개인 프로젝트를 통해 사용자 중심의 서비스를 고민하며 개발 역량을 키워가고 있습니다.
            특히 <strong>백엔드(Spring Boot)</strong>와 <strong>프론트엔드(Flutter, React)</strong>를 중심으로 한 풀스택 개발에 관심이 많습니다.
            학습한 내용을 정리하고 기록하는 습관을 기르기 위해{' '}
            <a href="https://velog.io/@0nee/posts" target="_blank" rel="noreferrer">기술 블로그</a>를 운영 중이며,{' '}
            <a href="https://github.com/eongeung" target="_blank" rel="noreferrer">GitHub 저장소</a>에 프로젝트 결과물들을 업로드하고 있습니다.
            직접 제작한 저의 포트폴리오 웹사이트는 HTML, CSS, JavaScript를 활용하여 구성되었으며,
            앞으로도 새로운 프로젝트와 공부한 내용을 이곳에 정리하고 확장해 나갈 예정입니다.
          </p>
        ) : (
          <p>
            Hello! I am <strong>Yeongheun Lee</strong>, and I graduated with a degree in Computer Engineering.
            Through various team and personal projects, I have been developing user-centered services while enhancing my technical skills.<br />
            I am particularly interested in full-stack development, focusing on both <strong>backend (Spring Boot)</strong> and{' '}
            <strong>frontend (Flutter, React)</strong>.<br />
            To build a habit of organizing and documenting what I learn, I maintain a{' '}
            <a href="https://velog.io/@0nee/posts" target="_blank" rel="noreferrer">technical blog</a> and consistently upload project results to my{' '}
            <a href="https://github.com/eongeung" target="_blank" rel="noreferrer">GitHub repository</a>.<br />
            This portfolio website was built from scratch using HTML, CSS, and JavaScript. I plan to continue organizing and expanding it with new projects and studies.
          </p>
        )}
      </FadeIn>
    </section>
  );
}
