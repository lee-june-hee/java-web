# quarkus 프로젝트 시작! (학번 : 20191007 이름 : 이준희)

매 주 수업 내용을 정리하자.

## 2, 3주차 수업 내용
실습 1 : 쿼크스 환경 구축 및 준비 완료!
실습 2 : HTML 기본 및 LOL 메인 화면 개발 완료!
<div align="center">
<img src="screenshots/2026-01-26 오전 9_51_43.png" width="45%" alt="실습 1 화면">
<img src="screenshots/파일명.png" width="45%" alt="실습 2 화면">
</div>
<br>
## 5주차 수업 내용
챔피언 상세보기 (모달) 구현
--> index.html 에서 iframe부분의 src="modals/Aatrox.html" 이게 불러오는 부분
--> title 아트록스 상세 title 이 부분은 단순 제목

../는 현재 파일 기준 한단계 위 폴더로 이동
../../ 이렇게 하면 두단계 위 폴더로 이동 가능

지금 index.html에서 폴더/파일명 이런식으로 사용하고 있음
../폴더/파일명 이렇게 적어도 지금은 인식이 되지만 오류가 날 수 있으므로 사용X
같은 폴더 -> 파일명
하위 폴더 -> 폴더/파일명
상위 폴더 -? ../폴더/파일명  -> 쉽게 쓰면 한 칸 올라가서 폴더 여기에 들어가 파일명을 가져와라

다운로드 페이지 구현

++ 챔피언 카드 7개 업데이트 및 수정

## 6주차 수업 내용
자바스크립트의 기본적인것 배움

## 7주차 수업 내용
style 부분 css 파일로 만들어 따로 뺌

search.js 실시간 챔피언 검색 기능 새로 작성

검색창에 검색을 하면 롤 홈페이지에서 검색하는거와 같이 가운데에 검색 내용 아래 뉴스나 소식이 나오게끔 search.js 수정

## 중간고사 대비 정리한 것들
1. 트렌드 / 이론 분석
AI 웹 개발
• AI는 코드 작성, 오류 수정, UI 제안을 도와줌
• 대표 도구: ChatGPT, Gemini, Claude
• 저코드 / 노코드확산
• 장점: 속도 향상, 접근성 증가
• 한계: 이해 부족, 정확성 문제, 방향성 판단 필요
• 결론: 개발자는 사라지는 게 아니라 역할이 바뀜
바이브 코딩
• 자동완성보다 더 발전한 방식
• AI가 코드 작성, 테스트, 오류 수정, 구조 설계, 콘텐츠 생성까지 도와줌
• 기존: 자동 완성
• 생성형 AI: 질문-답변
• 바이브 코딩: 개발 전반 협업
프론트엔드 / 백엔드
• 프론트엔드: 상호작용, 반응형, 마이크로 인터랙션, 호버 효과
• 중요 요소: 디자인, 편의성, 속도
• 백엔드: 중앙 서버 → 분산 구조
• 핵심: 웹 3.0, 블록체인, 사용자 중심 데이터, 보안 강화

2. Quarkus / GitHub
Quarkus
• 클라우드 네이티브 Java 프레임워크
• 강점: 빠른 실행, 낮은 메모리 사용, 컨테이너 최적화
• 지원: GraalVM 네이티브 컴파일
• 장점: 빠른 부팅, 적은 메모리, Kubernetes/서버리스 적합
• 단점: 빌드 시간 김, 프로젝트 이전 어려움
Quarkus 모듈
• REST: API 통신
• Qute: HTML 템플릿 엔진
• Qute Web: 웹페이지 개발용
• OpenID Connect: 로그인, 인증, 권한 관리
• WebSockets: 실시간 양방향 통신
실행
• ./mvnw quarkus:dev
GitHub
• 웹 기반 버전 관리 + 협업 도구
• 저장소: Repository
• 기본 흐름: 초기화 → 추가 → 커밋 → 업로드
• 핵심: 로컬과 서버가 상호작용

