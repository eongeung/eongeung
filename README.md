![header](https://capsule-render.vercel.app/api?type=venom&color=gradient&height=200&section=header&text=Yeong%20Heun's-nl-GitHub&fontSize=80&animation=twinkling)

#### 👤 이영흔 (Yeong Heun)  

---

# 🏠 Portfolio Homepage

이 홈페이지는 HTML, CSS, JavaScript를 기반으로 **직접 테마를 제작**하여 구성하였습니다.

### 🔗 GitHub Repository
👉 (https://eongeung.github.io/eongeung)

---

## 추가 구현현 기능 목록


| 번호 | 기능 제목 | 설명 | 코드 위치 | 코드 설명 |
|------|-----------|------|-----------|-----------|
| 1 | 상단바 클릭 시 최상단 이동 | 상단 로고 클릭 시 페이지 최상단으로 스크롤 이동합니다. | `main.js` | 버튼에 클릭 이벤트를 추가하여 window.scrollTo({ top: 0, behavior: 'smooth' })를 호출합니다. |
| 2 | 상단 이동 시 부드러운 스크롤 적용 | 상단 이동 시 부드럽게 스크롤되도록 구현합니다. | `style.css` | html 요소에 scroll-behavior: smooth;를 적용하여 모든 스크롤 이동이 부드럽게 이루어지도록 설정합니다. |
| 3 | 스크롤 최상단일 때 상단바 사라짐 | 페이지 상단일 경우 자동으로 상단바 숨김 처리합니다. | `navActive.js` | window.scrollY 값을 감지하여 상단바의 클래스 토글을 통해 표시 여부를 제어합니다. |
| 4 | Nav Bar 메뉴 클릭 시 섹션 이동 | 메뉴 항목 클릭 시 해당 섹션으로 이동합니다. | `navActive.js`, `style.css` | menu 클릭 시 scrollIntoView로 섹션을 이동합니다. |
| 5 | Nav Bar 상단 고정 | 스크롤 시에도 NavBar가 화면 상단에 고정합니다. | `style.css` | position에서 fixed; top은 0; 으로 적용합니다. |
| 6 | Nav 버튼 클릭 시 부드러운 이동 | 섹션 이동 시 자연스럽게 스크롤됩니다. | `navActive.js`, `style.css` | smooth로 부드럽게 이동합니다. |
| 7 | Scroll 진행률 표시 | 화면 상단에 현재 스크롤 위치 비율 시각화합니다. | `scroll.js`, `style.css` | 스크롤 비율을 계산하고, .progress-bar width로 조정합니다. |
| 8 | Home 버튼 클릭 시 새로고침 | Home 클릭 시 페이지 초기화 후 최상단으로 이동합니다. | `contact.html` | href로 index.html을 연결해주었습니다. |
| 9 | Index 타이핑 애니메이션 | 인덱스 페이지에서 글자가 타이핑 되듯 출력 | `style.css` | keyframes 'typing'을 사용해 텍스트 타이핑 효과를 구현합니다. |
| 10 | 타이핑 텍스트에 깜빡이는 커서 | 타이핑 애니메이션에 커서 효과를 추가합니다. | `style.css` | keyframes 'blink'를 사용해 계속 입력하는 것 같은 효과를 구현합니다. |
| 11 | About Me 소개에 링크 삽입 | 본문 중 일부 단어에 하이퍼링크 삽입합니다. | `about.html` | `<a href="...">` 태그를 활용합니다. |
| 12 | About Me 강조 포인트 | 소개글 내 강조할 문장 스타일링 | `about.html` | <strong>으로 bold 처리를 합니다. |
| 13 | 배경 이미지 고정 | 배경이 스크롤과 함께 움직이지 않도록 설정합니다. | `style.css` | background-attachment에 fixed;로 고정합니다. |
| 14 | 배경 이미지 흐림 효과 | 배경에 blur 효과를 추가합니다. | `style.css` | filter와 backdrop-filter로 blur 효과를 줍니다. |
| 15 | 프로필 사진 동그랗게함함 | 프로필 이미지 원형으로 표시합니다. | `style.css` | border-radius를 반으로 줄여줍니다. |
| 16 | Tech Stack hover 시 scale 효과 | 마우스 오버 시 아이콘 확대합니다. | `style.css` | hover시 transform에서 scale을 1.1배 적용시킵니다. |
| 17 | Tech Stack 그림자 추가 | 아이콘에 박스 그림자를 부여합니다. | `style.css` | box-shadow ... 속성을 사용합니다. |
| 18 | Tech Stack tool tip | 마우스 오버 시 툴팁 표시합니다. | `techstack.html` | title 속성으로 툴팁을 구현합니다. |
| 19 | Tech Stack 스크롤 등장 | 스크롤 시 특정 구간에서 요소 등장 애니메이션을 넣습니다. | `techstack.js`, `style.css` | Intersection Observer로 요소 등장 처리합니다. |
| 20 | Projects 연도별 필터 | 연도 선택 시 해당 프로젝트만 보여집니다. | `projects.js`, `project.css` | button 클릭 시 data-year 기준으로 필터링을 진행합니다. |
| 21 | Projects hover 할 때 색상 변화 | 마우스 오버할 때 색상을 변경합니다. | `project.css` | :hover할 때 배경색을 변경합니다. |
| 22 | Projects hover 시 커서 변경 | 마우스 오버 시 커서 아이콘을 변경합니다. | `project.css` | cursor: pointer에 효과를 주어 아이콘을 변경합니다. |
| 23 | Projects 클릭 시 상세 내용 펼침 | 클릭 시 세부 설명 펼침/숨김을 구현합니다. | `projects.js`, `project.css` | toggle 방식으로 세부 설명을 펼치고 숨길 수 있도록 합니다. |
| 24 | Projects 결과물 GitHub 링크 | 프로젝트 상세에 GitHub 아이콘을 누를 시 깃허브 링크가 뜹니다. | `projects.html` | `<a href="...">`View on GitHub</a>.를 통해 깃허브 아이콘을 통하여 들어갈 수 있도록 합니다. |
| 25 | Gmail, GitHub, Velog 아이콘 + 링크 | 소셜 아이콘 클릭 시 링크로 이동합니다. | `contact.html` | `<a href>`과 image를 사용하여 sns 링크를 만들어줍니다. |
| 26 | 카카오톡 공유 썸네일 설정 | 공유 시 썸네일, 제목, 설명 메타데이터를 설정합니다. | `indew.html` | <meta property=>를 사용하여 image, url, title, description 등을 설정합니다. |
| 27 | 다크모드 버튼 UI | 클릭 시 다크모드를 변경합니다. | `dark.js`, `style.css` | 버튼을 활용해 on, off할 수 있도록 합니다. |
| 28 | 다크모드 색상 자동 반전 | 다크모드 시 자동으로 반전합니다. | `dark.js`, `style.css` | css에서 자동으로 색을 반전할 수 있도록 합니다. |
| 29 | 다크모드 설정 유지 | 새로고침 후에도 이전 테마를 유지합니다. | `dark.js` | localStorage를 사용하여 theme 저장 및 로드합니다. |
| 30 | 한/영 변환 기능 (About, Career) | 클릭 시 영어/한글 변환 기능 제공합니다. | `translate.js` | 버튼 클릭으로 ko, en을 전환시킵니다. |
| 31 | 모바일 반응형 레이아웃 | 모바일에서도 깨지지 않는 레이아웃을 구현했습니다. | `style.css` | @media 쿼리를 사용했습니다. |
| 32 | License 페이지 추가 | 자격증 목록 페이지를 구성했습니다. | `license.html` | `<h>와 <div>`를 통해 페이지를 보기 좋게 만들었습니다. |
| 33 | Award 페이지 추가 | 수상 이력 페이지를 추가했습니다. | `award.html` | `<h>와 <div>`를 통해 페이지를 보기 좋게 만들었습니다. |
| 34 | Experience 페이지 추가 | 경력 및 활동 정리 페이지를 추가했습니다. | `experience.html` | `<h>와 <div>`를 통해 페이지를 보기 좋게 만들었습니다. |
| 35 | 카드형 UI (License, Award, Experience) | 각 항목을 카드 형태로 표시하였습니다. | `award.css`, `project.css`, `license.html`, `award.html`, `experience.html` | box-shadow, border-radius 등 css를 작업하고, section class license-card 형식으로 css를 받아왔습니다. |
| 36 | 스크롤 기능 (License, Award, Experience) | 페이지 별 스크롤 이동을 하고 위치를 기억합니다. | `navActive.js` | scrollIntoView 및 scroll 이벤트로 이동 처리하였습니다. |
| 37 | Favicon 추가 | 브라우저 탭에 표시될 favicon을 추가했습니다. | `index.html` | `<link rel=>`을 통하여 아이콘을 추가했습니다. |
| 38 | 404페이지 커스텀 | 존재하지 않는 URL 접속 시 사용자 정의 페이지를 커스텀 했습니다. | `404.html`, `css/404.css` | 이미지를 적용하였고, 404 페이지에 대한 설명을 적었습니다. |
| 39 | 404페이지 타이핑 기능 | 404 페이지에서 타이핑 애니메이션 표시했습니다. | `css/404.css` | keyframe typing, blink를 사용했습니다. |
| 40 | include 기능 | 한 페이지에서 여러 페이지를 볼 수 있도록 합니다. | `js/include.js` | data-include-path로 AJAX include, includesLoaded 이벤트를 발생했습니다. |

---

---

### 📬 Contact Information 📬  
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:iyoungheuni@gmail.com)  

---

### 🧑‍💻 Tech Stack 🧑‍💻  
![C](https://img.shields.io/badge/C-20232a.svg?style=for-the-badge&logo=C&logoColor=61DAFB) 
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) 
<!--![JavaScript](https://img.shields.io/badge/javascript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=20232a) 
![HTML5](https://img.shields.io/badge/html5-E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/css-1572B6.svg?style=for-the-badge&logo=css3&logoColor=white)  -->
![Django](https://img.shields.io/badge/Django-092E20.svg?style=for-the-badge&logo=django&logoColor=white) 
![Android Studio](https://img.shields.io/badge/Android%20Studio-3DDC84.svg?style=for-the-badge&logo=android%20Studio&logoColor=white) 
![Arduino](https://img.shields.io/badge/Arduino-00878F.svg?style=for-the-badge&logo=arduino&logoColor=white)  

---

### 📖 Studying 📖  
![Spring](https://img.shields.io/badge/Spring-6DB33F.svg?style=for-the-badge&logo=Spring&logoColor=white) 
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=Spring%20Boot&logoColor=white) 
![Java](https://img.shields.io/badge/Java-3578E5?style=for-the-badge&logo=Java&logoColor=white)  

---

### 🛠 Tools & Resources 🛠  
![Git](https://img.shields.io/badge/git-F05033.svg?style=for-the-badge&logo=git&logoColor=white) 
![GitHub](https://img.shields.io/badge/github-181717.svg?style=for-the-badge&logo=github&logoColor=white) 
![Notion](https://img.shields.io/badge/Notion-F3F3F3.svg?style=for-the-badge&logo=notion&logoColor=black) 
![Adobe Photoshop](https://img.shields.io/badge/adobe%20photoshop-08253c.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=37abff)  
![VSCode](https://img.shields.io/badge/VSCode-2C2C32.svg?style=for-the-badge&logo=visual-studio-code&logoColor=22ABF3) 
![Colab](https://img.shields.io/badge/Colab-2C2C32.svg?style=for-the-badge&logo=googlecolab&logoColor=F9AB00)  

---

### 📊 Stats  
<!--[![Solved.ac Profile](http://mazassumnida.wtf/api/v2/generate_badge?boj=yh1022)](https://solved.ac/yh1022) -->
[![GitHub Stats](https://github-readme-stats.vercel.app/api?username=eongeung&show_icons=true&theme=catppuccin_mocha&rank_icon=github)](https://github.com/eongeung/github-readme-stats)  [![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=eongeung&layout=compact&height=500&theme=catppuccin_mocha)](https://github.com/eongeung/github-readme-stats)  



---

