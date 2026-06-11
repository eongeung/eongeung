import { useState } from 'react';
import { useLang } from '../contexts/LangContext';

const BASE = import.meta.env.BASE_URL;

const PROJECTS = [
  {
    id: 'univus',
    year: '2026',
    name: 'Univ-US',
    role:    { ko: '풀스택 개발자', en: 'Full-Stack Developer' },
    summary: { ko: '대학 ERP · LMS · 커뮤니티 통합 플랫폼', en: 'University ERP · LMS · Community Platform' },
    date: '2026.06 ~ ing',
    team:    { ko: '풀스택 5', en: 'Full-Stack 5' },
    thumbnail: 'univus.png',
    overview: {
      ko: '전국 325개 대학 학생(B2C)과 대학·기관(B2B)을 동시에 겨냥한 커뮤니티 플랫폼입니다. 교육통계센터 기반 대학 정보, AI 챗봇, 실시간 날씨, 커뮤니티 기능을 제공하며, Spring Boot 백엔드와 Next.js 프론트엔드를 분리한 구조로 Kubernetes 환경에 배포합니다.',
      en: 'A community platform targeting both students (B2C) and universities/institutions (B2B) across 325 universities nationwide. Provides university info from the Education Statistics Center, an AI chatbot, real-time weather, and community features, with a Spring Boot backend and Next.js frontend deployed on Kubernetes.',
    },
    problem: {
      ko: ['대학생이 학교 정보, 커뮤니티, 날씨 등 다양한 정보를 한 곳에서 확인하기 어려웠습니다.', '전국 대학 정보가 통합된 커뮤니티 서비스가 없었습니다.', '관리자가 사용자 계정과 공지사항을 효율적으로 관리할 수 있는 시스템이 부족했습니다.'],
      en: ['Students had difficulty accessing university info, community, and weather all in one place.', 'No integrated community service covered universities nationwide.', 'An admin system to efficiently manage accounts and announcements was lacking.'],
    },
    solution: {
      ko: ['교육통계센터 기반 전국 325개 대학 데이터를 수집·SQL 변환하여 DB에 적재했습니다.', '관리자 대시보드에서 계정 일괄 관리, 공지사항 CRUD 기능을 구현했습니다.', 'Groq LLM API를 연동한 AI 챗봇으로 질의응답 자동화 및 대화 로그를 DB에 저장했습니다.', 'OpenWeatherMap API를 연동해 GPS 기반 실시간 날씨 데이터를 가공·노출했습니다.'],
      en: ['Collected and loaded 325 university datasets from the Education Statistics Center via SQL conversion.', 'Built an admin dashboard with bulk account management and announcement CRUD.', 'Implemented an AI chatbot with Groq LLM API, storing Q&A logs and managing conversation flow in DB.', 'Integrated OpenWeatherMap API for GPS-based real-time weather data processing and display.'],
    },
    contribution: {
      ko: ['관리자 대시보드 구현 — 계정 일괄 생성·수정·삭제, 활동 정지·탈퇴 처리, 공지사항 CRUD', '교육통계센터 기반 전국 325개 대학 데이터 수집 및 SQL 쿼리 변환·DB 적재', 'AI 챗봇 구현 — Groq LLM API 연동, 질문·응답 로그 DB 저장 및 대화 흐름 관리', 'OpenWeatherMap API 연동 — GPS 기반 실시간 날씨 데이터 가공·노출'],
      en: ['Built admin dashboard — bulk account create/update/delete, activity suspension & withdrawal, announcement CRUD', 'Collected 325 university datasets from Education Statistics Center and loaded into DB via SQL conversion', 'Implemented AI chatbot — Groq LLM API integration, Q&A log storage, and conversation flow management', 'Integrated OpenWeatherMap API — GPS-based real-time weather data processing and display'],
    },
    techStack: 'Java 21 · Spring Boot · MyBatis · Oracle · Next.js · TypeScript · Docker · Kubernetes',
    images: [
      { src: 'projects/univus/home.png', caption: 'Home', isErd: false },
      { src: 'projects/univus/dashboard.png', caption: 'Admin Dashboard', isErd: false },
      { src: 'projects/univus/erd.png', caption: 'ERD', isErd: true },
    ],
    results: {
      ko: ['관리자 대시보드에서 전체 사용자 계정 관리 및 공지사항 CRUD 기능을 구현했습니다.', 'GitHub Actions · Docker · Kubernetes(Helm) 기반 CI/CD 파이프라인을 구성하고 실배포를 완료했습니다.', '현재 커뮤니티 핵심 기능 확장을 진행 중입니다.'],
      en: ['Implemented full user account management and announcement CRUD in the admin dashboard.', 'Configured CI/CD pipeline with GitHub Actions, Docker, and Kubernetes (Helm) and completed live deployment.', 'Currently expanding core community features.'],
    },
    insight: {
      ko: '풀스택 역할을 맡으며 백엔드 API 설계부터 프론트엔드 연동, 인프라 배포까지 서비스 전반을 경험했습니다. 대규모 공공 데이터를 수집·가공하여 DB에 적재하는 과정에서 데이터 파이프라인 설계의 중요성을 배웠고, AI API 연동과 CI/CD 구축을 통해 실서비스 운영 흐름을 이해했습니다.',
      en: 'Taking on a full-stack role gave me end-to-end experience from API design to frontend integration and infrastructure deployment. Processing large-scale public data taught me the importance of data pipeline design, and integrating AI APIs with CI/CD deepened my understanding of real-world service operations.',
    },
  },
  {
    id: 'pawpaw',
    year: '2026',
    name: 'PawPaw',
    role:    { ko: '풀스택 개발자', en: 'Full-Stack Developer' },
    summary: { ko: '반려동물 종합 플랫폼', en: 'Comprehensive Pet Platform' },
    date: '2026.03 ~ ing',
    team:    { ko: '풀스택 2', en: 'Full-Stack 2' },
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
      ko: ['커뮤니티, 산책 매칭, 병원 리뷰를 도메인별로 분리하여 REST API 구조로 설계했습니다.', 'WebSocket(STOMP)을 활용한 실시간 채팅 기능을 구현했습니다.', '카카오 API를 연동하여 동물병원 검색 기능을 확장했습니다.'],
      en: ['Designed REST API with domain separation for community, walk matching, and hospital reviews.', 'Implemented real-time chat with WebSocket (STOMP).', 'Extended hospital search via Kakao API integration.'],
    },
    contribution: {
      ko: ['JWT 기반 인증 및 사용자 권한 처리 로직 구현', '커뮤니티, 리뷰 기능 API 설계 및 개발', 'WebSocket(STOMP) 기반 실시간 채팅 기능 구현', '외부 API 연동을 통한 데이터 확장 기능 구현'],
      en: ['Implemented JWT-based auth and authorization', 'Designed and developed community & review APIs', 'Built real-time chat with WebSocket (STOMP)', 'Extended data features via external API integration'],
    },
    techStack: 'Java 17 · Spring Boot · JPA · MySQL · JWT · WebSocket · STOMP · React',
    images: [
      { src: 'projects/pawpaw/community.png', caption: 'Community', isErd: false },
      { src: 'projects/pawpaw/chat.png', caption: 'Real-time Chat', isErd: false },
      { src: 'projects/pawpaw/arch1.png', caption: 'ERD', isErd: true },
      { src: 'projects/pawpaw/arch2.png', caption: 'Architecture', isErd: true },
    ],
    results: {
      ko: ['커뮤니티 게시글 작성 및 조회 기능 UI를 구현했습니다.', 'WebSocket 기반 실시간 채팅 기능을 구현하고 메시지 송수신 흐름을 확인했습니다.', '현재 산책 매칭 및 병원 리뷰 기능을 포함한 서비스 확장을 진행 중입니다.'],
      en: ['Implemented community post creation and listing UI.', 'Built WebSocket-based real-time chat and verified message flow.', 'Currently expanding to include walk matching and hospital review features.'],
    },
    insight: {
      ko: '도메인 분리와 API 구조 설계의 중요성을 배웠습니다. WebSocket 실시간 채팅 구현으로 비동기 통신 흐름과 상태 관리에 대한 이해를 높였습니다.',
      en: 'Learned the importance of domain separation and API design. Implementing WebSocket chat deepened my understanding of async communication and state management.',
    },
  },
  {
    id: 'frankly',
    year: '2026',
    name: 'Frankly',
    role:    { ko: '백엔드 개발자', en: 'Backend Developer' },
    summary: { ko: '익명 커뮤니티 REST API', en: 'Anonymous Community REST API' },
    date: '2026.03 ~ 2026.04',
    team:    { ko: '백엔드 1', en: 'Backend 1' },
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
    images: [
      { src: 'projects/frankly/swagger.png', caption: 'API Docs', isErd: false },
      { src: 'projects/frankly/arch1.png', caption: 'ERD', isErd: true },
      { src: 'projects/frankly/arch2.png', caption: 'Architecture', isErd: true },
    ],
    results: {
      ko: ['Swagger UI를 통해 전체 API 명세를 문서화하고 주요 기능을 검증했습니다.', 'EC2 서버에 배포 후 실제 환경에서 API 요청 및 응답 흐름을 확인했습니다.', 'REST API 구조를 기반으로 커뮤니티 서비스의 핵심 기능을 안정적으로 구현했습니다.'],
      en: ['Documented all APIs via Swagger UI and verified core features.', 'Confirmed API request/response flow in a real EC2 deployment.', 'Stably implemented core community service features with REST API.'],
    },
    insight: {
      ko: '인증, 게시글, 댓글 등 다양한 기능을 하나의 서비스로 통합하는 백엔드 구조 설계 경험을 쌓았습니다. 배포 및 CI/CD 환경을 직접 구성하며 서비스 실행 흐름과 서버 운영 구조를 경험했습니다.',
      en: 'Gained experience designing a backend that integrates auth, posts, and comments into one service. Setting up CI/CD and deploying gave me hands-on understanding of server operations.',
    },
  },
  {
    id: 'aeropick',
    year: '2025',
    name: 'AeroPick',
    role:    { ko: '소프트웨어 개발자 (앱 · 백엔드 · 하드웨어 연동)', en: 'Software Developer (App · Backend · HW Integration)' },
    summary: { ko: '공항 체험형 모션 인식 가챠 시스템', en: 'Airport Motion-Recognition Gacha System' },
    date: '2025.09 ~ 2025.12',
    team:    { ko: 'PM 1 · 디자이너 2 · 미디어 2 · 소프트웨어 1', en: 'PM 1 · Designer 2 · Media 2 · Software 1' },
    thumbnail: 'aeropick.png',
    overview: {
      ko: '청주공항 이용객 설문을 통해 공항 체험 콘텐츠 부족 문제를 확인하고, 모션 인식 기반 가챠 체험 시스템과 항공사 앱 스탬프 적립 기능을 연동한 참여형 공항 서비스를 설계하고 구현했습니다. Flutter 앱, Spring Boot API, Raspberry Pi 기반 가챠 시스템을 연결하여 QR 스캔을 통해 앱 스탬프가 적립되는 서비스 구조를 구축했습니다.',
      en: 'Identified a lack of airport experience content through user surveys, then designed and implemented an interactive gacha system with motion recognition and airline app stamp rewards. Connected a Flutter app, Spring Boot API, and Raspberry Pi-based gacha device via QR stamp collection.',
    },
    problem: {
      ko: ['청주공항 이용객 대상 설문에서 공항 내 즐길 거리 부족 의견을 확인했습니다.', '항공사 앱이 없어 고객 참여형 서비스가 부족한 상황이었습니다.', '공항 이용 경험을 기억에 남게 만들 방법이 필요했습니다.'],
      en: ['Surveys revealed a lack of entertainment options at Cheongju Airport.', 'No airline app meant no customer engagement service.', 'A way to make the airport experience memorable was needed.'],
    },
    solution: {
      ko: ['모션 인식 기반 가챠 시스템을 제작했습니다.', '가챠 결과 굿즈의 QR 코드를 스캔하면 항공사 앱에서 스탬프가 적립되는 구조를 구현했습니다.', '체험존 UI와 앱 기능을 연결해 체험부터 앱 참여까지 자연스럽게 이어지도록 서비스 흐름을 설계했습니다.'],
      en: ['Built a motion-recognition gacha device.', 'Implemented QR scan → airline app stamp collection flow.', 'Designed the service flow from physical experience to app engagement seamlessly.'],
    },
    contribution: {
      ko: ['Flutter 앱에서 가챠 결과 QR 스캔과 스탬프 적립 화면 구현', 'Spring Boot 기반 스탬프 적립 API와 데이터 저장 로직 설계', 'Arduino · Raspberry Pi 모션 인식 가챠 시스템과 앱 데이터 연동', '앱–백엔드–하드웨어를 연결하는 전체 서비스 아키텍처 설계'],
      en: ['Implemented QR scan and stamp reward screens in Flutter', 'Designed stamp API and data storage logic with Spring Boot', 'Integrated Arduino · Raspberry Pi gacha device with app data', 'Designed full service architecture connecting app, backend, and hardware'],
    },
    techStack: 'Java · Spring Boot · MySQL · Flutter · Dart · Arduino · Raspberry Pi',
    images: [
      { src: 'projects/aeropick/result.jpeg', caption: 'Demo', isErd: false },
      { src: 'projects/aeropick/erd.png', caption: 'ERD', isErd: true },
    ],
    results: {
      ko: ['Flutter 앱과 Spring Boot API, 하드웨어 가챠 시스템을 연결하는 서비스 파이프라인을 구축했습니다.', 'QR 스캔부터 스탬프 적립까지 실제 동작 흐름을 검증했습니다.'],
      en: ['Built a service pipeline connecting the Flutter app, Spring Boot API, and hardware gacha system.', 'Verified the complete flow from QR scan to stamp collection.'],
    },
    insight: {
      ko: 'Flutter 앱, Spring Boot API, Arduino·Raspberry Pi 기반 가챠 시스템을 연결하는 과정에서 서비스 전체 데이터 흐름을 설계하며 시스템 파이프라인 구조 설계의 중요성을 배웠습니다.',
      en: 'Connecting the Flutter app, Spring Boot API, and hardware gacha system taught me the importance of end-to-end system pipeline design.',
    },
  },
  {
    id: 'motowallet',
    year: '2025',
    name: 'MotoWallet',
    role:    { ko: '앱 개발자', en: 'App Developer' },
    summary: { ko: '자율주행 모빌리티 결제 시스템', en: 'Autonomous Mobility Payment System' },
    date: '2025.04 ~ 2025.10',
    team:    { ko: '백엔드 1 · 프론트엔드 1 · 앱 1 · 하드웨어 2', en: 'Backend 1 · Frontend 1 · App 1 · Hardware 2' },
    thumbnail: 'motowallet.png',
    overview: {
      ko: '자율주행 차량 이동 거리 기반 자동 결제를 위해 중앙은행 분산형 CBDC 구조를 참고한 토큰 기반 결제 시스템을 설계했습니다. Flutter를 활용해 iOS·Android에서 동작하는 사용자 지갑 앱을 구현하고, 토큰 결제 흐름을 확인할 수 있는 UI를 개발했습니다.',
      en: 'Designed a token-based payment system referencing CBDC architecture for automatic payment based on autonomous vehicle travel distance. Built a cross-platform wallet app in Flutter for iOS and Android.',
    },
    problem: {
      ko: ['기존 결제 방식은 카드사와 중개 단계를 거쳐 자동 결제 구조가 복잡했습니다.', '자율주행 서비스에서는 이동 거리 기반 소액 결제가 빈번해 간단한 결제 구조가 필요했습니다.', '사용자가 결제 흐름과 잔액 변화를 쉽게 확인할 수 있는 지갑 UI가 필요했습니다.'],
      en: ['Traditional payment required card intermediaries, making automation complex.', 'Frequent micro-payments based on travel distance demanded a simpler structure.', 'A wallet UI showing payment flow and balance changes was needed.'],
    },
    solution: {
      ko: ['CBDC 구조를 참고해 카드사를 거치지 않고 토큰을 직접 발행해 결제하는 모델을 설계했습니다.', 'Flutter를 활용해 지갑 잔액, 결제 내역, 자동 결제 결과를 확인할 수 있는 크로스플랫폼 앱을 구현했습니다.', '백엔드와 블록체인 모듈과 연동 가능한 데이터 흐름으로 앱 구조를 설계했습니다.'],
      en: ['Designed a CBDC-inspired model issuing tokens directly without card intermediaries.', 'Built a Flutter cross-platform app showing wallet balance, payment history, and auto-payment results.', 'Designed app data flow compatible with backend and blockchain modules.'],
    },
    contribution: {
      ko: ['Flutter 기반 크로스플랫폼 사용자 지갑 앱 구현', '토큰 잔액 확인과 결제 내역 화면 UI 설계', '백엔드 API 연동을 고려한 데이터 구조와 화면 흐름 설계'],
      en: ['Built cross-platform wallet app with Flutter', 'Designed token balance and payment history UI', 'Designed data structure and screen flow for backend API integration'],
    },
    techStack: 'Flutter · Dart · React · Spring Boot · Ethereum · MySQL',
    images: [
      { src: 'projects/motowallet/erd.jpeg', caption: 'Poster', isErd: false },
      { src: 'projects/motowallet/result.png', caption: 'ERD', isErd: true },
    ],
    results: {
      ko: ['Flutter 기반 크로스플랫폼 지갑 앱 UI를 구현하고 결제 흐름을 검증했습니다.', '학술대회 프로시딩 게재 및 공모전 수상, 특허 출원을 진행했습니다.'],
      en: ['Implemented Flutter wallet app UI and verified payment flow.', 'Published academic proceedings, won competitions, and filed a patent.'],
    },
    insight: {
      ko: 'CBDC 구조를 참고한 토큰 기반 결제 모델을 설계하며 결제 흐름과 데이터 구조를 이해했습니다. Flutter를 활용해 하나의 코드베이스로 여러 플랫폼에서 동작하는 지갑 앱 구조를 설계하는 경험을 했습니다.',
      en: 'Designing a CBDC-based token payment model deepened my understanding of payment flows and data structures. Building a Flutter wallet app taught me how to target multiple platforms from a single codebase.',
    },
  },
  {
    id: 'ondy',
    year: '2025',
    name: 'ONDY',
    role:    { ko: '소프트웨어 개발자 (컴퓨터 비전 · IoT 시스템 통합)', en: 'Software Developer (Computer Vision · IoT Integration)' },
    summary: { ko: 'IoT 자세 교정 로봇 시스템', en: 'IoT Posture Correction Robot System' },
    date: '2025.03 ~ 2025.06',
    team:    { ko: 'PM 1 · 디자이너 2 · 미디어 2 · 소프트웨어 1 · 하드웨어 1', en: 'PM 1 · Designer 2 · Media 2 · SW 1 · HW 1' },
    thumbnail: 'ondy.png',
    overview: {
      ko: '로봇 내부 USB 카메라 모듈과 센서 데이터를 활용해 사용자의 자세를 실시간으로 감지하고, 로봇의 모터 움직임과 LED·캐릭터 반응을 통해 자세 교정을 돕는 IoT 자세 교정 시스템을 구현했습니다. 기존 웨어러블 교정기의 착용 불편과 반복 알림의 무감각 문제를 개선하기 위해 데스크형 로봇 형태의 피드백 시스템으로 설계했습니다.',
      en: 'Implemented an IoT posture correction system using a USB camera and sensors to detect user posture in real time, providing feedback via robot motor movements and LED/character reactions. Designed as a desk robot to overcome discomfort and notification fatigue of wearables.',
    },
    problem: {
      ko: ['사용자가 자신의 나쁜 자세를 인식하지 못한 채 장시간 유지하는 경우가 많았습니다.', '기존 웨어러블 교정기는 착용 불편과 외관 부담으로 지속 사용이 어려웠습니다.', '알림 앱이나 진동 경고는 반복될수록 무시되는 문제가 있었습니다.'],
      en: ['Users often maintained poor posture without noticing.', 'Existing wearables were uncomfortable and unappealing to wear long-term.', 'Notification apps and vibration alerts were increasingly ignored over time.'],
    },
    solution: {
      ko: ['로봇 내부 USB 카메라를 통해 자세 영상을 실시간으로 수집했습니다.', 'Python(OpenCV·MediaPipe) 프로그램이 카메라를 자동 인식해 자세를 판정하도록 구현했습니다.', 'BAD 자세 감지 시 로봇 귀·목 움직임과 표정 변화로 시각적 피드백을 제공했습니다.', '잘못된 자세가 지속될 경우 PC 화면 캐릭터로 추가 경고를 제공했습니다.'],
      en: ['Collected posture video via USB camera inside the robot.', 'Python (OpenCV · MediaPipe) auto-detected the camera and evaluated posture.', 'Provided visual feedback via robot ear/neck movement and facial expression changes on bad posture.', 'Added secondary PC character alert when bad posture persisted.'],
    },
    contribution: {
      ko: ['Python(OpenCV·MediaPipe) 기반 자세 판정 로직 구현', 'USB 카메라 영상 입력부터 로봇 반응까지 데이터 흐름 설계', 'Arduino·Raspberry Pi를 이용해 서보모터와 LED 제어 연동', '센서·영상·하드웨어를 연결하는 전체 시스템 구조 설계'],
      en: ['Implemented posture detection logic with Python (OpenCV · MediaPipe)', 'Designed data flow from USB camera input to robot response', 'Integrated servo motor and LED control via Arduino · Raspberry Pi', 'Designed full system architecture connecting sensors, vision, and hardware'],
    },
    techStack: 'Python · OpenCV · MediaPipe · Flutter · Arduino · Raspberry Pi',
    images: [
      { src: 'projects/ondy/robot.png', caption: 'Demo', isErd: false },
      { src: 'projects/ondy/screenshot.png', caption: 'Poster', isErd: false },
    ],
    results: {
      ko: ['USB 카메라 기반 실시간 자세 감지 시스템을 구현하고 동작을 검증했습니다.', '로봇 하드웨어와 소프트웨어가 연동되어 자세 교정 피드백을 제공하는 흐름을 구축했습니다.'],
      en: ['Implemented and verified real-time posture detection via USB camera.', 'Built an integrated flow where robot hardware and software together provide posture correction feedback.'],
    },
    insight: {
      ko: 'OpenCV와 MediaPipe로 실시간 자세 판정 시스템을 구현하며 컴퓨터 비전 기반 데이터 처리 흐름을 이해했습니다. 영상 분석 결과를 하드웨어 제어 신호로 연결하며 소프트웨어와 디바이스 간 시스템 파이프라인 설계 경험을 얻었습니다.',
      en: 'Building a real-time posture system with OpenCV and MediaPipe taught me computer vision data processing pipelines. Connecting vision results to hardware control signals gave me experience designing software-device integration.',
    },
  },
  {
    id: 'safetech',
    year: '2024',
    name: 'Safe-Tech',
    role:    { ko: '웹 개발자', en: 'Web Developer' },
    summary: { ko: '산업 현장 안전 모니터링 시스템', en: 'Industrial Safety Monitoring System' },
    date: '2024.04 ~ 2024.07',
    team:    { ko: 'PM 1 · 웹 1 · 임베디드 1 · AI 1', en: 'PM 1 · Web 1 · Embedded 1 · AI 1' },
    thumbnail: 'safe-tech.png',
    overview: {
      ko: '산업현장에서 안전모 미착용 사례가 증가하는 문제를 해결하기 위해, 작업자의 안전모 착용 여부를 감지하고 관리자에게 알림을 전달하는 시스템을 개발했습니다.',
      en: 'Developed a system to detect whether workers are wearing safety helmets and notify administrators, addressing the increasing rate of helmet non-compliance on industrial sites.',
    },
    problem: {
      ko: ['산업현장에서 안전모 미착용을 지속적으로 확인하기 어려웠습니다.', '관리자가 현장 데이터를 실시간으로 확인할 수 있는 시스템이 부족했습니다.', '안전모 감지 결과를 기록하고 관리할 수 있는 관리자 웹이 필요했습니다.'],
      en: ['Continuously monitoring helmet compliance on-site was difficult.', 'No system existed for administrators to check field data in real time.', 'An admin web to record and manage detection results was needed.'],
    },
    solution: {
      ko: ['안전모 감지 결과가 서버에 저장되도록 구조를 설계했습니다.', 'Django 관리자 웹에서 감지 기록과 알림 내역을 확인할 수 있도록 구현했습니다.', '관리자가 위험 상황을 쉽게 확인하고 대응할 수 있도록 UI를 구성했습니다.'],
      en: ['Designed the structure to store detection results on the server.', 'Built a Django admin web for viewing detection records and alerts.', 'Configured UI for administrators to easily identify and respond to hazardous situations.'],
    },
    contribution: {
      ko: ['Django 기반 관리자 웹 구현', '안전모 감지 결과를 조회하고 관리할 수 있는 페이지 개발', '데이터 모델과 관리자 화면 설계'],
      en: ['Implemented Django-based admin web', 'Developed pages for querying and managing helmet detection results', 'Designed data models and admin interface'],
    },
    techStack: 'Python · Django · Raspberry Pi · Arduino · YOLO',
    images: [
      { src: 'projects/safetech/result.png', caption: 'Web UI', isErd: false },
    ],
    results: {
      ko: ['Django 관리자 웹에서 안전모 감지 결과를 조회하고 관리하는 기능을 구현했습니다.', 'IoT 센서 데이터와 웹 시스템을 연결하는 전체 흐름을 구축했습니다.'],
      en: ['Implemented safety helmet detection result query and management in Django admin.', 'Built the full pipeline connecting IoT sensor data to the web system.'],
    },
    insight: {
      ko: 'Django를 활용해 관리자 웹을 구현하며 데이터 모델 설계와 CRUD 기능 구현을 경험했습니다. IoT 센서 데이터를 웹 시스템과 연결하며 데이터 흐름 설계의 중요성을 배웠습니다.',
      en: 'Building an admin web with Django gave me experience in data modeling and CRUD implementation. Connecting IoT sensor data to a web system taught me the importance of data flow design.',
    },
  },
];