3. HTML 핵심
문서 구조
• <!DOCTYPE>: HTML5 문서 선언
• <html>: 문서 전체
• <head>: 보이지 않는 설정 정보
• <meta>: 인코딩, 화면 설정, 검색 정보
• <title>: 브라우저 탭 제목
• <body>: 실제 화면에 보이는 내용, 자주 쓰는 태그
<!-- • <div>: 의미 없는 영역 구분
• <section>: 의미 있는 구역 구분 -->
• <h1>: 가장 중요한 제목
• <p>: 문단
• <code>: 코드 표시
• <ul>: 순서 없는 목록
• <li>: 목록 항목
• <a href="">: 하이퍼링크
문서 기본 정보
• meta: 전역 정보
• link: 외부 자원 연결
• script: JS 연결
경로
• 상대 경로: ./, ../
• 절대 경로: http, https, /
상태 코드
• 200: 성공
• 301: 이동
• 304: 변경 없음
• 400: 잘못된 요청
• 404: 자원 없음
• 500: 서버 오류

4. Bootstrap 핵심
기본 구조
• container: 가운데 정렬, 좌우 여백
• row / col: 12칸 그리드
• navbar, navbar-expand-lg, navbar-dark: 네비게이션 바
• container-fluid: 너비 꽉 채움
• ms-auto: 오른쪽 정렬
• navbar-brand: 로고 스타일
• navbar-toggler: 햄버거 버튼
• navbar-toggler-icon: 햄버거 아이콘
• data-bs-toggle, data-bs-target: JS 동작 연결
간격 / 열 개수
• g-4: 컬럼 사이 여백 조절
• row-cols-*: 한 줄 열 개수 조절
모달
• Bootstrap 팝업 컴포넌트
• 구조: Header / Body / Footer • data-bs-targetid연결
• iframe으로 내부 HTML 띄울 수 있음
• data-bs-dismiss="modal": 닫기 기능
id / class
• id#, 문서에서 1개
• class., 여러 요소에 사용 가능

5. CSS 핵심
기본 속성
• background-color: 배경색
• color: 글자색
• font-family: 글꼴
• linear-gradient: 그라데이션
• border: 테두리
• height: 높이
• object-fit: cover: 비율 유지하며 꽉 채우기
인터랙션
• transition: 부드러운 변화
• :hover: 마우스 올렸을 때
• transform: scale: 확대/축소
• box-shadow: 그림자 / Glow 효과
우선순위
• 기본 → 외부 → 내부 / 인라인
• 선택자가 구체적일수록 우선
• 인라인 스타일, !important가 강함

6. JavaScript 핵심 개요
역할
• HTML = 구조
• CSS = 디자인
• JavaScript = 동작
특징
• 웹페이지를 실제로 움직이게 함
• 프론트엔드, 백엔드, DB 관련 작업까지 가능
• 범용 애플리케이션 언어
• 인터프리터 성격
• 함수형 + 객체지향 특징
엔진
• Chrome: V8
• Firefox: SpiderMonkey
• Safari: WebKit 계열
실행 구조
• Memory Heap: 데이터 저장
• Call Stack: 실행 순서
• Callback Queue: 대기 중 콜백
• Event Loop: Stack과 Queue 연결
비동기 처리 예
• DOM
• AJAX
• setTimeout

7. JS 연결 방식
<script>
• JS 파일 연결 태그
• 방식
• CDN
• 로컬 파일
• 내부 스크립트
CDN
• 외부 서버에서 JS/CSS 파일 불러옴
• 장점: 빠르고 편리
• 단점: 외부 의존성
로컬 연결
• 경로: resources/META-INF/resources
• 예:
<script src="js/bootstrap.bundle.min.js"></script>
내부 스크립트
<script>
window.onload = function() {
 alert("메인 페이지 로딩 완료");
}
</script>
구현 방식 비교
• 인라인: 태그 안 직접 작성, 비권장
• 내부 스크립트: HTML 내부 작성
• 외부 스크립트: 가장 권장
• CDN: 라이브러리용 적합
인라인 비추천 이유
• 관리 어려움
• 재사용 어려움
• XSS 보안 문제

