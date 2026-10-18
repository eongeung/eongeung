import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useLang } from '../contexts/LangContext';

const BASE = import.meta.env.BASE_URL;

const PROJECTS = [
  {
    id: 'univus',
    featured: true,
    year: '2026',
    name: 'Univ-US',
    role:    { ko: '풀스택 개발자 · PL', en: 'Full-Stack Developer · PL' },
    summary: { ko: '대학 ERP · LMS · 커뮤니티 통합 플랫폼', en: 'University ERP · LMS · Community Platform' },
    date: '2025.05 ~ 2026.06',
    team:    { ko: '풀스택 5', en: 'Full-Stack 5' },
    highlights: {
      ko: [
        'Redis 분산 락 + DB 비관적 락 3중 방어 설계 — k6 99명 동시 부하 테스트 검증',
        'Groq LLM + pgvector RAG 챗봇 — 약 300개 문서 임베딩, 유사도 검색 응답',
        '교육통계센터 기반 전국 325개 대학 데이터 수집 · SQL 변환 · DB 적재',
        'GitHub Actions · Docker CI/CD 파이프라인 구성 및 실배포',
      ],
      en: [
        'Triple-layer protection: Redis distributed lock + DB pessimistic lock — verified via k6 at 99 concurrent users',
        'Groq LLM + pgvector RAG chatbot — ~300 docs embedded, similarity-search responses',
        'Collected 325 university datasets (Education Statistics Center) → SQL conversion → DB load',
        'CI/CD with GitHub Actions · Docker — live deployment complete',
      ],
    },
    teamBreakdown: {
      ko: [
        { member: '담당 (PL)', part: '관리자 대시보드 · 대학 데이터 적재 · AI 챗봇 · 수강신청 동시성 제어 · 날씨 API' },
        { member: '팀장', part: '웹소켓 기반 좌석 예약 시스템 · 서류 작성' },
        { member: '팀원 A', part: '랜딩페이지 · 결제 시스템' },
        { member: '팀원 B', part: 'LMS 페이지 · 인프라 구축' },
        { member: '팀원 C', part: '커뮤니티 · 결제 시스템' },
      ],
      en: [
        { member: '담당 (PL)', part: 'Admin dashboard · University data loading · AI chatbot · Course registration concurrency control · Weather API' },
        { member: 'Lead', part: 'WebSocket-based seat reservation system · Documentation' },
        { member: 'Teammate A', part: 'Landing page · Payment system' },
        { member: 'Teammate B', part: 'LMS page · Infrastructure' },
        { member: 'Teammate C', part: 'Community · Payment system' },
      ],
    },
    thumbnail: 'univus.png',
    overview: {
      ko: '전국 325개 대학 데이터를 기반으로 한 B2B 캠퍼스 종합 ERP 플랫폼입니다. 수강신청·성적 관리·공지사항·AI 챗봇 등 대학 운영 전반의 기능을 제공하며, Spring Boot 백엔드와 React 프론트엔드를 분리한 구조로 Docker 기반 CI/CD 파이프라인을 통해 배포합니다.',
      en: 'A B2B campus ERP platform built on data from 325 universities nationwide, covering course registration, grade management, announcements, and an AI chatbot. Spring Boot backend and React frontend are deployed via a Docker-based CI/CD pipeline.',
    },
    problem: {
      ko: ['대학생이 학교 정보, 커뮤니티, 날씨 등 다양한 정보를 한 곳에서 확인하기 어려웠습니다.', '전국 대학 정보가 통합된 커뮤니티 서비스가 없었습니다.', '관리자가 사용자 계정과 공지사항을 효율적으로 관리할 수 있는 시스템이 부족했습니다.'],
      en: ['Students had difficulty accessing university info, community, and weather all in one place.', 'No integrated community service covered universities nationwide.', 'An admin system to efficiently manage accounts and announcements was lacking.'],
    },
    solution: {
      ko: ['교육통계센터 기반 전국 325개 대학 데이터를 수집·SQL 변환하여 DB에 적재했습니다.', '관리자 대시보드에서 계정 일괄 관리, 공지사항 CRUD 기능을 구현했습니다.', 'Groq LLM과 pgvector 기반 RAG를 연동해 약 300개 문서를 임베딩하고 유사도 검색 기반 챗봇 응답을 생성했습니다.', '수강신청 동시 요청에 대비해 Redis 분산 락과 DB 비관적 락을 결합한 3중 방어 로직을 구현하고, k6로 99명 동시 부하 테스트를 통해 검증했습니다.', 'OpenWeatherMap API를 연동해 GPS 기반 실시간 날씨 데이터를 가공·노출했습니다.'],
      en: ['Collected and loaded 325 university datasets from the Education Statistics Center via SQL conversion.', 'Built an admin dashboard with bulk account management and announcement CRUD.', 'Integrated Groq LLM with pgvector-based RAG, embedding ~300 documents and generating chatbot responses via similarity search.', 'Implemented triple-layer protection against concurrent course registration using Redis distributed locks and DB pessimistic locks, verified with k6 load testing at 99 concurrent users.', 'Integrated OpenWeatherMap API for GPS-based real-time weather data processing and display.'],
    },
    contribution: {
      ko: ['백엔드 개발 (ADM·HOM 모듈) — 관리자 대시보드 계정 일괄 생성·수정·삭제, 활동 정지·탈퇴 처리, 공지사항 CRUD', 'AI 챗봇 구현 — Groq LLM + pgvector RAG, 약 300개 문서 임베딩 및 유사도 검색 기반 응답 생성', '수강신청 동시성 제어 — Redis 분산 락 + DB 비관적 락 3중 방어 설계, k6로 99명 동시 부하 테스트 검증', '전국 325개 대학 데이터 수집·가공·DB 적재 — 교육통계센터 기반 SQL 변환 및 일괄 적재', 'OpenWeatherMap API 연동 — GPS 기반 실시간 날씨 데이터 가공·노출'],
      en: ['Backend development (ADM · HOM modules) — admin dashboard with bulk account create/update/delete, suspension & withdrawal, announcement CRUD', 'Implemented AI chatbot — Groq LLM + pgvector RAG, embedding ~300 documents and generating responses via similarity search', 'Built concurrency control for course registration — triple-layer protection with Redis distributed locks + DB pessimistic locks, verified via k6 at 99 concurrent users', 'Collected, processed, and loaded 325 university datasets — SQL conversion and bulk DB load from Education Statistics Center', 'Integrated OpenWeatherMap API — GPS-based real-time weather data processing and display'],
    },
    troubleshooting: [
      {
        issue: { ko: '일괄 회원가입 엑셀 업로드 시 휴대폰번호 앞자리 0 유실 (01012345678 → 1012345678)', en: 'Leading zero dropped from phone numbers during bulk signup Excel upload (01012345678 → 1012345678)' },
        cause: { ko: 'xlsx 라이브러리가 엑셀 셀을 파싱할 때 서식이 지정되지 않은 숫자형 셀을 JavaScript number로 변환하면서 leading zero가 소실됩니다. 사용자가 엑셀에서 해당 컬럼을 텍스트 서식으로 직접 지정하지 않으면 휴대폰번호·로그인ID·생년월일 모두 동일한 문제가 발생합니다.', en: 'The xlsx library converts unformatted numeric cells to JavaScript numbers during parsing, stripping leading zeros. Without explicit text formatting in Excel, phone numbers, login IDs, and birth dates all suffered the same issue.' },
        fix: { ko: '두 단계로 대응했습니다. 첫째, 파싱 단계에서 비숫자 문자를 제거한 뒤 10자리이면 앞에 0을 붙여 복원합니다(phoneNumber.length === 10 → "0" + phoneNumber). 둘째, 템플릿 다운로드 시 로그인ID·휴대폰번호·생년월일 컬럼(500행)에 미리 텍스트 서식(t: "s", z: "@")을 적용해 엑셀이 입력값을 숫자로 자동변환하지 못하도록 원천 차단했습니다.', en: 'Two-pronged fix: first, after stripping non-digits during parsing, if the result is 10 digits it is prefixed with "0" to restore the lost zero. Second, when generating the download template, text format (t: "s", z: "@") is pre-applied to the login ID, phone number, and birth date columns for 500 rows, preventing Excel from auto-converting inputs to numbers.' },
      },
      {
        issue: { ko: '수강신청 동기 → 비동기 구조 전환 — 스레드 블로킹·응답 지연·정원 초과 문제 해결', en: 'Course enrollment refactored from synchronous to async — resolved thread blocking, timeouts, and over-enrollment' },
        cause: { ko: '초기 구현에서는 수강신청 요청을 HTTP 스레드에서 직접 Redis 락 획득 → DB 검증 → INSERT 까지 동기로 처리했습니다. k6로 99명 동시 부하를 가했을 때 락 획득 대기 중 HTTP 스레드가 점유된 채 블로킹되어 스레드 풀이 고갈됐고, 일부 요청은 락 경쟁에서 밀려 타임아웃 후 재시도하면서 정원 초과 등록이 발생했습니다.', en: 'In the initial implementation, enrollment was handled synchronously within the HTTP thread — acquiring a Redis lock, validating capacity, and inserting in sequence. Under a k6 load of 99 concurrent users, threads were blocked waiting for lock acquisition, exhausting the thread pool. Some requests timed out and retried, resulting in over-enrollment beyond the course capacity.' },
        fix: { ko: '요청 수신 즉시 UUID requestId를 발급하고 202 Accepted를 반환해 HTTP 스레드를 해방시켰습니다. 실제 처리는 BlockingQueue에 EnrollJob을 적재하고, 별도의 워커 스레드 풀이 강좌별 Redis 분산 락(tryLock 3s) → SELECT FOR UPDATE DB 비관적 락 → 정원·시간표 검증 → INSERT 순서로 직렬 처리합니다. 처리 결과는 WebSocket(STOMP) /user/queue/lms/enroll-result 채널로 해당 학생에게 개별 푸시하여, 클라이언트가 폴링 없이 실시간으로 성공·실패 여부를 수신할 수 있도록 했습니다.', en: 'On request receipt, a UUID requestId is immediately issued and a 202 Accepted is returned, freeing the HTTP thread. The actual work is placed as an EnrollJob in a BlockingQueue, where a dedicated worker thread pool processes each job serially: Redis distributed lock (tryLock 3s) → SELECT FOR UPDATE pessimistic DB lock → capacity/timetable validation → INSERT. Results are pushed individually to each student via WebSocket (STOMP) on the /user/queue/lms/enroll-result channel, allowing clients to receive success or failure in real time without polling.' },
      },
    ],
    techStack: 'Java 21 · Spring Boot · MyBatis · Oracle · PostgreSQL · Redis · Groq · Next.js · TypeScript · Docker',
    github: 'https://github.com/Univ-US/univ-us-be',
    reportUrl: `${BASE}assets/docs/univus-report.pdf`,
    images: [
      { src: 'projects/univus/home.png', caption: { ko: '학생 홈 — 대학 정보·실시간 날씨·커뮤니티를 한 화면에서 확인할 수 있는 홈입니다.', en: 'Student Home — university info, real-time weather, and community in one screen.' }, isErd: false },
      { src: 'projects/univus/dashboard.png', caption: { ko: '관리자 대시보드 — 구독 플랜·회원 수·최근 활성 회원을 한눈에 확인하는 메인 화면입니다.', en: 'Admin Dashboard — subscription plan, member count, and recent active members at a glance.' }, isErd: false },
      { src: 'projects/univus/members.png', caption: { ko: '회원 관리 — 전체 127명 회원 조회·엑셀 내보내기·일괄 가입 기능을 제공하는 관리 화면입니다.', en: 'Member Management — view 127 members, export to Excel, and bulk registration in one admin view.' }, isErd: false },
      { src: 'projects/univus/k6-result-1.png', caption: { ko: 'k6 부하 테스트 (1) — 정원 30명 강좌에 40명 동시 신청, 정원 초과 없이 동시성 제어 정상 동작', en: 'k6 Load Test (1) — 40 concurrent requests for a 30-seat course, concurrency control verified with zero overrun.' }, isErd: false },
      { src: 'projects/univus/k6-result-2.png', caption: { ko: 'k6 부하 테스트 (2) — 요청·응답 지표 상세', en: 'k6 Load Test (2) — detailed request/response metrics.' }, isErd: false },
      { src: 'projects/univus/architecture.png', caption: { ko: 'Architecture — CI/CD 파이프라인부터 Spring Boot 백엔드, 외부 API 연동까지 전체 시스템 구조입니다.', en: 'Architecture — full system structure from the CI/CD pipeline through the Spring Boot backend to external API integrations.' }, isErd: true },
      { src: 'projects/univus/menu-structure.png', caption: { ko: '메뉴 구조도 — 학생·교수·커뮤니티·관리자 등 역할별 화면 구성입니다.', en: 'Menu Structure — role-based screen layout for students, professors, community, and admins.' }, isErd: true },
      { src: 'projects/univus/seq-enroll.png', caption: { ko: '수강신청 동시성 시퀀스 — 비동기 큐 → Redis tryLock → SELECT FOR UPDATE 3중 방어 흐름입니다.', en: 'Course Enrollment Concurrency — async queue → Redis tryLock → SELECT FOR UPDATE triple-layer defense flow.' }, isErd: true },
      { src: 'projects/univus/ai-sequence.png', caption: { ko: 'AI 챗봇 시퀀스 — Ollama 임베딩 → pgvector 유사도 검색 → Groq LLM → SSE 스트리밍 전체 흐름입니다.', en: 'AI Chatbot Sequence — full flow: Ollama embedding → pgvector similarity search → Groq LLM → SSE streaming.' }, isErd: true },
    ],
    results: {
      ko: ['관리자 대시보드에서 전체 사용자 계정 관리 및 공지사항 CRUD 기능을 구현했습니다.', 'GitHub Actions · Docker 기반 CI/CD 파이프라인을 구성하고 실배포를 완료했습니다.', '커뮤니티 핵심 기능을 포함한 서비스 전체 기능 구현을 완료했습니다.'],
      en: ['Implemented full user account management and announcement CRUD in the admin dashboard.', 'Configured CI/CD pipeline with GitHub Actions and Docker and completed live deployment.', 'Completed full service implementation including core community features.'],
    },
    insight: {
      ko: '실제 동시 접속 트래픽 상황을 k6로 시뮬레이션하며 동시성 문제를 3중으로 방어한 경험이 인상적이었습니다. Redis 분산 락과 DB 비관적 락을 조합해 단 한 건의 중복도 없이 통과시키면서, 동시성은 단순한 락 하나로 해결되지 않는다는 걸 몸으로 배웠습니다. AI 챗봇 RAG 파이프라인 설계를 통해 LLM 활용 실무 역량도 쌓을 수 있었고, 데이터 준비의 품질이 모델만큼 중요하다는 것도 실감했습니다. PL로서 아키텍처 전반을 주도하면서 기술 선택 하나하나가 팀 전체의 속도와 완성도에 직결된다는 책임감을 처음으로 느꼈습니다. 아쉬운 점은 기능 구현에 집중하다 테스트 코드를 거의 작성하지 못한 것과, 수강신청을 동기 방식으로 먼저 구현하고 문제가 생긴 뒤 비동기로 재설계한 것입니다. 다음엔 AI 챗봇을 멀티턴 대화 구조로 개선하고, 도메인별 마이크로서비스 분리도 시도해보고 싶습니다.',
      en: 'Simulating real concurrent traffic with k6 and defending against race conditions with a triple-layer protection was one of the most impactful experiences of this project. Combining Redis distributed locks with DB pessimistic locks to achieve zero over-enrollment taught me that concurrency can\'t be solved with a single lock. Designing the AI chatbot RAG pipeline built practical LLM skills and showed me that data quality matters as much as the model. Leading the full architecture as PL made me feel firsthand that every technical decision shapes the team\'s pace and quality. Regrets: almost no test coverage, and rebuilding enrollment from synchronous to async only after problems appeared. Next: upgrade the chatbot to multi-turn conversation and explore microservice separation by domain.',
    },
    techReason: [
      { tech: 'Redis', reason: { ko: '수강신청 동시성 제어를 위해 분산 락이 필요했고, in-memory 특성으로 락 획득·해제가 빠르며 TTL 기반 자동 만료로 데드락 위험도 줄일 수 있어 선택했습니다.', en: 'Distributed locking was required for concurrency control; in-memory speed made lock acquisition fast, and TTL-based auto-expiry reduced deadlock risk.' } },
      { tech: 'Oracle + PostgreSQL', reason: { ko: '운영 DB는 교육과정 표준인 Oracle을 사용했고, AI 챗봇 도메인은 벡터 유사도 검색을 위한 pgvector 확장이 필요해 PostgreSQL을 별도로 채택했습니다.', en: 'Oracle was used as the main DB per curriculum standard; PostgreSQL was added for the AI domain due to its pgvector extension for vector similarity search.' } },
      { tech: 'Next.js + TypeScript', reason: { ko: '대학 정보 페이지는 SEO와 SSR이 중요했고, 5인 팀 협업에서 타입 안정성 확보를 위해 TypeScript와 함께 선택했습니다.', en: 'University info pages needed SSR for SEO; TypeScript was chosen alongside Next.js for type safety in a 5-person team.' } },
      { tech: 'Docker + GitHub Actions', reason: { ko: '팀원 5명의 개발 환경을 통일하고 PR 머지 시 자동 빌드·배포가 되는 CI/CD 파이프라인을 직접 구성하기 위해 채택했습니다.', en: 'Unified dev environments for 5 members and set up automated build/deploy on PR merge via a self-configured CI/CD pipeline.' } },
    ],
  },
  {
    id: 'pawpaw',
    year: '2026',
    name: 'PawPaw',
    role:    { ko: '풀스택 개발자', en: 'Full-Stack Developer' },
    summary: { ko: '반려동물 종합 플랫폼', en: 'Comprehensive Pet Platform' },
    date: '2026.03 ~ ing',
    team:    { ko: '풀스택 2', en: 'Full-Stack 2' },
    highlights: {
      ko: ['12개 도메인 분리 REST API', 'WebSocket(STOMP) 실시간 채팅', 'JWT + Spring Security · Kakao API 연동'],
      en: ['12-domain REST API design', 'Real-time chat via WebSocket (STOMP)', 'JWT + Spring Security · Kakao API'],
    },
    teamBreakdown: {
      ko: [
        { member: '담당', part: 'JWT 인증 · 산책 매칭·병원 리뷰 API · 실시간 채팅 · 카카오 API 연동' },
        { member: '팀원', part: '커뮤니티 · 홈 대시보드 · 마이페이지' },
      ],
      en: [
        { member: '담당', part: 'JWT auth · Walk matching & hospital review API · Real-time chat · Kakao API integration' },
        { member: 'Teammate', part: 'Community · Home dashboard · My page' },
      ],
    },
    thumbnail: 'pawpaw.png',
    overview: {
      ko: '반려동물 보호자들이 정보를 공유하고 소통할 수 있는 커뮤니티 기반 서비스를 목표로, 백엔드 중심의 REST API를 설계 및 구현하고 있습니다. 커뮤니티, 산책 매칭, 병원 리뷰 기능을 포함한 구조로 설계하고 있으며, 실시간 채팅 기능을 함께 개발하고 있습니다.',
      en: 'Building a REST API-centered backend for a pet owner community covering posts, walk matching, and hospital reviews, with real-time chat for user interaction.',
    },
    problem: {
      ko: ['반려동물 관련 정보가 여러 플랫폼에 분산되어 있어 한 곳에서 확인하기 어려웠습니다.', '동물병원 리뷰 정보가 부족하거나 흩어져 있어 병원 선택에 불편을 겪었습니다.', '다양한 기능을 하나의 서비스로 통합하고 사용자 간 소통을 강화할 구조가 필요했습니다.'],
      en: ['Pet-related info was scattered across platforms, making it hard to find in one place.', 'Vet reviews were sparse, causing difficulty choosing hospitals.', 'A unified structure integrating multiple features and enhancing communication was needed.'],
    },
    solution: {
      ko: ['커뮤니티, 산책 매칭, 병원 리뷰 등 12개 도메인으로 분리한 REST API를 설계했습니다.', 'WebSocket(STOMP)을 활용한 실시간 채팅 기능을 구현했습니다.', '카카오 API를 연동하여 동물병원 검색 기능을 확장했습니다.'],
      en: ['Designed REST APIs separated into 12 domains including community, walk matching, and hospital reviews.', 'Implemented real-time chat with WebSocket (STOMP).', 'Extended hospital search via Kakao API integration.'],
    },
    contribution: {
      ko: ['JWT 기반 인증 및 사용자 권한 처리 로직 구현', '커뮤니티·산책 매칭·병원 리뷰 등 12개 도메인 REST API 설계 및 개발', 'WebSocket(STOMP) 기반 실시간 채팅 기능 구현', '외부 API 연동을 통한 데이터 확장 기능 구현'],
      en: ['Implemented JWT-based auth and authorization', 'Designed and developed 12-domain REST APIs including community, walk matching, and hospital reviews', 'Built real-time chat with WebSocket (STOMP)', 'Extended data features via external API integration'],
    },
    techStack: 'Java 17 · Spring Boot · JPA · MySQL · JWT · Spring Security · WebSocket · STOMP · React',
    github: 'https://github.com/eongeung/pawpaw-backend',
    images: [
      { src: 'projects/pawpaw/community.png', caption: { ko: '커뮤니티 화면 — 게시글 작성과 조회가 가능한 커뮤니티 UI입니다.', en: 'Community — UI for writing and browsing posts.' }, isErd: false },
      { src: 'projects/pawpaw/chat.png', caption: { ko: '실시간 채팅 화면 — WebSocket(STOMP) 기반으로 메시지를 주고받는 화면입니다.', en: 'Real-time Chat — exchanges messages via WebSocket (STOMP).' }, isErd: false },
      { src: 'projects/pawpaw/arch1.png', caption: { ko: 'ERD — 커뮤니티·채팅 도메인을 포함한 데이터베이스 구조입니다.', en: 'ERD — database structure covering community and chat domains.' }, isErd: true },
      { src: 'projects/pawpaw/arch2.png', caption: { ko: 'Architecture — 백엔드 서비스 전체 구조도입니다.', en: 'Architecture — overall backend service structure.' }, isErd: true },
    ],
    results: {
      ko: ['커뮤니티 게시글 작성 및 조회 기능 UI를 구현했습니다.', 'WebSocket 기반 실시간 채팅 기능을 구현하고 메시지 송수신 흐름을 확인했습니다.', '현재 산책 매칭 및 병원 리뷰 기능을 포함한 서비스 확장을 진행 중입니다.'],
      en: ['Implemented community post creation and listing UI.', 'Built WebSocket-based real-time chat and verified message flow.', 'Currently expanding to include walk matching and hospital review features.'],
    },
    insight: {
      ko: '12개 도메인으로 API를 분리하면서, 설계 단계에서 경계를 명확히 잡지 않으면 기능이 늘어날수록 코드가 뒤엉킨다는 걸 직접 경험했습니다. WebSocket(STOMP) 기반 실시간 채팅을 구현하면서는 HTTP와 다른 연결 유지 방식과 메시지 흐름을 몸으로 익혔고, JWT 인증 흐름을 처음부터 구현하며 보안 설계가 기능만큼 중요하다는 점을 다시 확인했습니다. 진행 중인 프로젝트라 아직 완성 전이지만, 초기에 도메인 경계를 느슨하게 잡은 부분이 기능이 늘면서 의존성을 복잡하게 만들고 있어 다음엔 도메인 책임을 처음부터 더 엄격하게 정의하고 싶습니다. 추가로 구현할 계획은 알림 시스템, 지도 기반 산책 매칭 시각화, 병원 리뷰 신뢰도 검증입니다.',
      en: 'Splitting into 12 domains taught me that loose boundaries at the design stage cause entanglement as features grow. WebSocket (STOMP) gave me hands-on experience with persistent connections, and building JWT auth from scratch reinforced that security design matters as much as features. Still in progress — loosely defined domains early on are already creating dependency complexity, so next time I\'d define responsibilities strictly from day one. Planned additions: notification system, map-based walk matching, and review credibility validation.',
    },
    techReason: [
      { tech: 'JPA', reason: { ko: 'MyBatis 대비 객체 중심 설계를 경험하고 싶었고, 12개 도메인 간 연관관계를 ORM으로 명확하게 표현하기 위해 선택했습니다.', en: 'Wanted to experience object-centric design over MyBatis, and chose JPA to express relationships across 12 domains clearly via ORM.' } },
      { tech: 'WebSocket / STOMP', reason: { ko: '실시간 채팅에 HTTP 폴링 대신 영속 연결이 필요했고, STOMP 프로토콜로 메시지 채널 구독 구조를 명확하게 표현할 수 있었습니다.', en: 'Persistent connection over HTTP polling was needed for real-time chat; STOMP provided a clean channel subscription model.' } },
      { tech: 'JWT', reason: { ko: 'Stateless 인증 구조가 REST API와 잘 맞고, 세션 저장 없이 수평 확장 가능한 구조를 목표로 채택했습니다.', en: 'Stateless auth fits REST API design well, and JWT enables horizontal scaling without server-side session storage.' } },
    ],
  },
];

