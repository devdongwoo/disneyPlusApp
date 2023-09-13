# Disney-plus-app (clone project)

- 배포 주소(firebase): https://react-disney-plus-22cb3.web.app

- 개발기간<br/>
  2023.08.12 ~ 2023.08.13

- PC버전(반응형)
  ![image](/disney_plus/public/readmeImg/pc_1.png)

# 프로젝트 소개

react, vanilla.js 로 disney-plus-app 기존에 있던 웹앱을 클론 코딩하였습니다.
해외 영화 api 제공 하는곳에서 key를 발급받아
axios를 사용하여 영화 데이터를 받아 캐러셀, 모달창, 상세페이지
사용하였습니다.

# 시작 가이드

- ### frontend

```
  $ cd disney_plus
  $ npm install
  $ npm run start
```

# Stacks

### **Environment**<br/>

<img src="https://img.shields.io/badge/visual studio code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">&nbsp;
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
&nbsp;<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

### **Config**<br/>

<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"><br/>

### **Development**<br/>

<img src="https://img.shields.io/badge/javascript-20232a?style=for-the-badge&logo=javascript&logoColor=F7DF1E">&nbsp;
<img src="https://img.shields.io/badge/react-20232a?style=for-the-badge&logo=react&logoColor=5dcfee">&nbsp;
<img src="https://img.shields.io/badge/styled_componets-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">&nbsp;
<img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white">&nbsp;
<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"><br/>

# 화면구성(반응형)

| 로그인전, 로그아웃후 보이는 페이지                | 메인페이지(로그인후)                             |
| ------------------------------------------------- | ------------------------------------------------ |
| ![image](/disney_plus/public/readmeImg/pc_1.png)  | ![image](/disney_plus/public/readmeImg/pc_2.png) |
| 메인페이지에서 배너, 상단Nav, 캐러셀              | 캐러셀에 있는 영화클릭후 나오는 모달창           |
| ![image](/disney_plus/public/readmeImg/pc_3.png)  | ![image](/disney_plus/public/readmeImg/pc_4.png) |
| 상단 Nav에 있는 검색 input 사용할때 나오는 페이지 | 상단 Nav에 있는 검색 input 사용후 나오는 페이지  |
| ![image](/disney_plus/public/readmeImg/pc_5.png)  | ![image](/disney_plus/public/readmeImg/pc_6.png) |
| 배너에 있는 Play 버튼 누를때 나오는 유튜브        |
| ![image](/disney_plus/public/readmeImg/pc_7.png)  |

# 아키텍쳐

- 디렉토리 구조