8. JS 기본 문법
var / let / const
• var: 함수 스코프 / 재선언 O / 재할당 O / 호이스팅 undefined
• let: 블록 스코프 / 재선언 X / 재할당 O / TDZ
• const: 블록 스코프 / 재선언 X / 재할당 X / 초기화 필수 / TDZ
스코프
• var: 함수 기준
• let, const{ }블록 기준
호이스팅
• 선언부를 위로 끌어올려 처리
• var: 선언만 올라가고 값은 나중에 들어감
• let, const: 선언 전 접근 시 에러
TDZ
• let, const선언 전 접근 불가 구간
• 선언 전에 쓰면 ReferenceError

9. DOM 핵심
DOM이란
• HTML 문서를 트리 구조로 바꿔 관리하는 표준 구조
• 최상위 객체: Document • HTML 태그는 계층 구조
• JS로 구조, 스타일, 내용 변경가능
DOM 선택 메서드
• getElementById(): id로 1개
• getElementsByClassName(): class로 여러 개
• getElementsByName(): name으로 여러 개
• querySelector(): 선택자로 1개
• querySelectorAll(): 선택자로 여러 개

10. form / 이벤트 / 실행 구조
<form>기본 동작
• 데이터 전송
• 페이지 새로고침
preventDefault()
• 기본 동작 막기
• 새로고침 없이 JS 실행
• 예: 유효성 검사
실행 구조
• Call Stack: 실행 중 함수
• Web APIs: 브라우저 기능
• Task Queue: 대기 중 콜백
• Event Loop: Stack 비면 Queue 전달
이벤트 연결 방식
• 인라인: 태그 안 직접 작성, 비권장
• 프로퍼티: element.onclick = ..., 이벤트 1개
• 리스너: addEventListener(), 가장 권장

11. 배열 / 객체 배열
일반 변수
• 값 1개 저장
• 예: 이름, 점수
배열
• 값 여러 개 저장
• 인덱스로 접근
• 예: CHAMPIONS[0]
일반 배열
• 구조: [값, 값, 값]
• 단순 목록
객체 배열
• 구조: [{키:값}, {키:값}]
• 복잡한 데이터 목록
12. LOL 검색 기능 구현
전체 흐름
PART 1
• 사용자가 검색어 입력 후 Enter • performSearch실행
• trim(): 공백 제거
• toLowerCase(): 소문자 변환
• filter(): 챔피언 / 뉴스 데이터 검색
PART 2
• JS가 HTML 구조를 동적으로 생성
• map()join(): 결과 카드 문자열 생성
• innerHTML: 화면에 출력
• classList.add()/remove(): 화면 숨김/표시
• CSS 조작으로 검색 결과 화면 전환
핵심
• 데이터 검색 + DOM 조작 + 화면 전환

시험 직전 1줄 암기 모음 • AI는 개발자를 없애는 게 아니라 개발 방식을 바꿈
• Quarkus는 클라우드 네이티브 Java 프레임워크
• GitHub는 버전 관리 + 협업 도구
• HTML은 구조, CSS는 디자인, JS는 동작
• container / row / col= Bootstrap 기본 구조
• g-4= 간격, row-cols-*= 열 개수
• div= 의미 없음, section= 의미 있음
• var= 옛 방식, let= 바뀔 값, const= 안 바뀔 값
• DOM = HTML 문서의 트리 구조
• preventDefault()= form 기본 동작 막기
• 이벤트 연결은 addEventListener()가 가장 권장
• 배열 = 여러 값 저장, 객체 배열 = 복잡한 데이터 목록
• LOL 검색 기능 = 검색어 처리 → filter → DOM 생성 → 화면 전환