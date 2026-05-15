import FadeIn from '../components/FadeIn';
import { useLang } from '../contexts/LangContext';

export default function Career() {
  const { lang } = useLang();

  return (
    <section id="career">
      <h1>Career Goal</h1>
      <FadeIn>
        {lang === 'ko' ? (
          <p>
            저는 현재 컴퓨터공학을 전공 중인 학생으로,
            <strong> Spring Boot 기반의 백엔드 개발</strong>을 중심으로 역량을 쌓아가고 있습니다.<br />
            희망 직무는 <strong>백엔드 개발자</strong>입니다.
            서버 구축, API 설계 등 핵심 기능 구현에 흥미를 느끼며 공부를 시작했습니다.<br />
            만약 이 분야에서 더 성장할 수 있다면,
            <strong> 프론트엔드 영역까지도 아우르는 풀스택 개발자</strong>로 발전하고 싶습니다.
            그리고 궁극적으로는 <strong>팀과 서비스를 이끄는 PM(Project Manager)</strong>이 되는 것이 제 최종 목표입니다.<br />
            아직은 개발자가 되기 위해 노력하는 단계이지만,
            프로젝트와 학습을 통해 실무 감각을 키워가며,
            각 단계마다 필요한 역량을 차근차근 쌓아가고자 합니다.
          </p>
        ) : (
          <p>
            I am currently studying Computer Science, focusing on developing my skills through
            <strong> backend development with Spring Boot</strong>.<br />
            My desired role is a <strong>backend developer</strong>.
            I became interested in this field through server building and API design, which led me to begin my studies.<br />
            If I continue to grow, I hope to become a
            <strong> full-stack developer</strong> who also understands frontend development.
            Ultimately, my goal is to become a <strong>Project Manager (PM)</strong> who leads teams and services.<br />
            While I am still on the path to becoming a developer,
            I am gaining practical experience through projects and learning,
            building up the necessary skills step by step.
          </p>
        )}
      </FadeIn>
    </section>
  );
}