function getTechColor(tech) {
  const t = tech.toLowerCase();
  if (/java(\s*(17|21))?$|spring|jpa|mybatis/.test(t)) return 'chip-green';
  if (/react|next\.?js|typescript|javascript/.test(t)) return 'chip-cyan';
  if (/flutter|dart/.test(t)) return 'chip-blue';
  if (/mysql|postgresql|oracle|mongodb/.test(t)) return 'chip-violet';
  if (/redis/.test(t)) return 'chip-red';
  if (/docker|jenkins|aws|nginx|github actions/.test(t)) return 'chip-slate';
  if (/python|opencv|mediapipe|django|yolo|groq/.test(t)) return 'chip-amber';
  if (/arduino|raspberry/.test(t)) return 'chip-pink';
  if (/jwt|security|oauth/.test(t)) return 'chip-purple';
  if (/ethereum|blockchain/.test(t)) return 'chip-teal';
  return 'chip-default';
}

function TechChips({ stack, limit }) {
  const chips = stack.split(' · ');
  const shown = limit ? chips.slice(0, limit) : chips;
  const rest = limit && chips.length > limit ? chips.length - limit : 0;
  return (
    <div className="tech-chips">
      {shown.map(tech => (
        <span key={tech} className={`tech-chip ${getTechColor(tech)}`}>{tech}</span>
      ))}
      {rest > 0 && <span className="tech-chip chip-more">+{rest}</span>}
    </div>
  );
}

