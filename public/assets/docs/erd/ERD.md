# ERD

DDL을 도메인 7개로 나눠 PlantUML로 렌더링한 이미지입니다. 실선(`──`)은 DDL에 `ALTER TABLE ... FOREIGN KEY`로 명시된 관계, 점선(`┄┄`)은 컬럼 코멘트(`'FK'`)와 `XXX_ID` 네이밍으로 추론한 관계입니다.

## 슬라이드용 한 장 요약 (테이블명 + 관계만)

![Univ-US ERD 전체 요약](ERD_slide.png)

## 도메인별 상세 (PK/FK 포함 전체 컬럼)

## 1. University & Member

![University & Member ERD](01_university_member.png)

## 2. Community Board

![Community Board ERD](02_community_board.png)

## 3. Marketplace (Product / Trade)

![Marketplace ERD](03_marketplace.png)

## 4. LMS (Lecture)

![LMS ERD](04_lms.png)

## 5. Subscription / Payment

![Subscription ERD](05_subscription.png)

## 6. Facility Reservation (Reading Room / Meeting Room)

![Facility Reservation ERD](06_facility_reservation.png)

## 7. Inquiry / Support / AI

![Inquiry & Support ERD](07_inquiry_support.png)