function ProjectModal({ project, onClose, lang }) {
  const t = (obj) => obj[lang] || obj.ko;

  return (
    <div className="notion-overlay" onClick={onClose}>
      <div className="notion-modal" onClick={(e) => e.stopPropagation()}>
        <button className="notion-close" onClick={onClose}>✕</button>

        <h1 className="notion-title">{project.name}</h1>

        <div className="notion-props">
          <div className="notion-prop"><span className="prop-key">{lang === 'ko' ? '역할' : 'Role'}</span><span className="prop-val">{t(project.role)}</span></div>
          <div className="notion-prop"><span className="prop-key">{lang === 'ko' ? '팀' : 'Team'}</span><span className="prop-val">{t(project.team)}</span></div>
          <div className="notion-prop"><span className="prop-key">{lang === 'ko' ? '기간' : 'Period'}</span><span className="prop-val">{project.date}</span></div>
          <div className="notion-prop"><span className="prop-key">{lang === 'ko' ? '요약' : 'Summary'}</span><span className="prop-val">{t(project.summary)}</span></div>
          <div className="notion-prop"><span className="prop-key">Tech</span><span className="prop-val">{project.techStack}</span></div>
        </div>

        <hr className="notion-divider" />

        <div className="notion-section">
          <h2>01. Overview</h2>
          <p>{t(project.overview)}</p>
        </div>

        <div className="notion-section">
          <h2>02. Problem</h2>
          <ul>{t(project.problem).map((item, i) => <li key={i}>{item}</li>)}</ul>
        </div>

        <div className="notion-section">
          <h2>03. Solution</h2>
          <ul>{t(project.solution).map((item, i) => <li key={i}>{item}</li>)}</ul>
        </div>

        <div className="notion-section">
          <h2>04. My Contribution</h2>
          <ul>{t(project.contribution).map((item, i) => <li key={i}>{item}</li>)}</ul>
        </div>

        <div className="notion-section">
          <h2>05. Results</h2>
          <ul>{t(project.results).map((item, i) => <li key={i}>{item}</li>)}</ul>
          {project.images.filter(img => !img.isErd).length > 0 && (
            <div className="notion-images">
              {project.images.filter(img => !img.isErd).map((img, i) => (
                <div key={i} className="notion-img-block">
                  <span className="notion-img-caption">{img.caption}</span>
                  <img src={`${BASE}assets/images/${img.src}`} alt={img.caption} className="notion-img" />
                </div>
              ))}
            </div>
          )}
        </div>

        {project.images.filter(img => img.isErd).length > 0 && (
          <div className="notion-section">
            <h2>06. ERD / Architecture</h2>
            <div className="notion-images">
              {project.images.filter(img => img.isErd).map((img, i) => (
                <div key={i} className="notion-img-block">
                  <span className="notion-img-caption">{img.caption}</span>
                  <img src={`${BASE}assets/images/${img.src}`} alt={img.caption} className="notion-img" />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="notion-section">
          <h2>{project.images.filter(img => img.isErd).length > 0 ? '07.' : '06.'} Insight</h2>
          <p>{t(project.insight)}</p>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { lang } = useLang();
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('all');

  const years = ['all', '2026', '2025', '2024'];
  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.year === filter);

  return (
    <section id="projects">
      <h1>Projects</h1>

      <div className="filter-buttons">
        {years.map(y => (
          <button
            key={y}
            className={filter === y ? 'active' : ''}
            onClick={() => setFilter(y)}
          >
            {y === 'all' ? 'All' : y}
          </button>
        ))}
      </div>

      <div className="project-cards">
        {filtered.map(p => (
          <div key={p.id} className="project-card" onClick={() => setSelected(p)}>
            <div className="project-card-thumb">
              <img src={`${BASE}assets/images/${p.thumbnail}`} alt={p.name} />
            </div>
            <div className="project-card-body">
              <div className="project-card-meta">
                <span className="project-card-year">{p.year}</span>
                <span className="project-card-tag">{p.summary[lang] || p.summary.ko}</span>
              </div>
              <h3 className="project-card-name">{p.name}</h3>
              <p className="project-card-role">{(p.role[lang] || p.role.ko)}</p>
              <p className="project-card-stack">{p.techStack}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} lang={lang} />
      )}
    </section>
  );
}
