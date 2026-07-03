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
  {
    id: 'frankly',
    year: '2026',
    name: 'Frankly',
    role:    { ko: '백엔드 개발자', en: 'Backend Developer' },
    summary: { ko: '익명 커뮤니티 REST API', en: 'Anonymous Community REST API' },
    date: '2026.03 ~ 2026.04',
    team:    { ko: '백엔드 1', en: 'Backend 1' },
    highlights: {
      ko: ['JWT Access/Refresh 인증 구현', 'S3 Presigned URL 이미지 업로드', 'GitHub Actions CI/CD + EC2 배포'],
      en: ['JWT Access/Refresh auth', 'S3 Presigned URL image upload', 'GitHub Actions CI/CD + EC2 deploy'],
    },
    teamBreakdown: null,
    thumbnail: 'frankly.png',
    overview: {
      ko: '눈치 보지 않고 자유롭게 의견을 나눌 수 있도록, 익명 기반 커뮤니티 서비스를 위한 REST API를 설계 및 구현했습니다. 사용자 인증부터 게시글, 댓글, 좋아요, 이미지 업로드까지 커뮤니티의 핵심 기능을 백엔드 중심으로 구축했습니다.',
      en: 'Designed and implemented a REST API for an anonymous community where users can share opinions freely. Built core features including auth, posts, comments, likes, and image uploads.',
    },
    problem: {
      ko: ['기존 커뮤니티에서는 사용자 신원이 노출되어 자유로운 의견 표현에 제약이 있었습니다.', '인증, 게시글, 댓글 등 다양한 기능이 통합된 구조가 필요했습니다.', '이미지 업로드 시 서버 부하를 줄이면서 안정적으로 처리할 수 있는 구조가 필요했습니다.'],
      en: ['Existing communities exposed user identities, limiting free expression.', 'A structure integrating auth, posts, comments, and more was needed.', 'A solution to handle image uploads without overloading the server was required.'],
    },
    solution: {
      ko: ['JWT 기반 인증/인가 시스템을 적용하여 안정적인 인증 구조를 설계했습니다.', '게시글, 댓글, 좋아요 기능을 REST API 형태로 분리하여 확장 가능한 구조로 구현했습니다.', 'S3 Presigned URL 방식으로 클라이언트가 직접 이미지를 업로드하도록 구성해 서버 부하를 줄였습니다.', 'GitHub Actions와 EC2를 활용해 CI/CD 환경을 구축했습니다.'],
      en: ['Applied JWT auth/authorization for a secure and stable auth structure.', 'Separated posts, comments, and likes into REST APIs for extensibility.', 'Used S3 Presigned URL for direct client-side image uploads, reducing server load.', 'Set up CI/CD with GitHub Actions and deployed to EC2.'],
    },
    contribution: {
      ko: ['Spring Boot 기반 REST API 설계 및 전체 백엔드 구조 구현', 'JWT Access/Refresh 토큰 기반 인증 및 권한 검증 로직 구현', '게시글, 댓글, 좋아요 기능 API 설계 및 개발', 'S3 Presigned URL을 활용한 이미지 업로드 구조 구현', 'GitHub Actions 기반 CI/CD 파이프라인 구성 및 EC2 배포'],
      en: ['Designed Spring Boot REST API and full backend structure', 'Implemented JWT Access/Refresh token auth and permission logic', 'Built posts, comments, and likes APIs', 'Implemented S3 Presigned URL image upload', 'Configured CI/CD pipeline with GitHub Actions and deployed to EC2'],
    },
    techStack: 'Java 17 · Spring Boot · JPA · PostgreSQL · JWT · AWS EC2 · RDS · S3 · nginx · GitHub Actions',
    github: 'https://github.com/eongeung/community-api',
    images: [
      { src: 'projects/frankly/swagger.png', caption: { ko: 'API 명세 — Swagger UI로 문서화한 전체 REST API 목록입니다.', en: 'API Docs — full REST API list documented via Swagger UI.' }, isErd: false },
      { src: 'projects/frankly/arch1.png', caption: { ko: 'ERD — 게시글·댓글·좋아요 등 커뮤니티 데이터 구조입니다.', en: 'ERD — community data structure covering posts, comments, and likes.' }, isErd: true },
      { src: 'projects/frankly/arch2.png', caption: { ko: 'Architecture — EC2 배포를 포함한 서비스 아키텍처입니다.', en: 'Architecture — service architecture including EC2 deployment.' }, isErd: true },
    ],
    results: {
      ko: ['Swagger UI를 통해 전체 API 명세를 문서화하고 주요 기능을 검증했습니다.', 'EC2 서버에 배포 후 실제 환경에서 API 요청 및 응답 흐름을 확인했습니다.', 'REST API 구조를 기반으로 커뮤니티 서비스의 핵심 기능을 안정적으로 구현했습니다.'],
      en: ['Documented all APIs via Swagger UI and verified core features.', 'Confirmed API request/response flow in a real EC2 deployment.', 'Stably implemented core community service features with REST API.'],
    },
    insight: {
      ko: '인증, 게시글, 댓글 등 다양한 기능을 하나의 서비스로 통합하는 백엔드 구조 설계 경험을 쌓았고, CI/CD 환경을 직접 구성하며 서버 운영 흐름도 익혔습니다. 1인 개발이라 코드 리뷰가 없었고, 돌아보면 API 응답 형식과 예외 처리 구조가 일관되지 않은 부분이 있습니다. Swagger 문서화를 막바지에 몰아서 작성한 것도 아쉬웠는데, 처음부터 병행했다면 설계 오류를 일찍 잡을 수 있었을 겁니다. 추가로 구현하고 싶었던 건 게시글 검색·필터와 신고·차단 기능입니다.',
      en: 'Gained experience designing a backend integrating auth, posts, and comments, and learned server operations by setting up CI/CD from scratch. Solo development meant no code review — looking back, API response formats and exception handling are inconsistent in places. Writing Swagger docs all at the end was a mistake; doing it alongside development would have caught design issues earlier. Features I wanted to add: post search/filter and report/block.',
    },
    techReason: [
      { tech: 'S3 Presigned URL', reason: { ko: '이미지 업로드 트래픽을 서버를 거치지 않고 클라이언트가 S3에 직접 올리게 해 서버 부하와 전송 비용을 줄였습니다.', en: 'Clients upload directly to S3 without routing through the server, reducing server load and transfer costs.' } },
      { tech: 'PostgreSQL', reason: { ko: 'JSON 타입 지원과 고급 인덱싱이 강력하고, 향후 기능 확장 시 유연성을 고려해 MySQL 대신 선택했습니다.', en: 'Chosen over MySQL for stronger JSON support and advanced indexing, with flexibility for future feature growth in mind.' } },
      { tech: 'GitHub Actions + EC2', reason: { ko: 'PR 머지 시 자동 빌드·배포가 되는 CI/CD를 직접 구성해보고 싶었고, 비용 효율적인 EC2 단일 서버 구조로 먼저 경험해보기 위해 선택했습니다.', en: 'Wanted to self-configure automated build and deploy on PR merge, starting with a cost-effective single EC2 instance.' } },
    ],
  },
  {
    id: 'aeropick',
    year: '2025',
    name: 'AeroPick',
    role:    { ko: '소프트웨어 개발자 (앱 · 백엔드 · HW 연동)', en: 'Software Developer (App · Backend · HW)' },
    summary: { ko: '공항 체험형 모션 인식 가챠 시스템', en: 'Airport Motion-Recognition Gacha System' },
    date: '2025.09 ~ 2025.12',
    team:    { ko: 'PM 1 · 디자이너 2 · 미디어 2 · SW 1', en: 'PM 1 · Designer 2 · Media 2 · SW 1' },
    highlights: {
      ko: ['Flutter 앱 + Spring Boot + Arduino/Raspberry Pi 연동', 'Kakao OAuth2 → QR 스캔 → 스탬프 적립 파이프라인'],
      en: ['Flutter app + Spring Boot + Arduino/Raspberry Pi integration', 'Kakao OAuth2 → QR scan → stamp collection pipeline'],
    },
    teamBreakdown: {
      ko: [
        { member: '담당', part: 'Flutter 앱 · Spring Boot API · Arduino Raspberry Pi 가챠 연동' },
        { member: '하드웨어 개발자', part: 'Arduino · Raspberry Pi 하드웨어 설계 및 구현' },
        { member: 'PM', part: '기획 및 프로젝트 관리' },
        { member: '디자이너 2', part: 'UI 디자인 · 시각 자료' },
        { member: '미디어 2', part: '영상 제작 · 발표 자료' },
      ],
      en: [
        { member: '담당', part: 'Flutter app · Spring Boot API · Arduino/Raspberry Pi gacha integration' },
        { member: 'HW Developer', part: 'Arduino · Raspberry Pi hardware design & implementation' },
        { member: 'PM', part: 'Planning & project management' },
        { member: 'Designer ×2', part: 'UI design · Visual assets' },
        { member: 'Media ×2', part: 'Video production · Presentation' },
      ],
    },
    thumbnail: 'aeropick.png',
    overview: {
      ko: '청주공항 이용객 설문을 통해 공항 체험 콘텐츠 부족 문제를 확인하고, 모션 인식 기반 가챠 체험 시스템과 항공사 앱 스탬프 적립 기능을 연동한 참여형 공항 서비스를 설계하고 구현했습니다.',
      en: 'Identified a lack of airport experience content through user surveys, then designed and implemented an interactive gacha system with motion recognition and airline app stamp rewards.',
    },
    problem: {
      ko: ['청주공항 이용객 대상 설문에서 공항 내 즐길 거리 부족 의견을 확인했습니다.', '항공사 앱이 없어 고객 참여형 서비스가 부족한 상황이었습니다.', '공항 이용 경험을 기억에 남게 만들 방법이 필요했습니다.'],
      en: ['Surveys revealed a lack of entertainment options at Cheongju Airport.', 'No airline app meant no customer engagement service.', 'A way to make the airport experience memorable was needed.'],
    },
    solution: {
      ko: ['모션 인식 기반 가챠 시스템을 제작했습니다.', '가챠 결과 굿즈의 QR 코드를 스캔하면 카카오 OAuth2 로그인 후 항공사 앱에서 스탬프 적립과 쿠폰 발급이 이루어지는 구조를 구현했습니다.'],
      en: ['Built a motion-recognition gacha device.', 'Implemented a flow where scanning the QR code triggers Kakao OAuth2 login, then stamp collection and coupon issuance in the airline app.'],
    },
    contribution: {
      ko: ['카카오 OAuth2 소셜 로그인 연동 Flutter 앱에서 QR 스캔·스탬프 적립·쿠폰 발급 화면 구현', 'Spring Boot 기반 스탬프 적립·쿠폰 발급 API와 데이터 저장 로직 설계', 'Arduino · Raspberry Pi 모션 인식 가챠 시스템과 앱 데이터 연동'],
      en: ['Implemented Kakao OAuth2 social login, QR scan, stamp collection, and coupon issuance screens in Flutter', 'Designed stamp & coupon issuance API and data storage logic with Spring Boot', 'Integrated Arduino · Raspberry Pi gacha device with app data'],
    },
    techStack: 'Java · Spring Boot · MySQL · Flutter · Dart · Arduino · Raspberry Pi',
    github: 'https://github.com/eongeung/aeropick-be',
    reportUrl: `${BASE}assets/docs/aeropick-report.pdf`,
    images: [
      { src: 'projects/aeropick/app2.png', caption: { ko: '앱 홈 화면 — Aero-K 항공권 예매 및 Aero Pick! 기능이 포함된 메인 화면입니다.', en: 'App Home — main screen with flight booking and Aero Pick! feature.' }, isErd: false, pair: true },
      { src: 'projects/aeropick/app.png', caption: { ko: '스탬프 적립 화면 — Aero Pick! 가챠 스탬프 적립 기능 화면입니다.', en: 'Stamp Screen — Aero Pick! gacha stamp accumulation feature.' }, isErd: false, pair: true },
      { src: 'projects/aeropick/erd.png', caption: { ko: 'ERD — 스탬프·쿠폰 적립 데이터 구조입니다.', en: 'ERD — data structure for stamp and coupon issuance.' }, isErd: true },
    ],
    results: {
      ko: ['Flutter 앱과 Spring Boot API, 하드웨어 가챠 시스템을 연결하는 서비스 파이프라인을 구축했습니다.', 'QR 스캔부터 스탬프 적립까지 실제 동작 흐름을 검증했습니다.'],
      en: ['Built a service pipeline connecting the Flutter app, Spring Boot API, and hardware gacha system.', 'Verified the complete flow from QR scan to stamp collection.'],
    },
    insight: {
      ko: 'Flutter 앱, Spring Boot API, Arduino·Raspberry Pi 가챠 시스템을 연결하며 서비스 전체 데이터 흐름을 설계하는 경험을 했습니다. 하드웨어·앱·서버를 혼자 연동하다 보니 각 레이어의 완성도보다 연결 자체에 집중하게 됐고, 앱의 예외 처리나 QR 스캔 실패 재시도 로직이 단순하게 처리된 것이 아쉽습니다. 시간이 더 있었다면 블루투스 또는 NFC 기반 연동도 시도해보고 싶었습니다.',
      en: 'Connecting the Flutter app, Spring Boot API, and hardware gacha system taught me the importance of end-to-end pipeline design. Integrating everything alone meant focusing on connections over refining each layer — exception handling and QR scan retry logic ended up too simple. Given more time, I\'d have explored Bluetooth or NFC-based integration.',
    },
    techReason: [
      { tech: 'Flutter', reason: { ko: '단일 코드베이스로 iOS·Android를 모두 지원해야 했고, 짧은 개발 기간에 1인이 앱 전체를 구현해야 해서 크로스플랫폼인 Flutter를 선택했습니다.', en: 'Needed to support both iOS and Android with a single codebase; Flutter let one developer build the full app within a tight schedule.' } },
      { tech: 'Spring Boot', reason: { ko: '스탬프 적립·쿠폰 발급 API를 빠르게 구성해야 했고, 팀 내 Java 기반 개발 경험을 활용할 수 있어 선택했습니다.', en: 'Needed to build stamp and coupon APIs quickly, leveraging the team\'s existing Java experience.' } },
    ],
  },
  {
    id: 'motowallet',
    year: '2025',
    name: 'MotoWallet',
    role:    { ko: '앱 개발자', en: 'App Developer' },
    summary: { ko: '자율주행 모빌리티 결제 시스템', en: 'Autonomous Mobility Payment System' },
    date: '2025.04 ~ 2025.10',
    team:    { ko: '백엔드 1 · 프론트엔드 1 · 앱 1 · HW 2', en: 'Backend 1 · Frontend 1 · App 1 · HW 2' },
    highlights: {
      ko: ['WebSocket으로 자율주행차 실시간 상태 연동 · YOLO 감지 이벤트 수신', '카카오 지도 탭 선택 + 역지오코딩 + Haversine 거리 기반 요금 산정', 'QR 스캔 → myt 토큰 즉시 차감 결제 흐름 구현'],
      en: ['Real-time vehicle status via WebSocket · YOLO detection event stream', 'Kakao Map tap + reverse geocoding + Haversine distance-based fare calc', 'QR scan → immediate myt token deduction payment flow'],
    },
    teamBreakdown: {
      ko: [
        { member: '담당', part: 'Flutter 앱 전체 · 모빌리티 화면 · 지갑 · 예산 관리 · WS 연동' },
        { member: '백엔드', part: '결제 서버 · 데이터 처리' },
        { member: '프론트엔드', part: '웹 대시보드' },
        { member: 'HW ×2', part: '자율주행 차량 모듈 · YOLO 카메라' },
      ],
      en: [
        { member: '담당', part: 'Full Flutter app · Mobility screen · Wallet · Budget · WS integration' },
        { member: 'Backend', part: 'Payment server · Data processing' },
        { member: 'Frontend', part: 'Web dashboard' },
        { member: 'HW ×2', part: 'Autonomous vehicle module · YOLO camera' },
      ],
    },
    thumbnail: 'motowallet.png',
    overview: {
      ko: '자율주행 차량과 WebSocket으로 실시간 연결해 호출·이동·결제 전 과정을 앱 안에서 처리하는 모빌리티 지갑 앱입니다. 카카오 지도에서 출발지·도착지를 선택하면 Haversine 공식으로 거리를 계산해 myt 토큰 요금을 산정하고, 도착 후 차량 QR을 스캔해 즉시 결제합니다. CBDC 구조를 참고한 토큰 결제 모델을 Flutter 크로스플랫폼으로 구현했습니다.',
      en: 'A mobility wallet app that connects to an autonomous vehicle via WebSocket to handle the full dispatch–ride–payment flow in-app. Selects origin/destination on Kakao Map, calculates fares using the Haversine formula, and completes payment by scanning the vehicle\'s QR code. Built on a CBDC-inspired token model with Flutter.',
    },
    problem: {
      ko: ['자율주행 서비스에서 이동 거리 기반 소액 결제가 빈번해 카드사를 거치지 않는 간단한 결제 구조가 필요했습니다.', '차량 상태(배차·이동·도착)를 앱에서 실시간으로 추적하고 사용자에게 보여줘야 했습니다.', '도착 즉시 결제가 이루어지도록 차량과 앱이 긴밀하게 연동되어야 했습니다.'],
      en: ['Frequent distance-based micro-payments required a simple flow without card intermediaries.', 'Vehicle state (dispatched · moving · arrived) needed real-time tracking in the app.', 'Payment had to trigger immediately on arrival, requiring tight vehicle-app integration.'],
    },
    solution: {
      ko: ['WebSocket으로 자율주행 차량과 실시간 연결해 TripPhase(배차→이동→도착→결제) 상태를 앱에 반영했습니다.', '카카오 지도 탭으로 출발지·도착지를 선택하고, Kakao Local API 역지오코딩으로 주소명을 표시했습니다.', '도착 후 차량 QR 스캔으로 금액을 파싱해 myt 토큰을 즉시 차감 결제했습니다.'],
      en: ['Connected to the vehicle via WebSocket to reflect TripPhase (paired → moving → arrived → paid) in real time.', 'Used Kakao Map tap selection with Kakao Local API reverse geocoding for address display.', 'Parsed fare from vehicle QR on arrival and deducted myt tokens instantly.'],
    },
    contribution: {
      ko: ['WebSocket 기반 TripSession 설계 — 배차·이동·도착·결제 상태 실시간 관리', '카카오 지도 탭 선택 · Kakao Local REST API 역지오코딩 · Haversine 요금 산정 구현', 'QR 스캔 → 금액 파싱 → myt 토큰 차감 결제 흐름 구현', '월별 이동 지출 추적 및 예산 한도 설정 기능 구현'],
      en: ['Designed WebSocket-based TripSession — real-time dispatch/ride/payment state management', 'Implemented Kakao Map tap selection, Kakao Local API reverse geocoding, and Haversine fare calculation', 'Built QR scan → amount parsing → myt token deduction payment flow', 'Implemented monthly mobility spend tracking and budget limit feature'],
    },
    techStack: 'Flutter · Dart · WebSocket · Kakao Map API · Spring Boot · MySQL',
    github: 'https://github.com/eongeung/molet-flutter',
    reportUrl: `${BASE}assets/docs/motowallet-report.pdf`,
    images: [
      { src: 'projects/motowallet/wallet.png', caption: { ko: '지갑 화면 — CBDC(myt) 잔액 확인 및 송금·요청 기능을 제공하는 화면입니다.', en: 'Wallet — shows CBDC (myt) balance with send and request features.' }, isErd: false, pair: true },
      { src: 'projects/motowallet/mobility.png', caption: { ko: '모빌리티 화면 — 카카오 지도 기반 자율주행차 호출 및 요금 산정 화면입니다.', en: 'Mobility — autonomous vehicle dispatch and fare calculation via Kakao Map.' }, isErd: false, pair: true },
      { src: 'projects/motowallet/result.png', caption: { ko: 'ERD — 토큰 기반 결제 데이터 구조입니다.', en: 'ERD — data structure for the token-based payment system.' }, isErd: true },
    ],
    results: {
      ko: ['WebSocket 기반 실시간 차량 연동과 QR 결제 흐름을 Flutter 앱에서 end-to-end로 구현했습니다.', '학술대회 프로시딩 게재 및 공모전 수상, 특허 출원을 진행했습니다.'],
      en: ['Implemented end-to-end real-time vehicle integration and QR payment flow in a Flutter app.', 'Published academic proceedings, won competitions, and filed a patent.'],
    },
    insight: {
      ko: 'WebSocket으로 자율주행 차량과 실시간 연결하며 상태 머신(TripPhase) 설계의 중요성을 체감했고, Flutter의 ChangeNotifier 패턴으로 실시간 상태를 UI에 반영하는 구조를 익혔습니다. 아쉬웠던 점은 API 명세를 처음부터 합의하지 않아 백엔드 완료를 기다리는 시간이 개발을 막은 것과, CBDC 토큰 모델의 보안 설계를 더 깊게 고려하지 못한 것입니다. 추가로 구현하고 싶었던 건 이동 이력 조회와 토큰 충전 기능입니다.',
      en: 'Connecting to a real vehicle via WebSocket highlighted the importance of state machine design, and I learned to propagate real-time state to Flutter UI via ChangeNotifier. Regrets: not agreeing on API specs upfront caused wait-time blocking, and the CBDC token model lacked deeper security design. Features I wanted to add: ride history lookup and token top-up.',
    },
    techReason: [
      { tech: 'WebSocket', reason: { ko: '차량 상태(배차·이동·도착)를 실시간으로 수신해야 했고, HTTP 폴링은 지연이 생겨 영속 연결 방식인 WebSocket을 선택했습니다.', en: 'Real-time vehicle state (dispatched/moving/arrived) required a persistent connection; HTTP polling introduced unacceptable latency.' } },
      { tech: 'Flutter', reason: { ko: '앱 전체를 1인이 단기간에 구현해야 했고, ChangeNotifier로 WebSocket 상태를 UI에 실시간 반영하는 구조를 자연스럽게 구성할 수 있어 선택했습니다.', en: 'One developer needed to build the full app quickly; Flutter\'s ChangeNotifier pattern made it natural to propagate WebSocket state to the UI in real time.' } },
      { tech: 'Kakao Map API', reason: { ko: '역지오코딩과 지도 탭 좌표 선택 기능을 제공하는 국내 API 중 문서화가 잘 되어 있고 무료 한도가 충분해 선택했습니다.', en: 'Among domestic map APIs offering reverse geocoding and tap-coordinate selection, Kakao had the best documentation and sufficient free-tier limits.' } },
    ],
  },
  {
    id: 'ondy',
    year: '2025',
    name: 'ONDY',
    role:    { ko: '소프트웨어 개발자 (CV · IoT)', en: 'Software Developer (CV · IoT)' },
    summary: { ko: 'IoT 자세 교정 로봇 시스템', en: 'IoT Posture Correction Robot System' },
    date: '2025.03 ~ 2025.06',
    team:    { ko: 'PM 1 · 디자이너 2 · 미디어 2 · SW 1 · HW 1', en: 'PM 1 · Designer 2 · Media 2 · SW 1 · HW 1' },
    highlights: {
      ko: ['Python OpenCV + MediaPipe 실시간 자세 판정', 'Arduino · Raspberry Pi 서보모터 · LED 제어 연동'],
      en: ['Real-time posture detection via Python OpenCV + MediaPipe', 'Arduino · Raspberry Pi servo motor & LED integration'],
    },
    teamBreakdown: {
      ko: [
        { member: '담당', part: 'Python 자세 판정 로직 · Arduino Raspberry Pi 하드웨어 연동 · 시스템 아키텍처' },
        { member: 'HW', part: '로봇 케이스 · 회로 설계' },
        { member: 'PM', part: '기획 · 발표' },
        { member: '디자이너 2', part: '캐릭터 UI · 시각 자료' },
        { member: '미디어 2', part: '영상 · 자료' },
      ],
      en: [
        { member: '담당', part: 'Python posture logic · Arduino/RPi hardware integration · System architecture' },
        { member: 'HW', part: 'Robot case · Circuit design' },
        { member: 'PM', part: 'Planning · Presentation' },
        { member: 'Designer ×2', part: 'Character UI · Visual assets' },
        { member: 'Media ×2', part: 'Video · Materials' },
      ],
    },
    thumbnail: 'ondy.png',
    overview: {
      ko: '로봇 내부 USB 카메라 모듈과 센서 데이터를 활용해 사용자의 자세를 실시간으로 감지하고, 로봇의 모터 움직임과 LED·캐릭터 반응을 통해 자세 교정을 돕는 IoT 자세 교정 시스템을 구현했습니다.',
      en: 'Implemented an IoT posture correction system using a USB camera and sensors to detect user posture in real time, providing feedback via robot motor movements and LED/character reactions.',
    },
    problem: {
      ko: ['사용자가 자신의 나쁜 자세를 인식하지 못한 채 장시간 유지하는 경우가 많았습니다.', '기존 웨어러블 교정기는 착용 불편과 외관 부담으로 지속 사용이 어려웠습니다.', '알림 앱이나 진동 경고는 반복될수록 무시되는 문제가 있었습니다.'],
      en: ['Users often maintained poor posture without noticing.', 'Existing wearables were uncomfortable and unappealing to wear long-term.', 'Notification apps and vibration alerts were increasingly ignored over time.'],
    },
    solution: {
      ko: ['로봇 내부 USB 카메라를 통해 자세 영상을 실시간으로 수집했습니다.', 'Python(OpenCV·MediaPipe) 프로그램이 카메라를 자동 인식해 자세를 판정하도록 구현했습니다.', 'BAD 자세 감지 시 로봇 귀·목 움직임과 표정 변화로 시각적 피드백을 제공했습니다.'],
      en: ['Collected posture video via USB camera inside the robot.', 'Python (OpenCV · MediaPipe) auto-detected the camera and evaluated posture.', 'Provided visual feedback via robot ear/neck movement and facial expression changes on bad posture.'],
    },
    contribution: {
      ko: ['Python(OpenCV·MediaPipe) 기반 자세 판정 로직 구현', 'USB 카메라 영상 입력부터 로봇 반응까지 데이터 흐름 설계', 'Arduino·Raspberry Pi를 이용해 서보모터와 LED 제어 연동', '센서·영상·하드웨어를 연결하는 전체 시스템 구조 설계'],
      en: ['Implemented posture detection logic with Python (OpenCV · MediaPipe)', 'Designed data flow from USB camera input to robot response', 'Integrated servo motor and LED control via Arduino · Raspberry Pi', 'Designed full system architecture connecting sensors, vision, and hardware'],
    },
    techStack: 'Python · OpenCV · MediaPipe · Flutter · Arduino · Raspberry Pi',
    github: null,
    reportUrl: `${BASE}assets/docs/ondy-report.pdf`,
    images: [
      { src: 'projects/ondy/home.png', caption: { ko: '홈 화면 — 오늘의 온디 점수와 스트레칭 추천을 보여주는 메인 화면입니다.', en: 'Home — shows today\'s ONDY score and recommended stretches.' }, isErd: false, pair: true },
      { src: 'projects/ondy/record.png', caption: { ko: '기록 화면 — 자세 탐지 결과와 오늘의 자세 통계를 확인하는 화면입니다.', en: 'Record — posture detection results and today\'s posture statistics.' }, isErd: false, pair: true },
    ],
    results: {
      ko: ['USB 카메라 기반 실시간 자세 감지 시스템을 구현하고 동작을 검증했습니다.', '로봇 하드웨어와 소프트웨어가 연동되어 자세 교정 피드백을 제공하는 흐름을 구축했습니다.'],
      en: ['Implemented and verified real-time posture detection via USB camera.', 'Built an integrated flow where robot hardware and software together provide posture correction feedback.'],
    },
    insight: {
      ko: 'OpenCV와 MediaPipe로 실시간 자세 판정 시스템을 구현하며 컴퓨터 비전 기반 데이터 처리 흐름을 이해했고, 영상 분석 결과를 하드웨어 제어 신호로 연결하는 시스템 파이프라인 설계 경험을 얻었습니다. 자세 판정 기준을 각도 임계값으로 단순하게 정의했는데 체형 차이로 오판정이 잦았고, 개인별 캘리브레이션 단계를 넣었다면 정확도가 훨씬 높아졌을 것입니다. 실시간 영상 처리와 하드웨어 제어를 단일 프로세스에서 함께 돌리다 간헐적으로 프레임이 끊겼던 것도 아쉽고, 멀티스레딩이나 프로세스 분리를 적용했으면 더 안정적이었을 겁니다.',
      en: 'Building a real-time posture system with OpenCV and MediaPipe taught me CV-based data pipelines and how to connect vision results to hardware control signals. Regrets: angle-threshold-based detection caused frequent false positives due to body shape differences — a per-user calibration step would have helped significantly. Also, running image processing and hardware control in a single process caused occasional frame drops; multithreading or process separation would have made it more stable.',
    },
    techReason: [
      { tech: 'MediaPipe', reason: { ko: '별도 모델 학습 없이 실시간 자세 랜드마크를 높은 신뢰도로 추출할 수 있어 선택했습니다. 33개 골격 좌표를 바로 활용해 자세 판정 로직을 빠르게 구성했습니다.', en: 'Provided reliable real-time landmark extraction without custom model training. 33 skeleton coordinates were available immediately, letting me build posture logic quickly.' } },
      { tech: 'Python + OpenCV', reason: { ko: '컴퓨터 비전 생태계에서 가장 풍부한 라이브러리와 커뮤니티를 갖추고 있고, Raspberry Pi에서 USB 카메라 실시간 영상 처리에 적합했습니다.', en: 'Richest CV ecosystem and community support, and well-suited for real-time USB camera processing on Raspberry Pi.' } },
      { tech: 'Raspberry Pi', reason: { ko: '로봇 내부에 내장 가능한 소형 컴퓨터이면서 Python 환경 구성이 쉽고, USB 카메라와 GPIO 핀을 동시에 제어할 수 있어 선택했습니다.', en: 'Small enough to embed in the robot, easy to set up with Python, and capable of simultaneously controlling a USB camera and GPIO pins.' } },
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
  const [filter, setFilter] = useState('all');

  const years = ['all', '2026', '2025'];

  const featured = PROJECTS.find(p => p.featured && (filter === 'all' || p.year === filter));
  const listProjects = PROJECTS.filter(p => !p.featured && (filter === 'all' || p.year === filter));

  return (
    <section id="projects" data-reveal>
      <h1>Projects</h1>

      <div className="filter-tabs">
        {years.map(y => (
          <button
            key={y}
            className={`filter-tab${filter === y ? ' active' : ''}`}
            onClick={() => setFilter(y)}
          >
            {y === 'all' ? 'All' : y}
          </button>
        ))}
      </div>

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