```
📦disney_plus_git
 ┗ 📂disney_plus
 ┃ ┣ 📂public
 ┃ ┃ ┣ 📂images
 ┃ ┃ ┃ ┣ 📜cta-logo-one.png
 ┃ ┃ ┃ ┣ 📜cta-logo-one.svg
 ┃ ┃ ┃ ┣ 📜cta-logo-two.png
 ┃ ┃ ┃ ┣ 📜group-icon.png
 ┃ ┃ ┃ ┣ 📜home-background.png
 ┃ ┃ ┃ ┣ 📜home-icon.svg
 ┃ ┃ ┃ ┣ 📜login-background.jpg
 ┃ ┃ ┃ ┣ 📜logo.svg
 ┃ ┃ ┃ ┣ 📜movie-icon.svg
 ┃ ┃ ┃ ┣ 📜original-icon.svg
 ┃ ┃ ┃ ┣ 📜play-icon-black.png
 ┃ ┃ ┃ ┣ 📜play-icon-white.png
 ┃ ┃ ┃ ┣ 📜search-icon.svg
 ┃ ┃ ┃ ┣ 📜series-icon.svg
 ┃ ┃ ┃ ┣ 📜slider-badag.jpg
 ┃ ┃ ┃ ┣ 📜slider-badging.jpg
 ┃ ┃ ┃ ┣ 📜slider-scale.jpg
 ┃ ┃ ┃ ┣ 📜slider-scales.jpg
 ┃ ┃ ┃ ┣ 📜viewers-disney.png
 ┃ ┃ ┃ ┣ 📜viewers-marvel.png
 ┃ ┃ ┃ ┣ 📜viewers-national.png
 ┃ ┃ ┃ ┣ 📜viewers-pixar.png
 ┃ ┃ ┃ ┣ 📜viewers-starwars.png
 ┃ ┃ ┃ ┗ 📜watchlist-icon.svg
 ┃ ┃ ┣ 📂readmeImg
 ┃ ┃ ┃ ┣ 📜pc_1.png
 ┃ ┃ ┃ ┣ 📜pc_2.png
 ┃ ┃ ┃ ┣ 📜pc_3.png
 ┃ ┃ ┃ ┣ 📜pc_4.png
 ┃ ┃ ┃ ┣ 📜pc_5.png
 ┃ ┃ ┃ ┣ 📜pc_6.png
 ┃ ┃ ┃ ┗ 📜pc_7.png
 ┃ ┃ ┣ 📂videos
 ┃ ┃ ┃ ┣ 📜disney.mp4
 ┃ ┃ ┃ ┣ 📜marvel.mp4
 ┃ ┃ ┃ ┣ 📜national-geographic.mp4
 ┃ ┃ ┃ ┣ 📜pixar.mp4
 ┃ ┃ ┃ ┗ 📜star-wars.mp4
 ┃ ┃ ┣ 📜favicon.ico
 ┃ ┃ ┣ 📜index.html
 ┃ ┃ ┣ 📜logo192.png
 ┃ ┃ ┣ 📜logo512.png
 ┃ ┃ ┣ 📜manifest.json
 ┃ ┃ ┗ 📜robots.txt
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┃ ┣ 📜axios.js : api key, axios instance 생성
 ┃ ┃ ┃ ┗ 📜request.js : api baseUrl 뒤에 붙이는 주소
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂common : 공통으로 사용하는 기능 모아둔 폴더
 ┃ ┃ ┃ ┃ ┗ 📂utilities
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┗ 📂units : 1개이상 재사용하는 컴포넌트 폴더
 ┃ ┃ ┃ ┃ ┣ 📂banner
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Banner.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Banner.styled.js : css in js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.js : banner 광고, play버튼 누를때 유튜브 영상 컴포넌트
 ┃ ┃ ┃ ┃ ┣ 📂category
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Category.styled.js : css in js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.js : category hover시 영상 나오는 컴포넌트
 ┃ ┃ ┃ ┃ ┣ 📂movieModal
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js : 캐러셀 이미지 클릭시 나오는 모달 컴포넌트
 ┃ ┃ ┃ ┃ ┃ ┗ 📜movieModal.css : css in js
 ┃ ┃ ┃ ┃ ┣ 📂nav
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js : 위에 nav, 스크롤 이벤트, 로그인, 로그아웃 관한 컴포넌트
 ┃ ┃ ┃ ┃ ┃ ┗ 📜Nav.styled.js : css in js
 ┃ ┃ ┃ ┃ ┗ 📂row
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js : swiper를 사용하여 캐러셀 생성
 ┃ ┃ ┃ ┃ ┃ ┗ 📜Row.css: swiper 커스텀 css
 ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┃ ┣ 📜useDebounce.js : 검색할때 디바운스 사용하기 위하여 제작하기 위한 파일
 ┃ ┃ ┃ ┗ 📜useOnclickOutSide.js : 모달창 띄운후 외부를 클릭해도 닫히도록 제작하기 위한 파일
 ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┣ 📂DetailPage : 영화 검색 후 원하는 영화 클릭시 나오는 페이지
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┣ 📂LoginPage : 로그인 하기전 나오는 페이지
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜LoginPagestyled.js : css in js
 ┃ ┃ ┃ ┣ 📂MainPage : 로그인 후 나오는 페이지
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┗ 📂SearchPage : 검색할때 나오는 페이지
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜SearchPage.css
 ┃ ┃ ┣ 📜App.css
 ┃ ┃ ┣ 📜App.js : layout 구성 -> route로 path 설정
 ┃ ┃ ┣ 📜App.test.js
 ┃ ┃ ┣ 📜firebase.js
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜logo.svg
 ┃ ┃ ┣ 📜reportWebVitals.js
 ┃ ┃ ┗ 📜setupTests.js
 ┃ ┣ 📜.firebaserc
 ┃ ┣ 📜.gitignore
 ┃ ┣ 📜firebase.json
 ┃ ┣ 📜package-lock.json
 ┃ ┣ 📜package.json
 ┃ ┗ 📜README.md
```
