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
            컴퓨터공학과를 졸업하고 <strong>백엔드 / 풀스택 개발자</strong>로서 첫 커리어를 준비하고 있습니다.<br />
            <strong>Spring Boot</strong> 기반의 백엔드 개발을 중심으로 다양한 팀·개인 프로젝트를 통해 실전 경험을 쌓아왔으며,
            서버 구축과 API 설계에 깊은 흥미를 갖고 있습니다.<br />
            <strong>Flutter</strong>와 <strong>React</strong>를 통한 프론트엔드 경험도 함께 갖추고 있어,
            백엔드를 기반으로 풀스택 역량을 키워나가고자 합니다.<br />
            궁극적으로는 <strong>팀과 서비스를 이끄는 PM(Project Manager)</strong>이 되는 것이 최종 목표입니다.
          </p>
        ) : (
          <p>
            I graduated with a degree in Computer Engineering and am currently preparing for my first career as a
            <strong> backend / full-stack developer</strong>.<br />
            I have built practical experience through various team and personal projects centered on
            <strong> Spring Boot</strong>-based backend development,
            with a strong interest in server architecture and API design.<br />
            I also have frontend experience with <strong>Flutter</strong> and <strong>React</strong>,
            and aim to grow into a full-stack developer grounded in backend expertise.<br />
            Ultimately, my long-term goal is to become a <strong>Project Manager (PM)</strong> who leads teams and services.
          </p>
        )}
      </FadeIn>
    </section>
  );
}