function PinnedProject({ project, lang, onClick }) {
  const t = (obj) => obj[lang] || obj.ko;
  return (
    <div className="pl-pinned" onClick={onClick}>
      <div className="plp-eyebrow">
        <span>★ PINNED</span>
        {project.date.includes('ing') && <span className="plp-active">ACTIVE</span>}
      </div>
      <div className="plp-header">
        <h2 className="plp-name">{project.name}</h2>
        <span className="plp-year">{project.year}</span>
      </div>
      <p className="plp-summary">{t(project.summary)}</p>
      <ul className="plp-hl">
        {t(project.highlights).slice(0, 2).map((h, i) => <li key={i}>{h}</li>)}
      </ul>
      <div className="plp-footer">
        <span className="plp-role">{t(project.role)} · {t(project.team)}</span>
        <TechChips stack={project.techStack} limit={5} />
      </div>
      <div className="plp-bottom-row">
        {project.github && (
          <a className="proj-github-btn" href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
            GitHub ↗
          </a>
        )}
        <span className="plp-cta">{lang === 'ko' ? '자세히 보기' : 'View Details'} →</span>
      </div>
    </div>
  );
}

function ProjectRow({ project, lang, idx, onClick }) {
  const t = (obj) => obj[lang] || obj.ko;
  return (
    <div className="pl-row" onClick={onClick}>
      <span className="pl-num">{String(idx).padStart(2, '0')}</span>
      <div className="pl-info">
        <div className="pl-name">
          {project.name}
          {project.date.includes('ing') && <span className="pl-badge-active">ACTIVE</span>}
        </div>
        <div className="pl-sum">{t(project.summary)}</div>
        <div className="pl-meta">{t(project.role)} · {t(project.team)}</div>
      </div>
      <div className="pl-side">
        <span className="pl-year">{project.year}</span>
        <TechChips stack={project.techStack} limit={3} />
        {project.github && (
          <a className="proj-github-btn proj-github-sm" href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
            GitHub ↗
          </a>
        )}
        <span className="pl-arrow">→</span>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose, lang }) {
  const t = (obj) => obj[lang] || obj.ko;
  const resultImgs = project.images.filter(img => !img.isErd);
  const erdImgs = project.images.filter(img => img.isErd);
  const [lightbox, setLightbox] = useState(null);

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-sheet" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className={`modal-header${project.featured ? ' modal-header-featured' : ''}`}>
          <div className="modal-header-top">
            <span className="modal-year">{project.year}</span>
            {project.featured && <span className="modal-featured-badge">★ PINNED</span>}
            {project.date.includes('ing') && <span className="modal-live">ACTIVE</span>}
            {project.github && (
              <a className="proj-github-btn modal-github-btn" href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                GitHub ↗
              </a>
            )}
            {project.reportUrl && (
              <a className="proj-github-btn modal-github-btn modal-report-btn" href={project.reportUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                {lang === 'ko' ? '리포트북 ↗' : 'Report ↗'}
              </a>
            )}
          </div>
          <h1 className="modal-title">{project.name}</h1>
          <p className="modal-subtitle">{t(project.summary)}</p>
        </div>

        <div className="modal-info">
          <div className="modal-props">
            <div className="mprop"><span className="mk">Role</span><span className="mv">{t(project.role)}</span></div>
            <div className="mprop"><span className="mk">Team</span><span className="mv">{t(project.team)}</span></div>
            <div className="mprop"><span className="mk">Period</span><span className="mv">{project.date}</span></div>
          </div>

          <div className="modal-stack">
            <span className="info-label">Tech Stack</span>
            <TechChips stack={project.techStack} />
          </div>

          {project.teamBreakdown && (
            <div className="modal-breakdown">
              <span className="info-label">{lang === 'ko' ? '팀 구성' : 'Team Breakdown'}</span>
              <table className="team-table">
                <tbody>
                  {t(project.teamBreakdown).map((row, i) => (
                    <tr key={i} className={i === 0 ? 'team-self' : ''}>
                      <td className="team-member">{row.member}</td>
                      <td className="team-part">{row.part}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="modal-body">
          <div className="ms ms-contrib-section">
            <div className="ms-label">01 / MY CONTRIBUTION</div>
            <table className="contrib-table">
              <tbody>
                {t(project.contribution).map((item, i) => (
                  <tr key={i}>
                    <td className="contrib-idx">{String(i + 1).padStart(2, '0')}</td>
                    <td className="contrib-item">{item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="ms">
            <div className="ms-label">02 / BACKGROUND</div>
            <p className="ms-text">{t(project.overview)}</p>
            <ul className="ms-list ms-bg-problem">
              {t(project.problem).map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          <div className="ms">
            <div className="ms-label">03 / RESULTS</div>
            <ul className="ms-list">
              {t(project.results).map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            {resultImgs.length > 0 && (
              <div className="ms-images">
                {resultImgs.map((img, i) => (
                  <figure key={i} className="ms-figure">
                    <div className="ms-thumb" onClick={() => setLightbox({ src: `${BASE}assets/images/${img.src}`, caption: t(img.caption) })}>
                      <img src={`${BASE}assets/images/${img.src}`} alt={t(img.caption)} />
                    </div>
                    <figcaption>{t(img.caption)}</figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>

          {project.troubleshooting && project.troubleshooting.length > 0 && (
            <div className="ms">
              <div className="ms-label">04 / TROUBLESHOOTING</div>
              <div className="ts-list">
                {project.troubleshooting.map((item, i) => (
                  <div key={i} className="ts-item">
                    <div className="ts-issue">{t(item.issue)}</div>
                    <div className="ts-row"><span className="ts-tag ts-tag-cause">CAUSE</span><span className="ts-body">{t(item.cause)}</span></div>
                    <div className="ts-row"><span className="ts-tag ts-tag-fix">FIX</span><span className="ts-body">{t(item.fix)}</span></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.techReason && project.techReason.length > 0 && (
            <div className="ms">
              <div className="ms-label">05 / TECH CHOICES</div>
              <div className="tr-list">
                {project.techReason.map((item, i) => (
                  <div key={i} className="tr-item">
                    <span className="tr-tech">{item.tech}</span>
                    <span className="tr-reason">{t(item.reason)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="ms">
            <div className="ms-label">06 / INSIGHT</div>
            <div className="ms-insight-block">
              <p className="ms-insight-text">{t(project.insight)}</p>
            </div>
          </div>

          {erdImgs.length > 0 && (
            <div className="ms">
              <div className="ms-label">07 / ERD · ARCHITECTURE</div>
              <div className="ms-images">
                {erdImgs.map((img, i) => (
                  <figure key={i} className="ms-figure">
                    <div className="ms-thumb" onClick={() => setLightbox({ src: `${BASE}assets/images/${img.src}`, caption: t(img.caption) })}>
                      <img src={`${BASE}assets/images/${img.src}`} alt={t(img.caption)} />
                    </div>
                    <figcaption>{t(img.caption)}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox-overlay" onClick={e => { e.stopPropagation(); setLightbox(null); }}>
          <button className="lightbox-close" onClick={e => { e.stopPropagation(); setLightbox(null); }}>✕</button>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.caption} className="lightbox-img" />
            <p className="lightbox-caption">{lightbox.caption}</p>
          </div>
        </div>
      )}
    </div>,
    document.body
  );
}

export default function Projects() {
  const { lang } = useLang();
  const [selected, setSelected] = useState(null);

  const featured = PROJECTS.find(p => p.featured);
  const listProjects = PROJECTS.filter(p => !p.featured);

  return (
    <section id="projects" data-reveal>
      <h1>Projects</h1>

      <div className="project-list" data-reveal="stagger">
        {featured && (
          <PinnedProject project={featured} lang={lang} onClick={() => setSelected(featured)} />
        )}

        {listProjects.length > 0 && (
          <div className="pl-label">
            {lang === 'ko' ? '전체 프로젝트' : 'All Projects'}
          </div>
        )}

        {listProjects.map((p, i) => (
          <ProjectRow key={p.id} project={p} lang={lang} idx={i + 1} onClick={() => setSelected(p)} />
        ))}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} lang={lang} />
      )}
    </section>
  );
}
