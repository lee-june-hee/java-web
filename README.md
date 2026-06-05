# quarkus 프로젝트 시작! (학번 : 20191007 이름 : 이준희)

매 주 수업 내용을 정리하자.

<details>
<summary>중간고사 내용</summary>
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
- `<!DOCTYPE html>`: HTML5 문서 선언
- `<html>`: 문서 전체
- `<head>`: 보이지 않는 설정 정보
- `<meta>`: 인코딩, 화면 설정, 검색 정보
- `<title>`: 브라우저 탭 제목
- `<body>`: 실제 화면에 보이는 내용, 자주 쓰는 태그
- `<div>`: 의미 없는 영역 구분
- `<section>`: 의미 있는 구역 구분
- `<h1>`: 가장 중요한 제목
- `<p>`: 문단
- `<code>`: 코드 표시
- `<ul>`: 순서 없는 목록
- `<li>`: 목록 항목
- `<a href="">`: 하이퍼링크
문서 기본 정보
- `meta`: 전역 정보
- `link`: 외부 자원 연결
- `script`: JS 연결
경로
- 상대 경로: `./`, `../`
- 절대 경로: `http`, `https`, `/`
상태 코드
- `200`: 성공
- `301`: 이동
- `304`: 변경 없음
- `400`: 잘못된 요청
- `404`: 자원 없음
- `500`: 서버 오류

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

</details>


## 9주차 수업 내용 정리
## 라이트 모드 CSS

아래 코드는 `body` 태그에 `light-mode` 클래스가 적용되었을 때  
페이지 전체 배경, 네비게이션 바, hero 영역, 카드, 버튼 색상을 밝은 테마로 변경하는 CSS이다.

### 기능 설명
- 토글 버튼의 글자 크기와 색상을 설정
- 라이트 모드일 때 페이지 전체 배경색과 글자색 변경
- navbar 배경색과 메뉴 글자색 변경
- hero 영역 배경을 밝은 그라데이션으로 변경
- card 배경색, 제목색, 본문색, 테두리 변경

### 코드
```css
/* ── [추가] 테마 토글 버튼 (폰트 크기, 색상 등 ) ──────────────── */

/* 기본 다크 모드에서 토글 버튼 글자 크기와 색상 */
#themeToggleBtn {
    font-size: 1.1rem;
    color: #fff;
}
/* 라이트 모드가 되면 토글 버튼 글자색을 어둡게 변경 */
body.light-mode #themeToggleBtn {
    color: #212529;
}

/* ── [추가] 라이트 모드 (다양한 색상 정보 ─────────────────────── */

/* 페이지 전체 배경과 기본 글자색 변경 */
body.light-mode {
    background-color: #f8f9fa;
    color: #212529;
}
/* navbar 배경색 변경 */
body.light-mode .navbar {
    background-color: #e9ecef !important;
}
/* navbar 안 브랜드명, 링크 글자색 변경 */
body.light-mode .navbar .navbar-brand,
body.light-mode .navbar .nav-link {
    color: #212529 !important;
}
/* hero 영역 배경을 밝은 그라데이션으로 변경 */
body.light-mode .hero {
    background: linear-gradient(to bottom, #dce3ea, #f8f9fa);
}
/* 카드 전체 배경, 글자색, 테두리 변경 */
body.light-mode .card {
    background-color: #ffffff;
    color: #212529;
    border: 1px solid #dee2e6;
}
/* 카드 제목 색 변경 */
body.light-mode .card-title {
    color: #212529;
}
/* 카드 본문 글자색 변경 */
body.light-mode .card-text {
    color: #555;
}
```

### 동작 방식
이 코드는 JavaScript에서 `body`에 `light-mode` 클래스를 추가했을 때 적용된다.  
즉, JavaScript가 `body.classList.toggle('light-mode')`를 실행하면  
위 CSS가 활성화되어 다크 모드와 라이트 모드가 전환된다.

---

## 다크/라이트 모드 토글 JavaScript

아래 코드는 버튼 클릭 시 `body` 태그에 `light-mode` 클래스를 추가하거나 제거하여  
다크 모드와 라이트 모드를 전환하는 JavaScript이다.

### 기능 설명
- `body`에 `light-mode` 클래스 추가 / 제거
- 토글 버튼 글자를 `DARK` / `LIGHT`로 변경
- navbar의 Bootstrap 클래스를 다크 모드 / 라이트 모드에 맞게 변경
- CSS의 `body.light-mode` 규칙이 적용되도록 연결

### 코드
```javascript
// [추가] 다크/라이트 모드 토글 JavaScript
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('themeToggleBtn');
    const navbar = document.querySelector('.navbar');

    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        btn.textContent = ' LIGHT';
        navbar.classList.remove('navbar-dark', 'bg-dark');
        navbar.classList.add('navbar-light', 'bg-light');
    } else {
        btn.textContent = ' DARK';
        navbar.classList.remove('navbar-light', 'bg-light');
        navbar.classList.add('navbar-dark', 'bg-dark');
    }
}
```

### 동작 방식
이 코드는 토글 버튼 클릭 시 실행된다.  
먼저 `body.classList.toggle('light-mode')`를 통해 `body`에 `light-mode` 클래스를 추가하거나 제거한다.  
그 다음 현재 `light-mode` 클래스가 있는지 확인하여 버튼 글자를 변경하고,  
navbar의 Bootstrap 클래스를 `navbar-dark bg-dark` 또는 `navbar-light bg-light`로 바꿔  
화면 테마가 전체적으로 일관되게 보이도록 만든다.

---

## Quarkus 기본 REST 예제

아래 코드는 Quarkus에서 가장 기본적인 REST API 예제이다.  
사용자가 `/hello` 주소로 GET 요청을 보내면  
서버는 `"Hello from Quarkus REST"` 문자열을 일반 텍스트 형식으로 응답한다.

### 기능 설명
- `@Path("/hello")`를 사용하여 `/hello` 경로 지정
- `@GET`을 사용하여 GET 요청 처리
- `@Produces(MediaType.TEXT_PLAIN)`을 사용하여 텍스트 형식으로 응답
- `hello()` 메서드에서 문자열 반환

### 코드
```java
package org.acme; // 패키지 선언

import jakarta.ws.rs.GET; // GET 요청 처리를 위한 import
import jakarta.ws.rs.Path; // URL 경로 지정을 위한 import
import jakarta.ws.rs.Produces; // 응답 형식 지정을 위한 import
import jakarta.ws.rs.core.MediaType; // TEXT_PLAIN 같은 응답 타입 사용

@Path("/hello") // /hello 주소로 들어온 요청 처리
public class GreetingResource { // REST 요청을 담당하는 클래스

    @GET // GET 방식 요청 처리
    @Produces(MediaType.TEXT_PLAIN) // 일반 문자열 텍스트로 응답
    public String hello() { // 요청이 들어오면 실행되는 메서드
        return "Hello from Quarkus REST"; // 브라우저에 보여줄 값 반환
    }
}
```

### 동작 방식
이 코드는 사용자가 `/hello` 주소로 접속했을 때 실행된다.  
`@Path("/hello")`에 의해 해당 경로가 지정되고,  
`@GET` 어노테이션이 붙은 `hello()` 메서드가 호출된다.  
메서드는 `"Hello from Quarkus REST"` 문자열을 반환하며,  
`@Produces(MediaType.TEXT_PLAIN)`에 의해 일반 텍스트 형식으로 브라우저에 표시된다.

---

## Quarkus 의존성 추가

아래 코드는 `pom.xml`에 추가한 Quarkus dependency 설정이다.  
이 설정을 통해 MySQL 데이터베이스 연결, ORM 기반 데이터 처리, JSON 응답 기능을 사용할 수 있다.

### 기능 설명
- `quarkus-jdbc-mysql` : MySQL 데이터베이스 연결을 위한 JDBC 드라이버
- `quarkus-hibernate-orm-panache` : Hibernate ORM과 Panache를 사용하여 DB 작업을 간편하게 처리
- `quarkus-rest-jackson` : Java 객체를 JSON 형식으로 변환하여 REST API 응답에 사용

### 코드
```xml
<!-- MySQL 데이터베이스 연결을 위한 JDBC 드라이버 -->
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-jdbc-mysql</artifactId>
</dependency>

<!-- Hibernate ORM과 Panache를 사용하여 DB 작업을 쉽게 처리 -->
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-hibernate-orm-panache</artifactId>
</dependency>

<!-- Java 객체를 JSON으로 변환하기 위한 Jackson 라이브러리 -->
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-rest-jackson</artifactId>
</dependency>
```

### 동작 방식
이 dependency들은 `pom.xml`의 `<dependencies>` 태그 안에 추가하여 사용한다.  
`quarkus-jdbc-mysql`은 MySQL과의 연결을 담당하고,  
`quarkus-hibernate-orm-panache`는 데이터베이스 테이블을 자바 객체처럼 쉽게 다룰 수 있게 해준다.  
또한 `quarkus-rest-jackson`은 자바 객체를 JSON 형식으로 변환하여 REST API 응답으로 보낼 수 있게 해준다.

---

## 데이터베이스 연결 설정

아래 코드는 Quarkus 프로젝트에서 MySQL 데이터베이스에 연결하기 위한 `application.properties` 설정이다.  
데이터베이스 종류, 접속 계정, 비밀번호, 접속 URL을 지정하고,  
Hibernate의 테이블 자동 반영 및 SQL 출력 기능도 함께 설정하였다.

### 기능 설명
- `quarkus.datasource.db-kind=mysql` : 사용할 데이터베이스를 MySQL로 지정
- `quarkus.datasource.username=root` : DB 접속 아이디 설정
- `quarkus.datasource.password=123123` : DB 접속 비밀번호 설정
- `quarkus.datasource.jdbc.url=jdbc:mysql://localhost:3306/lol` : MySQL 접속 주소와 데이터베이스 이름 지정
- `quarkus.hibernate-orm.database.generation=update` : 엔티티 변경 내용을 DB 테이블에 자동 반영
- `quarkus.hibernate-orm.log.sql=true` : 실행되는 SQL문을 콘솔에 출력

### 코드
```properties
# 데이터베이스 연결 설정
quarkus.datasource.db-kind=mysql
quarkus.datasource.username=root
quarkus.datasource.password=123123
quarkus.datasource.jdbc.url=jdbc:mysql://localhost:3306/lol

# Hibernate 설정
quarkus.hibernate-orm.database.generation=update
quarkus.hibernate-orm.log.sql=true
```

### 동작 방식
이 설정은 Quarkus 애플리케이션 실행 시 MySQL 데이터베이스와 연결하기 위해 사용된다.  
`quarkus.datasource.*` 설정으로 DB 접속 정보를 지정하고,  
Hibernate 설정을 통해 엔티티 변경 시 테이블 구조를 자동으로 반영하며,  
실행되는 SQL문을 콘솔에 출력하여 데이터 처리 과정을 확인할 수 있다.

---

## Champion 엔티티 클래스

아래 코드는 챔피언 정보를 저장하기 위한 엔티티 클래스이다.  
`Champion` 클래스는 `PanacheEntity`를 상속하여 Quarkus Panache 기능을 사용할 수 있으며,  
챔피언 이름, 역할, 라인 정보를 데이터베이스에 저장할 수 있도록 구성하였다.

### 기능 설명
- `@Entity`를 사용하여 데이터베이스 테이블과 연결되는 엔티티 클래스 선언
- `PanacheEntity`를 상속하여 기본 `id`와 DB 관련 메서드 사용 가능
- `name` : 챔피언 이름 저장
- `role` : 챔피언 역할 저장
- `line` : 챔피언 라인 정보 저장

### 코드
```java
package org.acme; // 패키지 선언

import io.quarkus.hibernate.orm.panache.PanacheEntity; // PanacheEntity 상속용 import
import jakarta.persistence.Entity; // 엔티티 선언용 import

@Entity // 이 클래스가 데이터베이스 테이블과 연결되는 엔티티임을 표시
public class Champion extends PanacheEntity { // PanacheEntity를 상속받아 DB 작업을 쉽게 처리

    public String name; // 챔피언 이름
    public String role; // 역할 (전사, 마법사 등)
    public String line; // 라인 (탑, 미드 등)
}
```

### 동작 방식
이 클래스는 Quarkus와 Hibernate ORM이 데이터베이스 테이블로 인식하는 엔티티 클래스이다.  
`@Entity`를 통해 테이블과 연결되며, `PanacheEntity`를 상속함으로써 기본 `id` 필드와  
`persist()`, `listAll()`, `count()` 등의 메서드를 쉽게 사용할 수 있다.  
각 필드인 `name`, `role`, `line`은 챔피언의 이름, 역할, 라인 정보를 저장하는 데 사용된다.

---

## Champion REST API

아래 코드는 챔피언 데이터를 조회하고 추가하기 위한 Quarkus REST API 클래스이다.  
`/champions` 경로에서 GET 요청으로 전체 챔피언 목록을 조회할 수 있고,  
POST 요청으로 새로운 챔피언 데이터를 데이터베이스에 저장할 수 있다.

### 기능 설명
- `@Path("/champions")` : `/champions` 경로 지정
- `@Produces(MediaType.APPLICATION_JSON)` : 응답 데이터를 JSON 형식으로 반환
- `@Consumes(MediaType.APPLICATION_JSON)` : 요청 데이터를 JSON 형식으로 받음
- `@GET` : 전체 챔피언 목록 조회
- `@POST` : 새 챔피언 데이터 추가
- `@Transactional` : DB 저장 작업을 트랜잭션으로 처리

### 코드
```java
package org.acme; // 패키지 선언

import jakarta.transaction.Transactional; // DB 저장 작업을 위한 트랜잭션 처리
import jakarta.ws.rs.*; // REST 관련 어노테이션 import
import jakarta.ws.rs.core.MediaType; // JSON 같은 데이터 형식 지정
import java.util.List; // 여러 개 데이터를 리스트로 반환할 때 사용

@Path("/champions") // /champions 주소 요청 처리
@Produces(MediaType.APPLICATION_JSON) // 응답은 JSON 형식으로 반환
@Consumes(MediaType.APPLICATION_JSON) // 요청 데이터는 JSON 형식으로 받음
public class ChampionResource {

    // 전체 목록 조회
    @GET // GET 요청 처리
    public List<Champion> list() {
        return Champion.listAll(); // DB의 Champion 전체 목록 반환
    }

    // 새 챔피언 추가
    @POST // POST 요청 처리
    @Transactional // DB 저장 작업을 트랜잭션으로 처리
    public void add(Champion champion) {
        champion.persist(); // 전달받은 Champion 객체를 DB에 저장
    }
}
```

### 동작 방식
이 클래스는 `/champions` 경로에 대한 REST 요청을 처리한다.  
GET 요청이 들어오면 `list()` 메서드가 실행되어 데이터베이스에 저장된 챔피언 전체 목록을 조회하고,  
이를 JSON 형식으로 반환한다.  
POST 요청이 들어오면 클라이언트가 보낸 JSON 데이터를 `Champion` 객체로 받아 `persist()`를 통해 DB에 저장한다.  
이때 `@Transactional`을 사용하여 저장 작업을 하나의 트랜잭션으로 처리한다.

---

## 초기 데이터 자동 등록(DataSeeder)

아래 코드는 Quarkus 애플리케이션이 시작될 때 기본 데이터를 자동으로 데이터베이스에 저장하는 클래스이다.  
`User` 테이블이 비어 있으면 기본 로그인 계정을 생성하고,  
`Champion` 테이블이 비어 있으면 기본 챔피언 데이터를 등록한다.

### 기능 설명
- `@ApplicationScoped` : 애플리케이션 전체에서 한 번만 생성되는 Bean
- `@Observes StartupEvent` : 서버 시작 이벤트를 감지하여 메서드 실행
- `@Transactional` : DB 저장 작업을 트랜잭션으로 처리
- `User.count() == 0` : 유저 데이터가 없을 때 기본 계정 생성
- `Champion.count() > 0` : 챔피언 데이터가 이미 있으면 중복 저장 방지
- `persist()` 메서드 : 챔피언 데이터를 공통 방식으로 DB에 저장

### 코드
```java
package org.acme.common; // 패키지 선언

import org.acme.champion.Champion; // Champion 엔티티 사용
import org.acme.login.User; // User 엔티티 사용

import io.quarkus.runtime.StartupEvent; // 애플리케이션 시작 이벤트
import jakarta.enterprise.context.ApplicationScoped; // 애플리케이션 전체에서 한 번만 생성
import jakarta.enterprise.event.Observes; // 이벤트 감지
import jakarta.transaction.Transactional; // DB 작업을 트랜잭션으로 처리

@ApplicationScoped // 한번만 등록
public class DataSeeder {

    @Transactional
    void onStart(@Observes StartupEvent ev) { // 서버 시작 시 실행
        // DataSeeder.java onStart() 메서드에 추가
        // User 초기 데이터 (챔피온 데이터와 별도 블록)
        if (User.count() == 0) {
            User guest = new User();
            guest.username = "guest";
            guest.password = "123123";
            guest.persist();
        }

        if (Champion.count() > 0) {
            return; // 이미 데이터 있으면 중단
        }

        persist("아트록스", "전사", "탑");
        persist("사일러스", "마법사", "정글/미드");
        persist("애니비아", "마법사", "미드");
        persist("브라이어", "전사", "정글");
        persist("잭스", "전사", "탑");
        persist("징크스", "원거리딜러", "원딜");
        persist("야스오", "전사", "미드/탑");
        persist("리신", "전사", "정글");
        persist("티모", "마법사", "탑");
        persist("케인", "암살자", "정글");
        persist("루시안", "원거리딜러", "원딜/미드");
    }

    private void persist(String name, String role, String line) {
        Champion c = new Champion();
        c.name = name;
        c.role = role;
        c.line = line;
        c.persist();
    }
}
```

### 동작 방식
이 클래스는 Quarkus 서버가 시작될 때 자동으로 실행된다.  
먼저 `User` 테이블에 데이터가 없는지 확인하고, 없으면 기본 `guest` 계정을 생성하여 저장한다.  
그 다음 `Champion` 테이블에 데이터가 이미 존재하면 더 이상 진행하지 않고 종료한다.  
챔피언 데이터가 없는 경우에는 `persist()` 메서드를 반복 호출하여 기본 챔피언 목록을 데이터베이스에 저장한다.  
이를 통해 프로그램 실행 직후에도 기본 로그인 계정과 챔피언 데이터가 준비된 상태로 시작할 수 있다.


---

## 10주차 정리
## 로그인 페이지 반환(AuthResource)

아래 코드는 Quarkus에서 `/login` 주소로 접속했을 때 로그인 HTML 페이지를 반환하는 코드이다.  
서버는 `META-INF/resources/login/login.html` 파일을 읽어와 브라우저에 HTML 형식으로 응답한다.

### 기능 설명
- `@Path("/")` : 기본 경로를 최상위 `/`로 설정
- `@GET` : GET 요청 처리
- `@Path("/login")` : `/login` 주소 요청 처리
- `@Produces(MediaType.TEXT_HTML)` : HTML 형식으로 응답
- `InputStream` : `login.html` 파일을 읽어오기 위해 사용
- `Response.ok(html).build()` : 읽어온 HTML 파일을 정상 응답으로 반환

### 코드
```java
package org.acme.login; // 패키지 선언

import jakarta.ws.rs.*; // REST 관련 어노테이션 사용
import jakarta.ws.rs.core.MediaType; // 응답 형식 지정
import jakarta.ws.rs.core.Response; // HTTP 응답 객체 사용
import java.net.URI; // 페이지 이동 주소를 만들 때 사용
import java.io.InputStream; // HTML 파일을 읽어올 때 사용

@Path("/") // 기본 경로가 최상위 /
public class AuthResource {

    // GET /login → 로그인 HTML 페이지 반환
    @GET
    @Path("/login") // /login 경로 명시
    @Produces(MediaType.TEXT_HTML) // 서버 → 클라이언트, HTML 형식으로 응답
    public Response loginPage() { // 로그인 페이지 요청 처리 메서드
        InputStream html = getClass()
                .getClassLoader()
                .getResourceAsStream("META-INF/resources/login/login.html");

        return Response.ok(html).build(); // 읽어온 HTML 파일을 정상 응답으로 반환
    }
}
```

### 동작 방식
이 코드는 사용자가 `/login` 주소로 접속했을 때 실행된다.  
`@GET`과 `@Path("/login")`에 의해 `loginPage()` 메서드가 호출되고,  
서버는 `getResourceAsStream()`을 사용해 `META-INF/resources/login/login.html` 파일을 읽어온다.  
그 후 `Response.ok(html).build()`를 통해 읽어온 HTML 파일을 브라우저에 전달한다.  
이를 통해 사용자는 `/login` 주소에서 로그인 화면을 볼 수 있다.

---

## 로그인 폼 HTML

아래 코드는 로그인 페이지에서 아이디와 패스워드를 입력받는 HTML form 코드이다.  
사용자가 로그인 버튼을 누르면 입력한 `username`, `password` 값이  
POST 방식으로 `/login_check` 주소에 전송된다.

### 기능 설명
- `section.hero` : 로그인 화면 영역 구성
- `container` : 로그인 폼의 너비와 배치 조정
- `form method="POST"` : 입력값을 POST 방식으로 서버에 전송
- `action="/login_check"` : 로그인 검증 요청을 보낼 서버 경로 지정
- `name="username"` : 서버에서 아이디 값을 받을 이름
- `name="password"` : 서버에서 패스워드 값을 받을 이름
- `required` : 입력값이 비어 있으면 제출되지 않도록 설정
- `type="submit"` : 버튼 클릭 시 form 제출

### 코드
```html
<!-- 네비바 → index.html과 동일하게 복사 -->
<section class="hero d-flex align-items-center
    justify-content-center text-center py-5">
    <div class="container" style="max-width: 400px;">
        <h2 class="fw-bold mb-4">로그인</h2>

        <form method="POST" action="/login_check">
            <div class="mb-3 text-start">
                <label class="form-label">아이디</label>
                <input type="text" class="form-control"
                    name="username" placeholder="아이디 입력" required>
            </div>

            <div class="mb-3 text-start">
                <label class="form-label">패스워드</label>
                <input type="password" class="form-control"
                    name="password" placeholder="패스워드 입력" required>
            </div>

            <button type="submit"
                class="btn btn-primary w-100">로그인</button>
        </form>
    </div>
</section>
```

### 동작 방식
이 코드는 로그인 페이지에서 사용자에게 아이디와 패스워드 입력창을 보여준다.  
사용자가 값을 입력하고 로그인 버튼을 누르면 `form` 태그가 동작하여  
`username`과 `password` 값을 `/login_check` 주소로 POST 방식으로 전송한다.  
서버에서는 이 값을 받아 아이디와 패스워드가 올바른지 확인하고,  
로그인 성공 또는 실패 처리를 진행한다.

---

## 로그인 확인 처리(login_check)

아래 코드는 로그인 form에서 전송된 아이디와 패스워드를 서버에서 받는 코드이다.  
사용자가 로그인 버튼을 누르면 `username`, `password` 값이 POST 방식으로 `/login_check` 주소에 전송되고,  
서버는 해당 요청을 처리한 뒤 임시로 로그인 성공 페이지로 이동시킨다.

### 기능 설명
- `@POST` : POST 요청 처리
- `@Path("/login_check")` : `/login_check` 경로 지정
- `@Consumes(MediaType.APPLICATION_FORM_URLENCODED)` : HTML form 데이터 수신
- `@FormParam("username")` : form에서 전송된 아이디 값 받기
- `@FormParam("password")` : form에서 전송된 패스워드 값 받기
- `Response.seeOther()` : 요청 처리 후 다른 페이지로 이동
- `URI.create("/login/main_after_login.html")` : 이동할 페이지 주소 지정

### 코드
```java
@POST // POST 방식 요청 처리
@Path("/login_check") // /login_check 주소 요청 처리
@Consumes(MediaType.APPLICATION_FORM_URLENCODED) // 클라이언트 → 서버, form 데이터 받기
public Response loginCheck(
        @FormParam("username") String username, // form의 name="username" 값 받기
        @FormParam("password") String password) { // form의 name="password" 값 받기

    // [임시] 일단 로그인 성공 처리 (DB 체크 전)
    return Response
            .seeOther(URI.create("/login/main_after_login.html")) // 로그인 성공 후 이동할 페이지
            .build(); // 응답 완성
}
```

### 동작 방식
이 코드는 사용자가 로그인 form을 제출했을 때 실행된다.  
form의 `method="POST"`와 `action="/login_check"`에 의해 `/login_check` 주소로 요청이 전송되고,  
서버에서는 `@FormParam("username")`과 `@FormParam("password")`를 통해 입력값을 받는다.  
현재 단계에서는 데이터베이스 검증을 하지 않고 임시로 로그인 성공 처리하며,  
`Response.seeOther()`를 사용해 `/login/main_after_login.html` 페이지로 이동시킨다.

---

## User 엔티티 클래스

아래 코드는 로그인 기능에서 사용할 사용자 정보를 저장하기 위한 엔티티 클래스이다.  
`User` 클래스는 `PanacheEntity`를 상속하여 DB 작업을 쉽게 처리할 수 있으며,  
`users` 테이블에 사용자 아이디와 비밀번호를 저장한다.

### 기능 설명
- `@Entity` : 데이터베이스 테이블과 연결되는 엔티티 클래스 선언
- `@Table(name = "users")` : 테이블 이름을 `users`로 지정
- `PanacheEntity` : 기본 `id`와 DB 관련 메서드 사용 가능
- `username` : 사용자 아이디 저장
- `password` : 사용자 비밀번호 저장
- `findByUsername()` : 사용자 아이디로 User 데이터 조회

### 코드
```java
package org.acme.login; // 패키지 선언

import io.quarkus.hibernate.orm.panache.PanacheEntity; // PanacheEntity 상속을 위한 import
import jakarta.persistence.Entity; // 엔티티 선언을 위한 import
import jakarta.persistence.Table; // 테이블 이름 지정을 위한 import

@Entity // 이 클래스가 데이터베이스 테이블과 연결되는 엔티티임을 표시
@Table(name = "users") // 예약어 충돌 방지: "user" → "users"
public class User extends PanacheEntity { // PanacheEntity를 상속받아 DB 작업을 쉽게 처리

    public String username; // 사용자 아이디
    public String password; // 사용자 비밀번호

    // 사용자명으로 조회하는 정적 메서드
    public static User findByUsername(String username) {
        return find("username", username).firstResult(); // username이 일치하는 첫 번째 사용자 반환
    }
}
```

### 동작 방식
이 클래스는 로그인 기능에서 사용자 정보를 데이터베이스에 저장하고 조회하기 위해 사용된다.  
`@Entity`를 통해 데이터베이스 테이블과 연결되고, `@Table(name = "users")`를 통해 실제 테이블 이름을 `users`로 지정한다.  
`username`과 `password` 필드는 각각 사용자 아이디와 비밀번호를 저장한다.  
로그인 처리 시 `User.findByUsername(username)`을 호출하면, DB에서 해당 아이디와 일치하는 사용자를 찾아 첫 번째 결과를 반환한다.  
이 결과를 이용해 사용자가 존재하는지 확인하고, 비밀번호가 맞는지 비교하여 로그인 성공 여부를 판단할 수 있다.

---

## User 초기 데이터 등록

아래 코드는 Quarkus 애플리케이션이 시작될 때 `User` 테이블에 기본 로그인 계정을 자동으로 등록하는 코드이다.  
`User` 테이블이 비어 있을 경우에만 `guest` 계정을 생성하므로, 서버를 여러 번 실행해도 같은 계정이 중복 저장되지 않는다.

### 기능 설명
- `User.count() == 0` : User 테이블에 데이터가 없는지 확인
- `new User()` : 새 사용자 객체 생성
- `guest.username = "guest"` : 기본 아이디 설정
- `guest.password = "123123"` : 기본 비밀번호 설정
- `guest.persist()` : 생성한 사용자를 데이터베이스에 저장

### 코드
```java
// DataSeeder.java onStart() 메서드에 추가
// User 초기 데이터 (챔피온 데이터와 별도 블록)
if (User.count() == 0) { // User 테이블에 데이터가 하나도 없으면
    User guest = new User(); // 새 User 객체 생성
    guest.username = "guest"; // 기본 아이디 설정
    guest.password = "123123"; // 기본 비밀번호 설정
    guest.persist(); // DB에 저장
}
```

### 동작 방식
이 코드는 서버가 시작될 때 실행되는 `DataSeeder`의 `onStart()` 메서드 안에 작성된다.  
먼저 `User.count()`를 통해 `User` 테이블에 데이터가 있는지 확인한다.  
데이터가 하나도 없으면 `guest`라는 새 사용자 객체를 만들고, 아이디와 비밀번호를 설정한 뒤 `persist()`를 사용해 데이터베이스에 저장한다.  
이를 통해 프로젝트 실행 시 기본 로그인 테스트 계정을 자동으로 준비할 수 있다.

---

## 세션 설정(SessionConfig)

아래 코드는 Quarkus Vert.x 환경에서 세션 기능을 사용하기 위한 설정 클래스이다.  
로그인 후 사용자 정보를 세션에 저장하려면 요청에 세션 핸들러가 적용되어야 하며,  
이 클래스는 모든 요청에 `SessionHandler`를 등록하여 세션을 사용할 수 있도록 한다.

### 기능 설명
- `Router` : 서버 요청 경로를 관리하는 객체
- `SessionHandler` : 세션 기능을 처리하는 핸들러
- `LocalSessionStore` : 서버 내부에 세션 정보를 저장하는 저장소
- `@Inject` : Quarkus 컨테이너가 `Vertx` 객체를 자동 주입
- `@Observes Router router` : Router가 준비될 때 메서드 실행
- `setSessionTimeout(60 * 60 * 1000L)` : 세션 유지 시간을 1시간으로 설정
- `setCookieHttpOnlyFlag(true)` : JavaScript에서 세션 쿠키 접근을 막아 보안 강화

### 코드
```java
package org.acme.login; // 패키지 선언

import io.vertx.ext.web.Router; // 요청 라우터 사용
import io.vertx.ext.web.handler.SessionHandler; // 세션 처리를 위한 핸들러
import io.vertx.ext.web.sstore.LocalSessionStore; // 로컬 세션 저장소
import jakarta.enterprise.event.Observes; // Router 이벤트 감지
import io.quarkus.vertx.http.HttpServerStart; // HTTP 서버 시작 관련 클래스
import jakarta.inject.Inject; // 컨테이너 자동 주입
import io.vertx.core.Vertx; // Vert.x 객체 사용

public class SessionConfig {

    @Inject // 컨테이너 자동 주입
    Vertx vertx; // 세션 저장소 관리

    public void init(@Observes Router router) { // Router가 준비될 때 실행
        router.route().handler( // 모든 요청에 세션 핸들러 적용
                SessionHandler
                        .create(LocalSessionStore.create(vertx)) // 로컬 세션 저장소 생성
                        .setSessionTimeout(60 * 60 * 1000L) // 세션 유지 시간 1시간
                        .setCookieHttpOnlyFlag(true) // JavaScript에서 쿠키 접근 차단
        );
    }
}
```

### 동작 방식
이 클래스는 Quarkus 서버가 실행되고 `Router`가 준비될 때 `init()` 메서드를 실행한다.  
`router.route().handler()`를 통해 모든 요청에 `SessionHandler`를 등록하고,  
`LocalSessionStore.create(vertx)`를 사용해 서버 내부에 세션 저장소를 만든다.  
또한 `setSessionTimeout(60 * 60 * 1000L)`로 세션 유지 시간을 1시간으로 설정하고,  
`setCookieHttpOnlyFlag(true)`로 세션 쿠키를 JavaScript에서 접근하지 못하게 하여 보안을 강화한다.  
이 설정이 적용되면 로그인 처리 코드에서 `context.session()`을 사용해 로그인 사용자 정보를 저장할 수 있다.

---

## 로그인 검증 및 세션 저장

아래 코드는 로그인 form에서 전달된 아이디와 패스워드를 서버에서 검증하고,  
로그인 성공 시 세션에 사용자 정보를 저장하는 로그인 처리 코드이다.

### 기능 설명
- `@Inject` : Quarkus 컨테이너가 `RoutingContext` 객체를 자동 주입
- `RoutingContext` : 현재 요청과 세션 정보에 접근하기 위해 사용
- `@POST` : POST 요청 처리
- `@Path("/login_check")` : `/login_check` 경로 지정
- `@Transactional` : DB 조회 및 처리 작업을 트랜잭션으로 실행
- `@Consumes(MediaType.APPLICATION_FORM_URLENCODED)` : HTML form 데이터 수신
- `@FormParam("username")` : form에서 전송된 아이디 값 받기
- `@FormParam("password")` : form에서 전송된 패스워드 값 받기
- `User.findByUsername(username)` : 입력한 아이디로 사용자 조회
- `context.session().put("loginUser", username)` : 로그인 성공 시 세션에 사용자 정보 저장
- `Response.seeOther()` : 로그인 성공 또는 실패 후 다른 페이지로 이동

### 코드
```java
import jakarta.inject.Inject; // 컨테이너 자동 주입을 위한 import
import io.vertx.ext.web.RoutingContext; // Vert.x 요청/세션 정보 접근용 import

@Inject
RoutingContext context; // Quarkus Vert.x 세션 접근

@POST // 아이디, 패스워드 전송받음
@Path("/login_check") // /login_check 주소 요청 처리
@Transactional // DB 조회/처리를 트랜잭션으로 실행
@Consumes(MediaType.APPLICATION_FORM_URLENCODED) // form 데이터 받기
public Response loginCheck(
        @FormParam("username") String username, // form의 name="username" 값 받기
        @FormParam("password") String password) { // form의 name="password" 값 받기

    User user = User.findByUsername(username); // 아이디 조회

    if (user == null || !user.password.equals(password)) { // 아이디 없음 또는 비밀번호 불일치 확인
        return Response
                .seeOther(URI.create("/login?error=1")) // 로그인 실패 시 로그인 페이지로 이동
                .build(); // 응답 완성
    }

    // 세션에 로그인 정보 저장
    context.session().put("loginUser", username); // 세션에 로그인한 사용자 아이디 저장

    return Response
            .seeOther(URI.create("/after_login")) // 로그인 성공 시 이동할 페이지
            .build(); // 응답 완성
}
```

### 동작 방식
이 코드는 사용자가 로그인 form을 제출했을 때 실행된다.  
form에서 전달된 `username`과 `password` 값을 `@FormParam`으로 받은 뒤,  
`User.findByUsername(username)`을 사용해 데이터베이스에서 해당 아이디를 조회한다.  
사용자가 존재하지 않거나 비밀번호가 일치하지 않으면 `/login?error=1`로 이동하여 로그인 실패 처리를 한다.  
아이디와 비밀번호가 일치하면 `context.session().put("loginUser", username)`을 통해 세션에 로그인 사용자 정보를 저장하고,  
로그인 후 페이지인 `/after_login`으로 이동한다.

---

## 로그인 후 페이지 세션 검사

아래 코드는 `/after_login` 페이지에 접근할 때 세션에 로그인 정보가 있는지 확인하는 코드이다.  
로그인하지 않은 사용자는 로그인 페이지로 이동시키고,  
로그인한 사용자에게만 `main_after_login.html` 페이지를 보여준다.

### 기능 설명
- `@GET` : GET 요청 처리
- `@Path("/after_login")` : `/after_login` 경로 지정
- `@Produces(MediaType.TEXT_HTML)` : HTML 형식으로 응답
- `context.session().get("loginUser")` : 세션에서 로그인 사용자 정보 조회
- `loginUser == null` : 로그인하지 않은 사용자 판단
- `Response.seeOther(URI.create("/login"))` : 로그인 페이지로 강제 이동
- `getResourceAsStream()` : 로그인 후 HTML 파일 읽기
- `Response.ok(html).build()` : HTML 파일을 정상 응답으로 반환

### 코드
```java
@GET // GET 요청 처리
@Path("/after_login") // /after_login 주소 요청 처리
@Produces(MediaType.TEXT_HTML) // HTML 형식으로 응답
public Response afterLogin() {

    // 세션 체크: 로그인 안 한 사용자 차단
    String loginUser = context.session().get("loginUser"); // 세션에서 로그인 사용자 정보 가져오기

    // 세션 내용 로그 출력
    System.out.println("=== 세션 ID : " + context.session().id()); // 현재 세션 ID 출력
    System.out.println("=== loginUser : " + loginUser); // 세션에 저장된 로그인 사용자 출력

    if (loginUser == null) { // 세션에 로그인 정보가 없으면
        // 세션 없음 → 로그인 페이지로 강제 이동
        return Response
                .seeOther(URI.create("/login")) // 로그인 페이지로 이동
                .build(); // 응답 완성
    }

    // 세션 있음 → 로그인 후 HTML 반환
    InputStream html = getClass()
            .getClassLoader()
            .getResourceAsStream("META-INF/resources/login/main_after_login.html"); // 로그인 후 HTML 파일 읽기

    return Response.ok(html).build(); // HTML 파일을 정상 응답으로 반환
}
```

### 동작 방식
이 코드는 사용자가 `/after_login` 주소로 접속했을 때 실행된다.  
먼저 `context.session().get("loginUser")`를 통해 세션에 로그인 사용자 정보가 있는지 확인한다.  
세션에 `loginUser` 값이 없으면 로그인하지 않은 사용자로 판단하고 `/login` 페이지로 이동시킨다.  
반대로 `loginUser` 값이 존재하면 로그인한 사용자로 판단하여 `META-INF/resources/login/main_after_login.html` 파일을 읽어온다.  
마지막으로 `Response.ok(html).build()`를 통해 로그인 후 HTML 페이지를 브라우저에 표시한다.

---

## 로그아웃 처리

아래 코드는 사용자가 `/logout` 주소로 접속했을 때 현재 세션을 삭제하고 메인 페이지로 이동시키는 로그아웃 처리 코드이다.  
로그인 시 세션에 저장했던 `loginUser` 값을 세션 삭제를 통해 제거하여 로그인 상태를 해제한다.

### 기능 설명
- `@GET` : GET 요청 처리
- `@Path("/logout")` : `/logout` 경로 지정
- `context.session().id()` : 현재 세션 ID 확인
- `context.session().get("loginUser")` : 세션에 저장된 로그인 사용자 확인
- `context.session().destroy()` : 현재 세션 전체 삭제
- `Response.seeOther(URI.create("/"))` : 로그아웃 후 메인 페이지로 이동

### 코드
```java
@GET // GET 요청 처리
@Path("/logout") // /logout 주소 요청 처리
public Response logout() {

    // 로그아웃 전 세션 정보 출력
    System.out.println("=== 로그아웃 전 세션 ID : " + context.session().id()); // 로그아웃 전 세션 ID 확인
    System.out.println("=== 로그아웃 전 loginUser : " + context.session().get("loginUser")); // 로그아웃 전 로그인 사용자 확인

    // 세션 전체 삭제
    context.session().destroy(); // 현재 세션을 삭제하여 로그인 정보 제거

    // 로그아웃 후 세션 정보 출력
    System.out.println("=== 로그아웃 후 세션 ID : " + context.session().id()); // 로그아웃 후 세션 ID 확인
    System.out.println("=== 로그아웃 후 loginUser : " + context.session().get("loginUser")); // 로그아웃 후 loginUser 값 확인

    return Response
            .seeOther(URI.create("/")) // 로그아웃 후 메인 페이지로 이동
            .build(); // 응답 완성
}
```

### 동작 방식
이 코드는 사용자가 `/logout` 주소로 접속했을 때 실행된다.  
먼저 로그아웃 전 세션 ID와 세션에 저장된 `loginUser` 값을 콘솔에 출력한다.  
그 다음 `context.session().destroy()`를 실행하여 현재 세션을 삭제하고 로그인 정보를 제거한다.  
세션 삭제 후에는 다시 세션 ID와 `loginUser` 값을 출력하여 세션 정보가 제거되었는지 확인한다.  
마지막으로 `Response.seeOther(URI.create("/"))`를 통해 사용자를 메인 페이지로 이동시킨다.

---

### 11주차 정리
## 회원가입 버튼 추가

아래 코드는 로그인 페이지에서 로그인 버튼 아래에 회원가입 버튼을 추가하는 HTML 코드이다.  
사용자가 회원가입 버튼을 누르면 `/register` 경로로 이동하여 회원가입 페이지에 접근할 수 있다.

### 기능 설명
- `<!-- 로그인 버튼 아래 추가 -->` : 코드 설명용 HTML 주석
- `<hr>` : 로그인 버튼과 회원가입 버튼 사이에 구분선 추가
- `<a href="/register">` : 회원가입 페이지로 이동하는 링크
- `btn btn-outline-secondary` : Bootstrap 버튼 스타일 적용
- `w-100` : 버튼 너비를 부모 영역 기준 100%로 설정

### 코드
```html
<!-- 로그인 버튼 아래 추가 -->
<hr>

<a href="/register"
    class="btn btn-outline-secondary w-100">
    회원가입
</a>
```

### 동작 방식
이 코드는 로그인 form 아래에 추가된다.  
`<hr>` 태그를 통해 로그인 버튼과 회원가입 버튼 사이를 구분하고,  
`<a href="/register">` 태그를 사용해 회원가입 페이지로 이동할 수 있는 링크를 만든다.  
Bootstrap의 `btn`, `btn-outline-secondary`, `w-100` 클래스를 적용하여 링크를 버튼처럼 보이게 하고,  
사용자가 클릭하면 `/register` 주소로 이동한다.

---

## 회원가입 페이지 반환

아래 코드는 Quarkus에서 `/register` 주소로 접속했을 때 회원가입 HTML 페이지를 반환하는 코드이다.  
서버는 `META-INF/resources/login/register.html` 파일을 읽어와 브라우저에 HTML 형식으로 응답한다.

### 기능 설명
- `@GET` : GET 요청 처리
- `@Path("/register")` : `/register` 경로 지정
- `@Produces(MediaType.TEXT_HTML)` : HTML 형식으로 응답
- `InputStream` : `register.html` 파일을 읽어오기 위해 사용
- `getResourceAsStream()` : 프로젝트 리소스 경로에서 HTML 파일 읽기
- `Response.ok(html).build()` : 읽어온 HTML 파일을 정상 응답으로 반환

### 코드
```java
// AuthResource.java 아래 새로 추가
@GET // GET 요청 처리
@Path("/register") // /register 주소 요청 처리
@Produces(MediaType.TEXT_HTML) // HTML 형식으로 응답
public Response registerPage() { // 회원가입 페이지 요청 처리 메서드
    InputStream html = getClass()
            .getClassLoader()
            .getResourceAsStream(
                    "META-INF/resources/login/register.html"); // register.html 파일 읽기

    return Response.ok(html).build(); // 읽어온 HTML 파일을 정상 응답으로 반환
}
```

### 동작 방식
이 코드는 사용자가 `/register` 주소로 접속했을 때 실행된다.  
`@GET`과 `@Path("/register")`에 의해 `registerPage()` 메서드가 호출되고,  
서버는 `getResourceAsStream()`을 사용해 `META-INF/resources/login/register.html` 파일을 읽어온다.  
그 후 `Response.ok(html).build()`를 통해 읽어온 HTML 파일을 브라우저에 전달한다.  
이를 통해 사용자는 `/register` 주소에서 회원가입 화면을 볼 수 있다.

---

## 회원가입 폼 HTML

아래 코드는 회원가입 페이지에서 아이디, 패스워드, 이메일, 연락처를 입력받는 HTML form 코드이다.  
사용자가 회원가입 버튼을 누르면 바로 서버로 전송되지 않고,  
JavaScript의 `validateAndShowModal()` 함수를 통해 입력값 검사를 먼저 진행한다.

### 기능 설명
- `section.hero` : 회원가입 화면 영역 구성
- `container` : 회원가입 폼의 너비와 배치 조정
- `form id="registerForm"` : JavaScript에서 form을 선택하기 위한 id
- `action="/register_check"` : 회원가입 요청을 보낼 서버 경로 지정
- `method="post"` : 입력값을 POST 방식으로 서버에 전송
- `id="username"` / `name="username"` : 아이디 입력값 검사 및 서버 전송
- `id="password"` : 원본 패스워드 입력값 검사 및 해시 처리에 사용
- `id="passwordConfirm"` : 패스워드 재입력 확인
- `id="email"` / `name="email"` : 이메일 입력값 검사 및 서버 전송
- `id="phone"` / `name="phone"` : 연락처 입력값 검사 및 서버 전송
- `invalid-feedback` : 입력값 오류 메시지 출력 영역
- `type="hidden"` : 화면에 보이지 않는 숨김 입력 필드
- `id="hashedPassword"` / `name="password"` : 해시된 패스워드를 서버로 전송
- `type="button"` : 버튼 클릭 시 바로 submit하지 않고 JavaScript 함수 실행
- `onclick="validateAndShowModal()"` : 유효성 검사 및 확인 모달 실행

### 코드
```html
<!-- 네비바 아래 삽입한다. -->
<section class="hero d-flex align-items-center
    justify-content-center text-center py-5">
    <div class="container" style="max-width: 480px;">
        <h2 class="fw-bold mb-4">회원가입</h2>

        <form id="registerForm" action="/register_check" method="post">
            <!-- 아이디 -->
            <div class="mb-3 text-start">
                <label class="form-label">아이디 *</label>
                <input type="text" class="form-control"
                    id="username" name="username"
                    placeholder="4~20자 영문/숫자" required>
                <div class="invalid-feedback" id="usernameMsg"></div>
            </div>

            <!-- 패스워드 -->
            <div class="mb-3 text-start">
                <label class="form-label">패스워드 *</label>
                <input type="password" class="form-control"
                    id="password"
                    placeholder="8자 이상, 영문+숫자+특수문자" required>
            </div>

            <!-- 패스워드 확인 -->
            <div class="mb-3 text-start">
                <label class="form-label">패스워드 확인 *</label>
                <input type="password" class="form-control"
                    id="passwordConfirm"
                    placeholder="패스워드 재입력" required>
                <div class="invalid-feedback" id="passwordMsg"></div>
            </div>

            <!-- 이메일 -->
            <div class="mb-3 text-start">
                <label class="form-label">이메일 *</label>
                <input type="email" class="form-control"
                    id="email" name="email"
                    placeholder="example@email.com" required>
                <div class="invalid-feedback" id="emailMsg"></div>
            </div>

            <!-- 연락처 -->
            <div class="mb-3 text-start">
                <label class="form-label">연락처 *</label>
                <input type="text" class="form-control"
                    id="phone" name="phone"
                    placeholder="010-0000-0000" required>
                <div class="invalid-feedback" id="phoneMsg"></div>
            </div>

            <input type="hidden" id="hashedPassword" name="password">

            <button type="button" class="btn btn-primary w-100"
                onclick="validateAndShowModal()">
                회원가입
            </button>
        </form>
    </div>
</section>
```

### 동작 방식
이 코드는 회원가입 페이지에서 사용자에게 아이디, 패스워드, 패스워드 확인, 이메일, 연락처 입력창을 보여준다.  
사용자가 회원가입 버튼을 누르면 `type="button"` 설정 때문에 form이 바로 제출되지 않고,  
`onclick="validateAndShowModal()"`에 의해 JavaScript 유효성 검사 함수가 먼저 실행된다.  
입력값에 문제가 있으면 각 입력칸 아래의 `invalid-feedback` 영역에 오류 메시지를 표시한다.  
입력값이 모두 올바르면 JavaScript에서 패스워드를 SHA-256으로 해시 처리하고,  
그 결과를 `id="hashedPassword"`인 hidden input에 저장한다.  
이후 확인 모달에서 사용자가 가입을 확정하면 `registerForm`이 `/register_check`로 POST 전송된다.


---

## User 엔티티 클래스 확장

아래 코드는 회원가입과 로그인 기능에서 사용할 사용자 정보를 저장하기 위한 엔티티 클래스이다.  
`User` 클래스는 `PanacheEntity`를 상속하여 DB 작업을 쉽게 처리할 수 있으며,  
`users` 테이블에 사용자 아이디, 비밀번호 해시값, 이메일, 연락처를 저장한다.

### 기능 설명
- `@Entity` : 데이터베이스 테이블과 연결되는 엔티티 클래스 선언
- `@Table(name = "users")` : 테이블 이름을 `users`로 지정
- `PanacheEntity` : 기본 `id`와 DB 관련 메서드 사용 가능
- `username` : 사용자 아이디 저장
- `password` : SHA-256으로 변환된 비밀번호 해시값 저장
- `@Column(unique = true)` : 이메일 중복 저장 방지
- `email` : 사용자 이메일 저장
- `phone` : 사용자 연락처 저장
- `findByUsername()` : 아이디로 사용자 조회
- `findByEmail()` : 이메일로 사용자 조회

### 코드
```java
package org.acme.login; // 패키지 선언

import io.quarkus.hibernate.orm.panache.PanacheEntity; // PanacheEntity 상속을 위한 import
import jakarta.persistence.Entity; // 엔티티 선언을 위한 import
import jakarta.persistence.Table; // 테이블 이름 지정을 위한 import
import jakarta.persistence.Column; // 컬럼 속성 설정을 위한 import

@Entity // 이 클래스가 데이터베이스 테이블과 연결되는 엔티티임을 표시
@Table(name = "users") // users 테이블과 연결
public class User extends PanacheEntity { // PanacheEntity를 상속받아 DB 작업을 쉽게 처리

    public String username; // 사용자 아이디
    public String password; // SHA-256 해시값 저장

    @Column(unique = true) // 이메일 중복 방지
    public String email; // 사용자 이메일

    public String phone; // 연락처

    // 아이디로 조회
    public static User findByUsername(String username) {
        return find("username", username).firstResult(); // username이 일치하는 첫 번째 사용자 반환
    }

    // 이메일로 조회
    public static User findByEmail(String email) {
        return find("email", email).firstResult(); // email이 일치하는 첫 번째 사용자 반환
    }
}
```

### 동작 방식
이 클래스는 회원가입과 로그인 기능에서 사용자 정보를 데이터베이스에 저장하고 조회하기 위해 사용된다.  
`@Entity`를 통해 데이터베이스 테이블과 연결되고, `@Table(name = "users")`를 통해 실제 테이블 이름을 `users`로 지정한다.  
`username`, `password`, `email`, `phone` 필드는 각각 사용자 아이디, 비밀번호 해시값, 이메일, 연락처를 저장한다.  
회원가입 시에는 `findByUsername()`과 `findByEmail()`을 사용해 아이디와 이메일 중복 여부를 확인할 수 있다.  
중복이 없으면 새 `User` 객체를 생성하여 입력받은 사용자 정보를 저장한다.  
로그인 시에는 `findByUsername()`으로 아이디에 해당하는 사용자를 조회한 뒤 비밀번호를 비교하여 로그인 여부를 판단할 수 있다.

---

## 회원가입 입력값 유효성 검사

아래 코드는 회원가입 form에서 입력한 아이디, 패스워드, 이메일, 연락처를 검사하는 JavaScript 코드이다.  
입력값이 형식에 맞지 않으면 Bootstrap의 `is-invalid` 클래스를 적용하고 오류 메시지를 표시하며,  
모든 검사를 통과하면 확인 모달을 출력한다.

### 기능 설명
- `validateAndShowModal()` : 회원가입 입력값 전체 검사
- `usernameRegex` : 아이디가 4~20자 영문/숫자인지 검사
- `passwordRegex` : 패스워드가 8자 이상이며 영문, 숫자, 특수문자를 포함하는지 검사
- `password !== passwordConfirm` : 패스워드와 패스워드 확인 값 일치 여부 검사
- `emailRegex` : 이메일 형식 검사
- `phoneRegex` : `010-0000-0000` 형식의 연락처 검사
- `showError()` : 입력값 오류 표시
- `clearError()` : 오류 표시 제거 및 정상 표시 추가
- `window.onload` : 서버에서 전달된 중복 오류를 URL에서 확인하여 표시

### 코드
```javascript
function validateAndShowModal() {
    let valid = true;

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // ① 아이디 : 4~20자 영문/숫자
    const usernameRegex = /^[a-zA-Z0-9]{4,20}$/;
    if (!usernameRegex.test(username)) {
        showError('username', '아이디는 4~20자 영문/숫자만 가능합니다.');
        valid = false;
    } else {
        clearError('username');
    }

    // ② 패스워드 : 8자 이상, 영문+숫자+특수문자
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(password)) {
        showError('password', '8자 이상, 영문+숫자+특수문자를 포함 필요.');
        valid = false;
    } else {
        clearError('password');
    }

    // ③ 패스워드 확인
    if (password !== passwordConfirm) {
        showError('passwordConfirm', '패스워드가 일치하지 않습니다.');
        valid = false;
    } else {
        clearError('passwordConfirm');
    }

    // ④ 이메일 형식
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('email', '올바른 이메일 형식이 아닙니다.');
        valid = false;
    } else {
        clearError('email');
    }

    // ⑤ 연락처 형식 : 010-0000-0000
    const phoneRegex = /^010-\d{4}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        showError('phone', '010-0000-0000 형식으로 입력해주세요.');
        valid = false;
    } else {
        clearError('phone');
    }

    // 전체 통과 시 확인 모달 출력
    if (valid) showConfirmModal();
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    field.classList.add('is-invalid');

    const msg = document.getElementById(fieldId + 'Msg');
    if (msg) msg.textContent = message;
}

function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
}

window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const error = params.get('error');

    if (error === 'duplicate_username') {
        showError('username', '이미 사용 중인 아이디입니다.');
    } else if (error === 'duplicate_email') {
        showError('email', '이미 사용 중인 이메일입니다.');
    }
}
```

### 동작 방식
이 코드는 사용자가 회원가입 버튼을 눌렀을 때 `validateAndShowModal()` 함수가 실행되면서 시작된다.  
먼저 아이디, 패스워드, 패스워드 확인, 이메일, 연락처 입력값을 가져온 뒤 각각 정규식을 사용해 형식을 검사한다.  
형식이 맞지 않는 입력값이 있으면 `showError()`를 호출하여 해당 입력칸에 `is-invalid` 클래스를 추가하고 오류 메시지를 표시한다.  
입력값이 올바른 경우에는 `clearError()`를 호출하여 오류 표시를 제거하고 `is-valid` 클래스를 추가한다.  
모든 검사를 통과하면 `showConfirmModal()`을 실행하여 회원가입 확인 모달을 출력한다.  
또한 페이지가 로딩될 때 URL의 `error` 값을 확인하여 아이디 또는 이메일 중복 오류가 있으면 해당 입력칸에 오류 메시지를 표시한다.

---

## 비밀번호 해시 처리 및 회원가입 확인 모달

아래 코드는 회원가입 시 입력한 비밀번호를 SHA-256으로 해시 처리하고,  
사용자가 입력한 정보를 확인 모달에 표시한 뒤 form을 서버로 전송하는 JavaScript 코드이다.

### 기능 설명
- `hashPassword()` : 입력한 비밀번호를 SHA-256 해시값으로 변환
- `TextEncoder` : 문자열을 바이트 데이터로 변환
- `crypto.subtle.digest('SHA-256', data)` : 브라우저 내장 Web Crypto API로 해시 생성
- `showConfirmModal()` : 입력 정보를 모달에 표시하고 해시값 생성
- `confirmUsername`, `confirmEmail`, `confirmPhone` : 모달에 표시할 사용자 입력 정보
- `hashedPassword` : 해시된 비밀번호를 저장하는 hidden input
- `console.log()` : 개발자 도구에서 해시값 확인
- `bootstrap.Modal` : Bootstrap 모달 생성 및 표시
- `submitRegister()` : 확인 모달을 닫고 회원가입 form 전송
- `registerForm.submit()` : `/register_check`로 POST 요청 전송

### 코드
```javascript
// SHA-256 해시 함수 (브라우저 내장 Web Crypto API)
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);

    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    return hashArray
            .map(b => b.toString(16).padStart(2, '0'))
            .join('');
}

// 확인 모달 출력 + 해시 생성
async function showConfirmModal() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;

    // 모달에 입력 정보 표시
    document.getElementById('confirmUsername').textContent = username;
    document.getElementById('confirmEmail').textContent = email;
    document.getElementById('confirmPhone').textContent = phone;

    // SHA-256 해시 생성 → hidden 필드(id="hashedPassword")에 저장
    const hashed = await hashPassword(password);
    document.getElementById('hashedPassword').value = hashed;

    // F12 콘솔에서 해시값 확인
    console.log('해시된 패스워드 :', hashed);

    // Bootstrap 확인 모달 출력
    const modal = new bootstrap.Modal(
            document.getElementById('confirmModal')
    );
    modal.show();
}

// 가입하기 버튼 클릭 → form submit
function submitRegister() {
    // 확인 모달 닫기
    bootstrap.Modal.getInstance(
            document.getElementById('confirmModal')
    ).hide();

    // form submit → POST /register_check 전송
    document.getElementById('registerForm').submit();
}
```

### 동작 방식
이 코드는 회원가입 입력값 검사가 모두 통과된 뒤 실행된다.  
먼저 `showConfirmModal()` 함수가 아이디, 이메일, 연락처, 비밀번호 입력값을 가져온다.  
아이디, 이메일, 연락처는 확인 모달에 표시하고, 비밀번호는 `hashPassword()` 함수로 전달하여 SHA-256 해시값으로 변환한다.  
생성된 해시값은 `id="hashedPassword"`인 hidden input에 저장되며, 이 값이 서버로 전송될 비밀번호 값이 된다.  
그 후 Bootstrap의 `Modal` 객체를 생성하여 확인 모달을 화면에 보여준다.  
사용자가 모달에서 가입을 확정하면 `submitRegister()` 함수가 실행되어 모달을 닫고 `registerForm.submit()`을 통해 `/register_check`로 회원가입 정보를 POST 전송한다.

---

## 회원가입 확인 모달

아래 코드는 회원가입 정보를 서버로 전송하기 전에 사용자가 입력한 내용을 확인할 수 있도록 Bootstrap 모달을 띄우는 HTML 코드이다.  
아이디, 이메일, 연락처는 모달에 표시되고, 패스워드는 직접 노출하지 않고 숨김 처리하여 표시한다.

### 기능 설명
- `modal fade` : Bootstrap 모달 컴포넌트와 부드러운 표시 효과 적용
- `id="confirmModal"` : JavaScript에서 모달을 찾기 위한 id
- `modal-dialog-centered` : 모달을 화면 가운데 배치
- `bg-dark text-white` : 다크 모드 스타일의 모달 적용
- `data-bs-dismiss="modal"` : 버튼 클릭 시 모달 닫기
- `confirmUsername` : 입력한 아이디를 표시할 영역
- `confirmEmail` : 입력한 이메일을 표시할 영역
- `confirmPhone` : 입력한 연락처를 표시할 영역
- `******** (암호화 전송)` : 패스워드를 직접 보여주지 않도록 처리
- `onclick="submitRegister()"` : 가입하기 버튼 클릭 시 회원가입 form 제출

### 코드
```html
<!-- 가입 확인 모달 (</section> 아래, </body> 위) -->
<div class="modal fade" id="confirmModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-dark text-white border-secondary">
            <div class="modal-header border-secondary">
                <h5 class="modal-title"> 가입 확인</h5>
                <button type="button" class="btn-close btn-close-white"
                    data-bs-dismiss="modal"></button>
            </div>

            <div class="modal-body">
                <p>아래 정보로 가입하시겠습니까?</p>

                <table class="table table-dark table-bordered">
                    <tr>
                        <th>아이디</th>
                        <td id="confirmUsername"></td>
                    </tr>
                    <tr>
                        <th>이메일</th>
                        <td id="confirmEmail"></td>
                    </tr>
                    <tr>
                        <th>연락처</th>
                        <td id="confirmPhone"></td>
                    </tr>
                    <tr>
                        <th>패스워드</th>
                        <td>******** (암호화 전송)</td>
                    </tr>
                </table>
            </div>

            <div class="modal-footer border-secondary">
                <button type="button" class="btn btn-secondary"
                    data-bs-dismiss="modal">취소</button>

                <button type="button" class="btn btn-primary"
                    onclick="submitRegister()">가입하기</button>
            </div>
        </div>
    </div>
</div>
```

### 동작 방식
이 모달은 회원가입 입력값 유효성 검사가 모두 통과된 뒤 `showConfirmModal()` 함수에 의해 화면에 표시된다.  
JavaScript는 사용자가 입력한 아이디, 이메일, 연락처 값을 가져와 각각 `confirmUsername`, `confirmEmail`, `confirmPhone` 영역에 넣는다.  
패스워드는 보안상 직접 표시하지 않고 `********` 형태로 보여주며, 실제 전송 시에는 SHA-256 해시값이 hidden input에 저장되어 서버로 전달된다.  
사용자가 취소 버튼을 누르면 `data-bs-dismiss="modal"`에 의해 모달이 닫히고,  
가입하기 버튼을 누르면 `submitRegister()` 함수가 실행되어 회원가입 form이 `/register_check`로 POST 전송된다.

---

## 회원가입 처리(register_check)

아래 코드는 회원가입 form에서 전달된 사용자 정보를 서버에서 받아 처리하는 코드이다.  
아이디와 이메일 중복 여부를 먼저 확인하고, 중복이 없으면 새 사용자 정보를 `users` 테이블에 저장한 뒤 가입 완료 페이지로 이동한다.

### 기능 설명
- `@POST` : POST 요청 처리
- `@Path("/register_check")` : `/register_check` 경로 지정
- `@Transactional` : DB 조회 및 저장 작업을 트랜잭션으로 처리
- `@Consumes(MediaType.APPLICATION_FORM_URLENCODED)` : HTML form 데이터 수신
- `@Produces(MediaType.TEXT_HTML)` : HTML 응답 형식 사용
- `@FormParam("username")` : form에서 전송된 아이디 값 받기
- `@FormParam("password")` : form에서 전송된 SHA-256 패스워드 해시값 받기
- `@FormParam("email")` : form에서 전송된 이메일 값 받기
- `@FormParam("phone")` : form에서 전송된 연락처 값 받기
- `User.findByUsername(username)` : 아이디 중복 확인
- `User.findByEmail(email)` : 이메일 중복 확인
- `newUser.persist()` : 새 사용자 정보를 데이터베이스에 저장
- `Response.seeOther()` : 처리 결과에 따라 다른 페이지로 이동

### 코드
```java
@POST // POST 요청 처리
@Path("/register_check") // /register_check 주소 요청 처리
@Transactional // DB 조회 및 저장 작업을 트랜잭션으로 처리
@Consumes(MediaType.APPLICATION_FORM_URLENCODED) // form 데이터 받기
@Produces(MediaType.TEXT_HTML) // HTML 응답 형식 사용
public Response registerCheck(
        @FormParam("username") String username, // form의 name="username" 값 받기
        @FormParam("password") String password, // SHA-256 해시값 받기
        @FormParam("email") String email, // form의 name="email" 값 받기
        @FormParam("phone") String phone) { // form의 name="phone" 값 받기

    // ① 아이디 중복 체크
    if (User.findByUsername(username) != null) { // 같은 아이디가 이미 있으면
        return Response
                .seeOther(URI.create("/register?error=duplicate_username")) // 아이디 중복 오류와 함께 회원가입 페이지로 이동
                .build(); // 응답 완성
    }

    // ② 이메일 중복 체크
    if (User.findByEmail(email) != null) { // 같은 이메일이 이미 있으면
        return Response
                .seeOther(URI.create("/register?error=duplicate_email")) // 이메일 중복 오류와 함께 회원가입 페이지로 이동
                .build(); // 응답 완성
    }

    // ③ DB 삽입
    User newUser = new User(); // 새 User 객체 생성
    newUser.username = username; // 아이디 저장
    newUser.password = password; // 해시값 저장
    newUser.email = email; // 이메일 저장
    newUser.phone = phone; // 연락처 저장
    newUser.persist(); // DB에 새 사용자 저장

    // ④ 가입 완료 페이지로 이동
    return Response
            .seeOther(URI.create("/register_success")) // 회원가입 성공 페이지로 이동
            .build(); // 응답 완성
}
```

### 동작 방식
이 코드는 사용자가 회원가입 form을 제출했을 때 실행된다.  
먼저 `@FormParam`을 통해 아이디, 비밀번호 해시값, 이메일, 연락처를 서버에서 받는다.  
그 다음 `User.findByUsername(username)`으로 아이디 중복 여부를 확인하고, 이미 존재하면 `/register?error=duplicate_username`으로 이동시킨다.  
아이디가 중복되지 않으면 `User.findByEmail(email)`로 이메일 중복 여부를 확인하고, 이미 존재하면 `/register?error=duplicate_email`로 이동시킨다.  
두 중복 검사를 모두 통과하면 새 `User` 객체를 만들고, 입력받은 사용자 정보를 저장한 뒤 `persist()`를 사용하여 데이터베이스에 등록한다.  
회원가입이 완료되면 `/register_success` 페이지로 이동한다.

---

## 회원가입 완료 페이지

아래 코드는 회원가입이 성공적으로 완료된 후 사용자에게 가입 완료 화면을 보여주는 코드이다.  
서버는 `/register_success` 경로로 들어온 요청을 처리하여 `register_success.html` 파일을 반환하고,  
HTML 화면에서는 가입 완료 메시지와 로그인 페이지로 이동하는 버튼을 제공한다.

### 기능 설명
- `@GET` : GET 요청 처리
- `@Path("/register_success")` : `/register_success` 경로 지정
- `@Produces(MediaType.TEXT_HTML)` : HTML 형식으로 응답
- `getResourceAsStream()` : `register_success.html` 파일 읽기
- `Response.ok(html).build()` : 읽어온 HTML 파일을 정상 응답으로 반환
- `section.hero` : 가입 완료 화면 영역 구성
- `container` : 화면 내용의 너비와 배치 조정
- `href="/login"` : 로그인 페이지로 이동
- `btn btn-primary w-100` : Bootstrap 버튼 스타일 적용

### Java 코드
```java
@GET // GET 요청 처리
@Path("/register_success") // /register_success 주소 요청 처리
@Produces(MediaType.TEXT_HTML) // HTML 형식으로 응답
public Response registerSuccess() { // 회원가입 완료 페이지 요청 처리 메서드
    InputStream html = getClass()
            .getClassLoader()
            .getResourceAsStream(
                    "META-INF/resources/login/register_success.html"); // 가입 완료 HTML 파일 읽기

    return Response.ok(html).build(); // 읽어온 HTML 파일을 정상 응답으로 반환
}
```

### HTML 코드
```html
<section class="hero d-flex align-items-center
    justify-content-center text-center py-5">
    <div class="container" style="max-width: 400px;">
        <h2 class="fw-bold mb-4"> 가입 완료!</h2>

        <p class="lead mb-4">
            환영합니다!<br>
            가입이 완료되었습니다.<br>
            로그인 후 서비스를 이용해보세요.
        </p>

        <a href="/login" class="btn btn-primary w-100">
            로그인 하러 가기
        </a>
    </div>
</section>
```

### 동작 방식
회원가입 처리 메서드에서 사용자 정보 저장이 완료되면 `/register_success` 주소로 이동한다.  
이 주소로 GET 요청이 들어오면 `registerSuccess()` 메서드가 실행되고,  
서버는 `META-INF/resources/login/register_success.html` 파일을 읽어온다.  
그 후 `Response.ok(html).build()`를 통해 해당 HTML 파일을 브라우저에 반환한다.  
브라우저에는 가입 완료 메시지가 표시되며, 사용자는 `로그인 하러 가기` 버튼을 눌러 `/login` 페이지로 이동할 수 있다.

---

### 12주차 정리
## 로그인 폼 개선

아래 코드는 로그인 페이지에서 아이디와 패스워드를 입력받는 HTML form 코드이다.  
사용자가 로그인 버튼을 누르면 바로 서버로 전송되지 않고,  
JavaScript의 `validateAndLogin()` 함수를 통해 입력값 검사를 먼저 진행한다.  
또한 로그인 버튼 아래에 회원가입 페이지로 이동할 수 있는 버튼을 추가하였다.

### 기능 설명
- `section.hero` : 로그인 화면 영역 구성
- `container` : 로그인 폼의 너비와 배치 조정
- `form id="loginForm"` : JavaScript에서 form을 선택하기 위한 id
- `method="POST"` : 입력값을 POST 방식으로 서버에 전송
- `action="/login_check"` : 로그인 검증 요청을 보낼 서버 경로 지정
- `id="usernameInput"` / `name="username"` : 아이디 입력값 검사 및 서버 전송
- `id="passwordInput"` : 사용자가 입력하는 패스워드 입력칸
- `id="password"` / `name="password"` : 서버로 전송할 패스워드 값을 담는 hidden input
- `invalid-feedback` : 입력값 오류 메시지 출력 영역
- `type="button"` : 버튼 클릭 시 바로 submit하지 않고 JavaScript 함수 실행
- `onclick="validateAndLogin()"` : 로그인 입력값 검사 및 전송 처리
- `href="/register"` : 회원가입 페이지로 이동

### 코드
```html
<!-- 기존 index.html 디자인을 재활용한다. -->
<section class="hero d-flex align-items-center
    justify-content-center text-center py-5">
    <div class="container" style="max-width: 400px;">
        <h2 class="fw-bold mb-4">로그인</h2>

        <form method="POST" action="/login_check" id="loginForm">
            <div class="mb-3 text-start">
                <label class="form-label">아이디</label>
                <input type="text" class="form-control"
                    id="usernameInput" name="username" placeholder="4~20자 영문/숫자" required>
                <div class="invalid-feedback" id="usernameMsg"></div>
            </div>

            <div class="mb-3 text-start">
                <label class="form-label">패스워드</label>
                <input type="password" class="form-control"
                    id="passwordInput" placeholder="8자 이상, 영문+숫자+특수문자" required>
                <div class="invalid-feedback" id="passwordMsg"></div>
                <input type="hidden" id="password" name="password">
            </div>

            <button type="button" onclick="validateAndLogin()"
                class="btn btn-primary w-100">로그인</button>

            <!-- 신규 추가 -->
            <hr>

            <a href="/register"
                class="btn btn-outline-secondary w-100">
                회원가입
            </a>
        </form>
    </div>
</section>
```

### 동작 방식
이 코드는 로그인 페이지에서 사용자에게 아이디와 패스워드 입력창을 보여준다.  
사용자가 로그인 버튼을 누르면 `type="button"` 설정 때문에 form이 바로 제출되지 않고,  
`onclick="validateAndLogin()"`에 의해 JavaScript 유효성 검사 함수가 먼저 실행된다.  
입력값에 문제가 있으면 `invalid-feedback` 영역에 오류 메시지를 표시한다.  
입력값이 올바르면 JavaScript에서 패스워드 값을 hidden input인 `id="password"`에 저장하고,  
`id="loginForm"`인 form을 `/login_check`로 POST 전송한다.  
회원가입 버튼을 누르면 `/register` 주소로 이동하여 회원가입 페이지에 접근할 수 있다.

---

## 로그인 패스워드 해시 처리

아래 코드는 로그인 시 사용자가 입력한 패스워드를 서버로 전송하기 전에 SHA-256 해시값으로 변환하는 JavaScript 코드이다.  
사용자가 로그인 버튼을 누르면 `validateAndLogin()` 함수가 실행되고,  
`submitLogin()` 함수에서 패스워드를 해시 처리한 뒤 로그인 form을 서버로 전송한다.

### 기능 설명
- `validateAndLogin()` : 로그인 버튼 클릭 시 실행되는 함수
- `submitLogin()` : 패스워드 해시 처리 후 form 제출
- `passwordInput` : 사용자가 실제로 입력하는 패스워드 input
- `hashPassword(password)` : 입력한 패스워드를 SHA-256 해시값으로 변환
- `id="password"` : 해시된 패스워드를 저장하는 hidden input
- `loginForm.submit()` : 로그인 form을 `/login_check`로 POST 전송

### 코드
```javascript
function validateAndLogin() {
    submitLogin(); // 유효성 검사(지난 주 문제)
}

async function submitLogin() {
    const password = document.getElementById('passwordInput').value;
    const hashed = await hashPassword(password);
    document.getElementById('password').value = hashed;
    document.getElementById('loginForm').submit();
}
```

### 동작 방식
이 코드는 사용자가 로그인 버튼을 눌렀을 때 실행된다.  
먼저 `validateAndLogin()` 함수가 실행되고, 그 안에서 `submitLogin()` 함수를 호출한다.  
`submitLogin()` 함수는 `passwordInput`에서 사용자가 입력한 원본 패스워드를 가져온 뒤,  
`hashPassword(password)`를 사용해 SHA-256 해시값으로 변환한다.  
변환된 해시값은 화면에 보이지 않는 hidden input인 `id="password"`에 저장된다.  
마지막으로 `loginForm.submit()`을 실행하여 아이디와 해시된 패스워드를 `/login_check`로 POST 전송한다.

---

## 메인 페이지 세션 분기

아래 코드는 사용자가 `/` 주소로 접속했을 때 세션에 로그인 정보가 있는지 확인하고,  
로그인 상태에 따라 서로 다른 메인 페이지를 보여주는 코드이다.

### 기능 설명
- `@GET` : GET 요청 처리
- `@Produces(MediaType.TEXT_HTML)` : HTML 형식으로 응답
- `context.session().get("loginUser")` : 세션에서 로그인 사용자 정보 조회
- `context.session().id()` : 현재 세션 ID 확인
- `loginUser != null` : 로그인 상태 판단
- 삼항 연산자 `? :` : 로그인 여부에 따라 HTML 경로 선택
- `main_after_login.html` : 로그인한 사용자에게 보여줄 메인 페이지
- `main_index.html` : 로그인하지 않은 사용자에게 보여줄 기본 메인 페이지
- `getResourceAsStream(htmlPath)` : 선택된 HTML 파일 읽기
- `Response.ok(html).build()` : HTML 파일을 정상 응답으로 반환

### 코드
```java
// GET / → 세션 유무에 따라 메인 페이지 분기
@GET // GET 요청 처리
@Produces(MediaType.TEXT_HTML) // HTML 형식으로 응답
public Response mainPage() { // 메인 페이지 요청 처리 메서드
    String loginUser = context.session().get("loginUser"); // 세션에서 로그인 사용자 정보 가져오기

    System.out.println("=== [GET /] 세션 ID : " +
            context.session().id()); // 현재 세션 ID 출력
    System.out.println("=== [GET /] loginUser : " + loginUser); // 세션의 loginUser 값 출력

    String htmlPath = (loginUser != null) // loginUser가 있으면 로그인 상태
            ? "META-INF/resources/login/main_after_login.html" // 로그인 상태일 때 보여줄 페이지
            : "META-INF/resources/main_index.html"; // 비로그인 상태일 때 보여줄 페이지

    InputStream html =
            getClass().getClassLoader().getResourceAsStream(htmlPath); // 선택된 HTML 파일 읽기

    return Response.ok(html).build(); // HTML 파일을 정상 응답으로 반환
}
```

### 동작 방식
이 코드는 사용자가 `/` 주소로 접속했을 때 실행된다.  
먼저 `context.session().get("loginUser")`를 통해 세션에 로그인 사용자 정보가 있는지 확인한다.  
세션에 `loginUser` 값이 있으면 로그인한 사용자로 판단하여 `META-INF/resources/login/main_after_login.html` 파일을 선택한다.  
반대로 `loginUser` 값이 없으면 로그인하지 않은 사용자로 판단하여 `META-INF/resources/main_index.html` 파일을 선택한다.  
선택된 파일 경로는 `htmlPath` 변수에 저장되고, `getResourceAsStream(htmlPath)`를 통해 HTML 파일을 읽어온다.  
마지막으로 `Response.ok(html).build()`를 사용해 선택된 메인 페이지를 브라우저에 반환한다.

---

## 프로필 및 로그아웃 메뉴 추가

아래 코드는 로그인 후 네비게이션 바에 프로필 메뉴와 로그아웃 버튼을 추가하는 HTML 코드이다.  
사용자는 프로필 메뉴를 통해 `/profile` 페이지로 이동할 수 있고,  
로그아웃 버튼을 통해 `/logout` 요청을 보내 로그인 상태를 해제할 수 있다.

### 기능 설명
- `li.nav-item` : 네비게이션 메뉴 항목 생성
- `a.nav-link` : Bootstrap 네비게이션 링크 스타일 적용
- `href="/profile"` : 프로필 페이지로 이동
- `href="/logout"` : 로그아웃 요청 실행
- `btn btn-outline-danger` : 로그아웃 링크를 빨간색 테두리 버튼처럼 표시
- `btn-sm` : 버튼 크기를 작게 설정
- `px-3` : 버튼 좌우 여백 추가

### 코드
```html
<!-- 기존 로그아웃 버튼 앞에 추가 -->
<li class="nav-item">
    <a class="nav-link" href="/profile">
        프로필
    </a>
</li>

<li class="nav-item">
    <a class="nav-link btn btn-outline-danger btn-sm px-3"
        href="/logout">로그아웃</a>
</li>
```

### 동작 방식
이 코드는 로그인 후 화면의 네비게이션 바에 추가된다.  
사용자가 `프로필` 링크를 클릭하면 `/profile` 주소로 이동하여 프로필 페이지 요청을 보낸다.  
사용자가 `로그아웃` 버튼을 클릭하면 `/logout` 주소로 이동하고, 서버의 로그아웃 처리 코드가 실행된다.  
로그아웃 처리에서는 세션을 삭제하여 로그인 상태를 해제한 뒤 메인 페이지로 이동시킬 수 있다.

---

## 프로필 페이지 처리

아래 코드는 사용자가 `/profile` 주소로 접속했을 때 로그인 상태를 확인하고,  
로그인한 사용자에게만 프로필 페이지를 보여주는 코드이다.  
세션에 로그인 정보가 없으면 로그인 페이지로 이동시키고,  
로그인 정보가 있으면 DB에서 사용자 정보를 조회한 뒤 프로필 화면을 반환한다.

### 기능 설명
- `@GET` : GET 요청 처리
- `@Path("/profile")` : `/profile` 경로 지정
- `@Produces(MediaType.TEXT_HTML)` : HTML 형식으로 응답
- `context.session().get("loginUser")` : 세션에서 로그인 사용자 정보 확인
- `loginUser == null` : 로그인하지 않은 사용자 판단
- `Response.seeOther(URI.create("/login"))` : 로그인하지 않은 사용자를 로그인 페이지로 이동
- `User.findByUsername(loginUser)` : DB에서 로그인한 사용자 정보 조회
- `context.session().put("userEmail", user.email)` : 사용자 이메일을 세션에 저장
- `context.session().put("userPhone", user.phone)` : 사용자 연락처를 세션에 저장
- `profileImage` : 사용자 프로필 이미지 정보 저장
- `"default.png"` : 프로필 이미지가 없을 때 사용할 기본 이미지
- `getResourceAsStream()` : `profile.html` 파일 읽기
- `Response.ok(html).build()` : 프로필 HTML 페이지 반환

### 코드
```java
@GET // GET 요청 처리
@Path("/profile") // /profile 주소 요청 처리
@Produces(MediaType.TEXT_HTML) // HTML 형식으로 응답
public Response profilePage() { // 프로필 페이지 요청 처리 메서드

    // ① 세션 체크 (로그인 안 한 사용자 차단)
    String loginUser = context.session().get("loginUser"); // 세션에서 로그인 사용자 아이디 가져오기

    if (loginUser == null) { // 로그인 정보가 없으면
        return Response
                .seeOther(URI.create("/login")) // 로그인 페이지로 이동
                .build(); // 응답 완성
    }

    // ② DB에서 사용자 정보 조회
    User user = User.findByUsername(loginUser); // 로그인한 아이디로 사용자 정보 조회

    // ③ 세션에 사용자 정보 저장 (HTML에서 활용)
    context.session().put("userEmail", user.email); // 사용자 이메일을 세션에 저장
    context.session().put("userPhone", user.phone); // 사용자 연락처를 세션에 저장
    context.session().put("profileImage",
            user.profileImage != null ? user.profileImage : "default.png"); // 프로필 이미지가 없으면 기본 이미지 저장

    // ④ 프로필 페이지 반환
    InputStream html = getClass()
            .getClassLoader()
            .getResourceAsStream(
                    "META-INF/resources/login/profile.html"); // profile.html 파일 읽기

    return Response.ok(html).build(); // 읽어온 HTML 파일을 정상 응답으로 반환
}
```

### 동작 방식
이 코드는 사용자가 `/profile` 주소로 접속했을 때 실행된다.  
먼저 `context.session().get("loginUser")`를 통해 세션에 로그인 사용자 정보가 있는지 확인한다.  
세션에 `loginUser` 값이 없으면 로그인하지 않은 사용자로 판단하여 `/login` 페이지로 이동시킨다.  
로그인 정보가 있으면 `User.findByUsername(loginUser)`를 사용하여 DB에서 해당 사용자의 정보를 조회한다.  
조회한 사용자의 이메일, 연락처, 프로필 이미지 정보를 세션에 저장하고,  
프로필 이미지가 없는 경우에는 `"default.png"`를 기본 이미지로 사용한다.  
마지막으로 `META-INF/resources/login/profile.html` 파일을 읽어와 브라우저에 반환한다.

---

## User 엔티티에 프로필 이미지 필드 추가

아래 코드는 사용자 정보를 저장하는 `User` 엔티티 클래스이다.  
기존 사용자 정보인 아이디, 비밀번호, 이메일, 연락처에 더해  
프로필 사진 파일명을 저장하기 위한 `profileImage` 필드를 추가하였다.

### 기능 설명
- `@Entity` : 데이터베이스 테이블과 연결되는 엔티티 클래스 선언
- `@Table(name = "users")` : `users` 테이블과 연결
- `PanacheEntity` : 기본 `id`와 DB 관련 메서드 사용 가능
- `username` : 사용자 아이디 저장
- `password` : 비밀번호 또는 SHA-256 해시값 저장
- `@Column(unique = true)` : 이메일 중복 방지
- `email` : 사용자 이메일 저장
- `phone` : 사용자 연락처 저장
- `profileImage` : 사용자의 프로필 사진 파일명 저장
- `findByUsername()` : 아이디로 사용자 조회
- `findByEmail()` : 이메일로 사용자 조회

### 코드
```java
@Entity // 이 클래스가 데이터베이스 테이블과 연결되는 엔티티임을 표시
@Table(name = "users") // users 테이블과 연결
public class User extends PanacheEntity { // PanacheEntity를 상속받아 DB 기능 사용

    public String username; // 사용자 아이디

    public String password; // 사용자 비밀번호 또는 SHA-256 해시값

    @Column(unique = true) // 이메일 중복 방지
    public String email; // 사용자 이메일

    public String phone; // 사용자 연락처

    // 신규 추가 : 프로필 사진 파일명
    public String profileImage; // 저장된 프로필 이미지 파일명, UUID 기반

    public static User findByUsername(String username) { // 아이디로 사용자 조회
        return find("username", username).firstResult(); // username이 일치하는 첫 번째 사용자 반환
    }

    public static User findByEmail(String email) { // 이메일로 사용자 조회
        return find("email", email).firstResult(); // email이 일치하는 첫 번째 사용자 반환
    }
}
```

### 동작 방식
이 클래스는 `users` 테이블과 연결되어 사용자 정보를 저장한다.  
회원가입 시 아이디, 비밀번호 해시값, 이메일, 연락처가 저장되고,  
프로필 사진을 업로드하면 해당 이미지 파일명이 `profileImage` 필드에 저장된다.  
이미지 파일 자체를 데이터베이스에 저장하는 것이 아니라, 서버에 저장된 이미지 파일명을 DB에 기록하는 방식이다.  
프로필 페이지에서는 이 `profileImage` 값을 이용해 사용자의 프로필 사진을 화면에 표시할 수 있다.

---

## 프로필 페이지 화면

아래 코드는 로그인한 사용자가 자신의 프로필 정보를 확인하고,  
프로필 사진을 업로드할 수 있도록 만든 HTML 코드이다.  
아이디, 이메일, 연락처를 표 형태로 출력하고,  
`multipart/form-data` 방식으로 이미지 파일을 `/profile/upload` 경로로 전송한다.

### 기능 설명
- `section.hero` : 기존 로그인 페이지 디자인을 재활용한 화면 영역
- `container` : 프로필 화면의 너비와 배치 조정
- `profileImg` : 프로필 사진을 표시하는 이미지 태그
- `src="/uploads/profile/default.png"` : 기본 프로필 이미지 경로
- `rounded-circle` : 프로필 이미지를 원형으로 표시
- `infoUsername` : 사용자 아이디 출력 영역
- `infoEmail` : 사용자 이메일 출력 영역
- `infoPhone` : 사용자 연락처 출력 영역
- `form id="uploadForm"` : 프로필 사진 업로드 form
- `method="POST"` : 서버로 데이터 전송
- `action="/profile/upload"` : 프로필 사진 업로드 처리 경로
- `enctype="multipart/form-data"` : 파일 업로드를 위한 필수 설정
- `name="profileImage"` : 서버에서 받을 파일 input 이름
- `accept="image/jpeg,image/png,image/gif,image/webp"` : 선택 가능한 이미지 파일 형식 제한
- `type="submit"` : 사진 업로드 버튼 클릭 시 form 제출

### 코드
```html
<!-- 기존 로그인 등 페이지의 디자인을 재활용한다. -->
<section class="hero d-flex align-items-center
    justify-content-center text-center py-5">
    <div class="container" style="max-width: 500px;">
        <h2 class="fw-bold mb-4"> 내 프로필</h2>

        <!-- 프로필 사진 영역 -->
        <div class="mb-4">
            <img id="profileImg"
                src="/uploads/profile/default.png"
                class="rounded-circle"
                width="120" height="120"
                style="object-fit:cover; border:3px solid #fff;"
                alt="프로필 사진">
        </div>

        <!-- 개인 정보 출력 -->
        <div class="card bg-dark text-white border-secondary mb-4">
            <div class="card-body text-start">
                <table class="table table-dark table-bordered mb-0">
                    <tr>
                        <th style="width:30%">아이디</th>
                        <td id="infoUsername"></td>
                    </tr>
                    <tr>
                        <th>이메일</th>
                        <td id="infoEmail"></td>
                    </tr>
                    <tr>
                        <th>연락처</th>
                        <td id="infoPhone"></td>
                    </tr>
                </table>
            </div>
        </div>

        <!-- 사진 업로드 폼 -->
        <form id="uploadForm"
            method="POST"
            action="/profile/upload"
            enctype="multipart/form-data">
            <div class="mb-3">
                <label class="form-label">프로필 사진 변경</label>
                <input type="file"
                    class="form-control"
                    id="profileFile"
                    name="profileImage"
                    accept="image/jpeg,image/png,image/gif,image/webp">
                <div class="form-text text-muted">
                    jpg, png, gif, webp / 최대 5MB
                </div>
            </div>

            <button type="submit"
                class="btn btn-primary w-100">
                사진 업로드
            </button>
        </form>
    </div>
</section>

<!-- JS 연동 -->
<script src="../js/search.js"></script>
<script src="../js/toggle.js"></script>
```

### 동작 방식
사용자가 `/profile` 페이지에 접속하면 서버는 `profile.html` 파일을 반환한다.  
화면에는 기본 프로필 이미지와 개인 정보 표가 표시된다.  
아이디, 이메일, 연락처 값은 JavaScript를 통해 각각 `infoUsername`, `infoEmail`, `infoPhone` 영역에 들어갈 수 있다.  
프로필 사진을 변경하려면 사용자가 이미지 파일을 선택하고 `사진 업로드` 버튼을 누른다.  
이때 form은 `multipart/form-data` 방식으로 `/profile/upload` 경로에 POST 요청을 보낸다.  
서버는 업로드된 이미지를 저장하고, 저장된 파일명을 DB의 `profileImage` 필드에 기록할 수 있다.

---

## 프로필 정보 조회 및 화면 출력

아래 코드는 프로필 페이지가 로딩되었을 때 서버에서 로그인한 사용자의 정보를 가져와 화면에 출력하는 JavaScript 코드이다.  
`fetch()`를 사용하여 `/profile/info` 주소로 사용자 정보를 요청하고, 서버에서 받은 JSON 데이터를 HTML 요소에 넣어 프로필 페이지를 완성한다.

### 기능 설명
- `window.onload` : 페이지 로딩 완료 후 실행
- `fetch('/profile/info')` : 서버에 로그인한 사용자 정보 요청
- `res.json()` : 서버 응답을 JSON 데이터로 변환
- `data.username` : 사용자 아이디
- `data.email` : 사용자 이메일
- `data.phone` : 사용자 연락처
- `data.profileImage` : 사용자 프로필 이미지 파일명
- `textContent` : HTML 요소 안에 텍스트 출력
- `profileImg.src` : 프로필 이미지 경로 변경
- `/uploads/profile/` : 업로드된 프로필 이미지가 저장되는 경로

### 코드
```javascript
window.onload = function() {
    fetch('/profile/info')
        .then(res => res.json())
        .then(data => {
            document.getElementById('infoUsername').textContent
                    = data.username;

            document.getElementById('infoEmail').textContent
                    = data.email;

            document.getElementById('infoPhone').textContent
                    = data.phone;

            if (data.profileImage) {
                document.getElementById('profileImg').src
                        = '/uploads/profile/' + data.profileImage;
            }
        });
}
```

### 동작 방식
이 코드는 프로필 페이지가 로딩된 뒤 자동으로 실행된다.  
먼저 `fetch('/profile/info')`를 사용하여 서버에 로그인한 사용자 정보를 요청한다.  
서버가 사용자 정보를 JSON 형태로 응답하면 `res.json()`을 통해 JavaScript에서 사용할 수 있는 객체로 변환한다.  
그 후 `data.username`, `data.email`, `data.phone` 값을 각각 `infoUsername`, `infoEmail`, `infoPhone` 요소에 출력한다.  
또한 `data.profileImage` 값이 존재하면 `/uploads/profile/` 경로와 파일명을 합쳐 `profileImg`의 `src`를 변경하여 사용자의 프로필 사진을 화면에 표시한다.

---

## 프로필 정보 JSON API

아래 코드는 프로필 페이지에서 사용할 사용자 정보를 JSON으로 반환하는 API 코드이다.  
프로필 페이지의 JavaScript는 `/profile/info`로 요청을 보내고,  
서버는 로그인한 사용자의 아이디, 이메일, 연락처, 프로필 이미지 파일명을 JSON 형태로 응답한다.

### 기능 설명
- `@GET` : GET 요청 처리
- `@Path("/profile/info")` : `/profile/info` 경로 지정
- `@Produces(MediaType.APPLICATION_JSON)` : JSON 형식으로 응답
- `context.session().get("loginUser")` : 세션에서 로그인 사용자 정보 확인
- `Response.status(401)` : 로그인하지 않은 사용자에게 인증 실패 응답 반환
- `User.findByUsername(loginUser)` : DB에서 로그인한 사용자 정보 조회
- `Map.of()` : JSON으로 변환할 key-value 데이터 생성
- `username` : 사용자 아이디
- `email` : 사용자 이메일
- `phone` : 사용자 연락처
- `profileImage` : 사용자 프로필 이미지 파일명

### 코드
```java
@GET // GET 요청 처리
@Path("/profile/info") // /profile/info 주소 요청 처리
@Produces(MediaType.APPLICATION_JSON) // JSON 형식으로 응답
public Response profileInfo() { // 프로필 정보 요청 처리 메서드

    // 세션 체크
    String loginUser = context.session().get("loginUser"); // 세션에서 로그인 사용자 아이디 가져오기

    if (loginUser == null) { // 로그인 정보가 없으면
        return Response.status(401).build(); // 401 Unauthorized 응답 반환
    }

    // DB 조회
    User user = User.findByUsername(loginUser); // 로그인한 아이디로 사용자 정보 조회

    // JSON 응답
    return Response.ok(
            Map.of(
                    "username", user.username, // 사용자 아이디
                    "email", user.email != null ? user.email : "", // 이메일이 없으면 빈 문자열
                    "phone", user.phone != null ? user.phone : "", // 연락처가 없으면 빈 문자열
                    "profileImage", user.profileImage != null
                            ? user.profileImage : "" // 프로필 이미지가 없으면 빈 문자열
            )
    ).build(); // JSON 응답 완성
}
```

### 동작 방식
프로필 페이지가 열리면 JavaScript에서 `fetch('/profile/info')` 요청을 보낸다.  
서버는 먼저 세션에서 `loginUser` 값을 확인하여 로그인 여부를 판단한다.  
로그인 정보가 없으면 사용자 정보를 반환하지 않고 `401 Unauthorized` 응답을 보낸다.  
로그인 정보가 있으면 `User.findByUsername(loginUser)`를 통해 DB에서 해당 사용자 정보를 조회한다.  
그 후 아이디, 이메일, 연락처, 프로필 이미지 파일명을 `Map.of()`에 담아 JSON 형태로 응답한다.  
JavaScript는 이 JSON 데이터를 받아 프로필 페이지의 아이디, 이메일, 연락처, 프로필 사진 영역에 출력한다.

---

## 프로필 사진 업로드 처리

아래 코드는 로그인한 사용자가 프로필 사진을 업로드했을 때 서버에서 처리하는 코드이다.  
업로드된 파일의 확장자와 크기를 검사하고, 문제가 없으면 UUID 기반 새 파일명으로 서버에 저장한 뒤  
DB의 `profileImage` 필드를 새 파일명으로 업데이트한다.

### 기능 설명
- `@POST` : POST 요청 처리
- `@Path("/profile/upload")` : 프로필 사진 업로드 경로 지정
- `@Transactional` : DB 업데이트 작업을 트랜잭션으로 처리
- `@Consumes(MediaType.MULTIPART_FORM_DATA)` : 파일 업로드 데이터 수신
- `@RestForm("profileImage")` : form에서 `name="profileImage"`로 전송된 파일 받기
- `context.session().get("loginUser")` : 로그인 사용자 확인
- `file.fileName()` : 업로드한 원본 파일명 확인
- `ext.matches("jpg|jpeg|png|gif|webp")` : 이미지 확장자 검사
- `file.size()` : 업로드 파일 크기 확인
- `UUID.randomUUID()` : 중복되지 않는 새 파일명 생성
- `Files.createDirectories()` : 업로드 폴더 생성
- `Files.copy()` : 업로드 파일 저장
- `User.findByUsername(loginUser)` : 로그인한 사용자 정보 조회
- `user.profileImage = newFileName` : DB에 저장된 프로필 이미지 파일명 변경
- `Response.seeOther()` : 업로드 결과에 따라 페이지 이동

### 코드
```java
@POST // POST 요청 처리
@Path("/profile/upload") // /profile/upload 주소 요청 처리
@Transactional // DB 업데이트 작업을 트랜잭션으로 처리
@Consumes(MediaType.MULTIPART_FORM_DATA) // 파일 업로드 형식 데이터 받기
public Response profileUpload(
        @RestForm("profileImage") FileUpload file) { // name="profileImage"로 전송된 파일 받기

    // ① 세션 체크
    String loginUser = context.session().get("loginUser"); // 세션에서 로그인 사용자 아이디 가져오기

    if (loginUser == null) { // 로그인 정보가 없으면
        return Response
                .seeOther(URI.create("/login")) // 로그인 페이지로 이동
                .build(); // 응답 완성
    }

    try { // 파일 처리 중 예외 발생 가능

        // ② 확장자 검사
        String original = file.fileName(); // 업로드한 원본 파일명 가져오기
        String ext = original.substring(
                original.lastIndexOf('.') + 1).toLowerCase(); // 확장자 추출 후 소문자로 변환

        if (!ext.matches("jpg|jpeg|png|gif|webp")) { // 허용된 이미지 확장자가 아니면
            return Response
                    .seeOther(URI.create("/profile?error=invalid_type")) // 잘못된 파일 형식 오류
                    .build(); // 응답 완성
        }

        // ③ 파일 크기 검사 (5MB)
        if (file.size() > 5 * 1024 * 1024) { // 파일 크기가 5MB보다 크면
            return Response
                    .seeOther(URI.create("/profile?error=too_large")) // 파일 크기 초과 오류
                    .build(); // 응답 완성
        }

        // ④ UUID 파일명 생성 + 저장
        String newFileName = UUID.randomUUID() + "." + ext; // UUID 기반 새 파일명 생성

        java.nio.file.Path uploadDir = Paths.get(
                "src/main/resources/META-INF/resources/uploads/profile"); // 업로드 폴더 경로 지정

        java.nio.file.Files.createDirectories(uploadDir); // 업로드 폴더가 없으면 생성

        java.nio.file.Files.copy(file.uploadedFile(),
                uploadDir.resolve(newFileName),
                java.nio.file.StandardCopyOption.REPLACE_EXISTING); // 업로드 파일을 새 이름으로 저장

        // ⑤ DB 업데이트
        User user = User.findByUsername(loginUser); // 로그인한 사용자 정보 조회
        user.profileImage = newFileName; // DB에 저장할 프로필 이미지 파일명 수정

        return Response
                .seeOther(URI.create("/profile")) // 업로드 성공 후 프로필 페이지로 이동
                .build(); // 응답 완성

    } catch (Exception e) { // 업로드 중 오류 발생 시
        return Response
                .seeOther(URI.create("/profile?error=upload_fail")) // 업로드 실패 오류
                .build(); // 응답 완성
    }
}
```

### 동작 방식
사용자가 프로필 페이지에서 이미지를 선택하고 사진 업로드 버튼을 누르면 `/profile/upload`로 POST 요청이 전송된다.  
서버는 먼저 세션의 `loginUser` 값을 확인하여 로그인 여부를 검사한다.  
로그인 정보가 없으면 `/login` 페이지로 이동시키고, 로그인 상태라면 업로드된 파일을 검사한다.  
먼저 원본 파일명에서 확장자를 추출하고, `jpg`, `jpeg`, `png`, `gif`, `webp` 중 하나인지 확인한다.  
허용되지 않은 확장자이면 `/profile?error=invalid_type`으로 이동한다.  
그 다음 파일 크기가 5MB를 초과하는지 확인하고, 초과하면 `/profile?error=too_large`로 이동한다.  
검사를 통과하면 UUID 기반의 새 파일명을 만들고, 업로드 폴더가 없으면 생성한 뒤 파일을 저장한다.  
마지막으로 로그인한 사용자를 DB에서 조회하고, `profileImage` 필드를 새 파일명으로 변경한다.  
처리가 완료되면 다시 `/profile` 페이지로 이동한다.

---

## 13주차 수업 내용
## 메인 페이지 로딩 알림 변경

기존에는 메인 페이지가 로딩되면 `alert()`를 사용하여 브라우저 기본 알림창을 띄웠다.  
하지만 `alert()`는 사용자가 확인 버튼을 누르기 전까지 화면 조작을 막기 때문에,  
더 자연스러운 알림을 위해 `showToast()`를 사용하도록 변경하였다.

### 변경 전 코드
```html
<script>
window.onload = function() {
    alert("메인 페이지 로딩 완료");
}
</script>
```

### 변경 후 코드
```html
<script>
window.onload = function() {
    showToast('메인 페이지 로딩 완료');
}
</script>
```

### 동작 방식
페이지 로딩이 완료되면 `window.onload` 함수가 실행된다.  
기존에는 `alert()`를 통해 알림창을 띄웠지만, 수정 후에는 `showToast()` 함수를 실행하여 토스트 알림을 표시한다.  
이를 통해 사용자는 페이지 이용을 방해받지 않고 자연스럽게 로딩 완료 메시지를 확인할 수 있다.

---

## Toast 알림 함수 추가

아래 코드는 Bootstrap Toast를 사용하여 화면에 알림 메시지를 표시하는 JavaScript 함수이다.  
기존의 `alert()` 방식은 사용자가 확인 버튼을 누르기 전까지 화면 조작을 막지만,  
Toast 알림은 화면 한쪽에 자연스럽게 표시되고 일정 시간이 지나면 자동으로 사라진다.

### 기능 설명

- `showToast(message, type)` : Toast 알림 표시 함수
- `message` : 화면에 보여줄 메시지
- `type` : Toast 색상 종류
- `type = 'success'` : type을 생략하면 기본값으로 success 사용
- `liveToast` : Toast 전체 HTML 요소
- `toastBody` : Toast 메시지가 들어갈 영역
- `bg-${type}` : type 값에 따라 Bootstrap 배경색 변경
- `bootstrap.Toast` : Bootstrap Toast 기능 실행
- `delay: 3000` : 3초 후 자동으로 사라짐

### 코드

```javascript
// test.js 수정 → Toast 함수 제공
function showToast(message, type = 'success') {
    // type : 'success' (초록) / 'danger' (빨강) / 'warning' (노랑)

    const toastEl = document.getElementById('liveToast');
    const toastBody = document.getElementById('toastBody');

    if (!toastEl || !toastBody) return;

    // 색상 클래스 변경
    toastEl.className =
            `toast align-items-center text-white bg-${type} border-0`;

    toastBody.textContent = message;

    // Bootstrap Toast 실행
    const toast = new bootstrap.Toast(toastEl, { delay: 3000 });
    toast.show();
}
```

### 사용 예시

```javascript
showToast('메인 페이지 로딩 완료');
showToast('로그인 실패', 'danger');
showToast('입력값을 확인해주세요.', 'warning');
```

### 동작 방식

다른 JavaScript 코드에서 `showToast()` 함수를 호출하면,  
먼저 HTML에서 `liveToast`와 `toastBody` 요소를 찾는다.  
요소가 존재하면 `type` 값에 따라 Toast의 배경색 클래스를 설정하고,  
`toastBody`에 전달받은 메시지를 넣는다.  
그 다음 `bootstrap.Toast` 객체를 생성하고 `toast.show()`를 실행하여 알림을 화면에 표시한다.  
`delay: 3000` 설정으로 인해 Toast는 3초 후 자동으로 사라진다.

---

## Toast 컨테이너 추가

아래 코드는 Bootstrap Toast 알림을 화면에 표시하기 위한 HTML 구조이다.  
JavaScript의 `showToast()` 함수가 `liveToast`와 `toastBody` 요소를 찾아 메시지를 넣고,  
Bootstrap Toast 기능을 실행하여 화면 오른쪽 아래에 알림을 표시한다.

### 기능 설명

- `toast-container` : Toast 알림을 담는 컨테이너
- `position-fixed` : 화면에 고정
- `bottom-0` : 화면 아래쪽 배치
- `end-0` : 화면 오른쪽 배치
- `p-3` : 여백 추가
- `z-index:9999` : 다른 요소보다 위에 표시
- `id="liveToast"` : JavaScript에서 Toast 전체 요소를 찾기 위한 id
- `id="toastBody"` : JavaScript에서 메시지를 넣기 위한 id
- `bg-success` : 기본 초록색 배경
- `data-bs-dismiss="toast"` : 닫기 버튼 클릭 시 Toast 닫기

### 코드

```html
<!-- 토스트 컨테이너 </body> 바로 위에 추가 -->
<div class="toast-container position-fixed
    bottom-0 end-0 p-3" style="z-index:9999">
    <div id="liveToast" class="toast align-items-center
        text-white bg-success border-0" role="alert">
        <div class="d-flex">
            <div class="toast-body" id="toastBody">
                메시지
            </div>
            <button type="button"
                class="btn-close btn-close-white me-2 m-auto"
                data-bs-dismiss="toast"></button>
        </div>
    </div>
</div>
```

### 동작 방식

이 코드는 HTML 문서의 `</body>` 태그 바로 위에 추가한다.  
페이지 안에 이 Toast 구조가 있어야 JavaScript의 `showToast()` 함수가 정상적으로 동작한다.  
`showToast()` 함수는 `id="liveToast"` 요소를 찾아 Bootstrap Toast 객체를 만들고,  
`id="toastBody"` 요소에 전달받은 메시지를 넣는다.  
그 후 Toast가 화면 오른쪽 아래에 표시되며, 일정 시간이 지나면 자동으로 사라지거나 닫기 버튼을 눌러 직접 닫을 수 있다.

### 사용 예시

```javascript
showToast('메인 페이지 로딩 완료');
showToast('로그인 실패', 'danger');
showToast('입력값을 확인해주세요.', 'warning');
```

---

## 프로필 메뉴 Tooltip 추가

아래 코드는 네비게이션 바의 프로필 링크에 Bootstrap Tooltip 기능을 추가한 코드이다.  
사용자가 프로필 메뉴 위에 마우스를 올리면 추가 설명을 보여줄 수 있으며,  
프로필 메뉴를 클릭하면 `/profile` 페이지로 이동한다.

### 기능 설명

- `a.nav-link` : Bootstrap 네비게이션 링크 스타일 적용
- `href="/profile"` : 프로필 페이지로 이동
- `id="profileNavLink"` : JavaScript에서 프로필 링크를 선택하기 위한 id
- `data-bs-toggle="tooltip"` : Bootstrap Tooltip 기능 사용
- `data-bs-placement="bottom"` : Tooltip을 링크 아래쪽에 표시
- `title` : Tooltip에 표시할 기본 문구

### 코드

```html
<!-- 기존 프로필 버튼 수정 -->
<a class="nav-link" href="/profile"
    id="profileNavLink"
    data-bs-toggle="tooltip"
    data-bs-placement="bottom"
    title="내 프로필 보기">프로필</a>
```

### 동작 방식

이 코드는 로그인 후 네비게이션 바의 프로필 메뉴에 적용된다.  
사용자가 프로필 링크 위에 마우스를 올리면 Bootstrap Tooltip이 표시되고,  
Tooltip은 `data-bs-placement="bottom"` 설정에 따라 링크 아래쪽에 나타난다.  
또한 `id="profileNavLink"`를 지정했기 때문에 JavaScript에서 이 요소를 찾아 로그인한 사용자 이름이나 추가 안내 문구를 Tooltip으로 설정할 수 있다.

---

## 프로필 메뉴 Tooltip에 사용자 이름 표시

아래 코드는 서버에서 로그인한 사용자 정보를 가져와 네비게이션 바의 프로필 메뉴에 Tooltip으로 표시하는 JavaScript 코드이다.  
`/profile/info` API에서 사용자 정보를 JSON으로 받아오고, `profileNavLink` 요소에 사용자 아이디를 Tooltip 제목으로 설정한다.

### 기능 설명

- `fetch('/profile/info')` : 서버에서 로그인한 사용자 정보 요청
- `res.json()` : 서버 응답을 JSON으로 변환
- `data.username` : 로그인한 사용자 아이디
- `profileNavLink` : 네비게이션 바의 프로필 링크
- `setAttribute('data-bs-title', data.username)` : Tooltip에 표시할 사용자 이름 설정
- `new bootstrap.Tooltip(profileLink)` : Bootstrap Tooltip 기능 실행

### 코드

```javascript
// 회원 정보 읽고, JSON 형태 변환 후 화면 갱신(비동기 처리)
fetch('/profile/info')
    .then(res => res.json())
    .then(data => {
        const profileLink = document.getElementById('profileNavLink');

        if (profileLink) {
            profileLink.setAttribute('data-bs-title', data.username);
            new bootstrap.Tooltip(profileLink);
        }
    });
```

### 동작 방식

페이지가 로딩되면 JavaScript에서 `/profile/info` 주소로 요청을 보낸다.  
서버는 세션에 저장된 로그인 사용자 정보를 확인하고, 아이디, 이메일, 연락처, 프로필 이미지 정보를 JSON으로 반환한다.  
JavaScript는 응답 데이터를 `data`로 받은 뒤 `id="profileNavLink"`인 프로필 링크를 찾는다.  
프로필 링크가 존재하면 `data-bs-title` 속성에 `data.username` 값을 넣고,  
`new bootstrap.Tooltip(profileLink)`를 실행하여 Bootstrap Tooltip 기능을 활성화한다.  
그 결과 사용자가 프로필 메뉴에 마우스를 올리면 로그인한 사용자 아이디가 Tooltip으로 표시된다.

---

## 개인정보 수정 폼 추가

아래 코드는 프로필 페이지에서 사용자가 이메일과 연락처를 수정할 수 있도록 만든 HTML 코드이다.  
프로필 사진 업로드 폼 아래에 `개인정보 수정` 버튼을 추가하고,  
버튼을 누르면 Bootstrap Collapse 기능을 이용해 숨겨져 있던 수정 폼이 펼쳐진다.

### 기능 설명

- `hr.my-4` : 사진 업로드 영역과 개인정보 수정 영역 구분
- `btn btn-warning` : 개인정보 수정 버튼 스타일
- `data-bs-toggle="collapse"` : Bootstrap Collapse 기능 사용
- `data-bs-target="#updateFormArea"` : 펼칠 수정 영역 지정
- `collapse` : 기본적으로 숨겨진 영역
- `id="updateFormArea"` : 수정 폼 영역 id
- `id="updateMsg"` : 수정 결과 메시지 표시 영역
- `form id="updateForm"` : 개인정보 수정 form
- `method="POST"` : POST 방식으로 서버에 전송
- `action="/profile/update"` : 개인정보 수정 요청을 처리할 서버 경로
- `id="updateEmail"` / `name="email"` : 수정할 이메일 입력값
- `id="updatePhone"` / `name="phone"` : 수정할 연락처 입력값
- `invalid-feedback` : 입력값 오류 메시지 표시 영역
- `onclick="validateAndUpdate()"` : 수정 완료 버튼 클릭 시 JavaScript 검사 함수 실행

### 코드

```html
<!-- 사진 업로드 폼 아래에 추가 -->
<hr class="my-4">

<!-- 토글 버튼 -->
<button class="btn btn-warning w-100 mb-2"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#updateFormArea"
    aria-expanded="false">
    개인정보 수정
</button>

<!-- 기본 숨김 → 버튼 클릭 시 펼쳐짐 -->
<div class="collapse" id="updateFormArea">
    <div class="card card-body bg-dark
        text-white border-secondary mt-2">

        <!-- 수정 결과 메시지 -->
        <div id="updateMsg" class="alert d-none mb-3"></div>

        <form id="updateForm"
            method="POST"
            action="/profile/update">

            <div class="mb-3 text-start">
                <label class="form-label">이메일</label>
                <input type="text" class="form-control"
                    id="updateEmail" name="email"
                    placeholder="example@email.com">
                <div class="invalid-feedback" id="updateEmailMsg"></div>
            </div>

            <div class="mb-3 text-start">
                <label class="form-label">연락처</label>
                <input type="text" class="form-control"
                    id="updatePhone" name="phone"
                    placeholder="010-0000-0000">
                <div class="invalid-feedback" id="updatePhoneMsg"></div>
            </div>

            <button type="button"
                class="btn btn-warning w-100"
                onclick="validateAndUpdate()">
                수정 완료
            </button>
        </form>
    </div>
</div>
```

### 동작 방식

프로필 페이지에서 사진 업로드 폼 아래에 `개인정보 수정` 버튼이 표시된다.  
처음에는 `id="updateFormArea"` 영역이 `collapse` 클래스 때문에 숨겨져 있다.  
사용자가 `개인정보 수정` 버튼을 클릭하면 Bootstrap Collapse 기능이 실행되어 수정 폼이 펼쳐진다.  
수정 폼에는 이메일과 연락처 입력칸이 있으며, 각각 `name="email"`, `name="phone"` 값으로 서버에 전송될 수 있다.  
사용자가 `수정 완료` 버튼을 누르면 `validateAndUpdate()` 함수가 실행된다.  
이 함수에서 이메일과 연락처 형식을 검사하고, 문제가 없으면 `id="updateForm"`인 form을 `/profile/update`로 POST 전송할 수 있다.

---

## 프로필 정보 조회 및 화면 자동 갱신

아래 코드는 프로필 페이지에서 `/profile/info` API를 호출하여  
로그인한 사용자의 정보를 가져오고, 화면의 여러 영역을 자동으로 갱신하는 JavaScript 코드이다.

### 기능 설명

- `fetch('/profile/info')` : 서버에서 로그인한 사용자 정보 요청
- `res.json()` : 서버 응답을 JSON으로 변환
- `data.username` : 사용자 아이디
- `data.email` : 사용자 이메일
- `data.phone` : 사용자 연락처
- `data.profileImage` : 사용자 프로필 이미지 파일명
- `infoUsername` : 프로필 표의 아이디 출력 영역
- `infoEmail` : 프로필 표의 이메일 출력 영역
- `infoPhone` : 프로필 표의 연락처 출력 영역
- `profileImg` : 프로필 이미지 출력 영역
- `updateEmail` : 개인정보 수정 폼의 이메일 입력칸
- `updatePhone` : 개인정보 수정 폼의 연락처 입력칸
- `profileNavLink` : 네비게이션 바의 프로필 링크
- `data-bs-title` : Bootstrap Tooltip에 표시할 문구
- `new bootstrap.Tooltip()` : Tooltip 기능 실행

### 코드

```javascript
fetch('/profile/info')
    .then(res => res.json())
    .then(data => {
        // 기존 정보 테이블 표시
        document.getElementById('infoUsername').textContent = data.username;
        document.getElementById('infoEmail').textContent = data.email;
        document.getElementById('infoPhone').textContent = data.phone;

        if (data.profileImage) {
            document.getElementById('profileImg').src =
                    '/uploads/profile/' + data.profileImage;
        }

        // 수정 폼에 기존 값 자동 채우기
        document.getElementById('updateEmail').value = data.email;
        document.getElementById('updatePhone').value = data.phone;

        // Tooltip으로 사용자명 표시
        const profileLink = document.getElementById('profileNavLink');

        if (profileLink) {
            profileLink.setAttribute('data-bs-title', data.username);
            new bootstrap.Tooltip(profileLink);
        }
    });
```

### 동작 방식

프로필 페이지가 로딩되면 JavaScript가 `/profile/info`로 요청을 보낸다.  
서버는 세션에 저장된 로그인 사용자 정보를 확인하고, 해당 사용자의 아이디, 이메일, 연락처, 프로필 이미지 파일명을 JSON으로 반환한다.

JavaScript는 받은 데이터를 이용해 프로필 정보 표의 `infoUsername`, `infoEmail`, `infoPhone` 영역을 갱신한다.  
또한 `profileImage` 값이 있으면 `/uploads/profile/파일명` 형태로 이미지 경로를 만들어 `profileImg`의 `src`를 변경한다.

그리고 개인정보 수정 폼의 `updateEmail`, `updatePhone` 입력칸에도 기존 값을 자동으로 넣어준다.  
마지막으로 네비게이션 바의 `profileNavLink` 요소에 사용자 아이디를 Tooltip 제목으로 설정하고, Bootstrap Tooltip을 실행한다.

---

## 개인정보 수정 입력값 검사

아래 코드는 프로필 페이지에서 이메일과 연락처를 수정할 때 사용하는 JavaScript 유효성 검사 코드이다.  
사용자가 `수정 완료` 버튼을 누르면 이메일과 연락처 형식을 검사하고,  
입력값이 올바르지 않으면 오류 메시지를 표시한다.  
모든 검사를 통과하면 개인정보 수정 form을 `/profile/update`로 전송한다.

### 기능 설명

- `validateAndUpdate()` : 개인정보 수정 입력값 검사 함수
- `updateEmail` : 수정할 이메일 입력칸
- `updatePhone` : 수정할 연락처 입력칸
- `emailRegex` : 이메일 형식 검사 정규식
- `phoneRegex` : `010-0000-0000` 형식 검사 정규식
- `showFieldError()` : 특정 입력칸에 오류 스타일과 메시지 표시
- `clearFieldError()` : 오류 스타일 제거 후 정상 스타일 추가
- `is-invalid` : Bootstrap 오류 표시 클래스
- `is-valid` : Bootstrap 정상 표시 클래스
- `updateForm.submit()` : 검사를 통과하면 개인정보 수정 form 전송

### 코드

```javascript
function validateAndUpdate() {
    let valid = true;

    const email = document.getElementById('updateEmail').value.trim();
    const phone = document.getElementById('updatePhone').value.trim();

    // ① 이메일 형식 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFieldError('updateEmail', 'updateEmailMsg',
                '올바른 이메일 형식이 아닙니다.');
        valid = false;
    } else {
        clearFieldError('updateEmail');
    }

    // ② 연락처 형식 검사
    const phoneRegex = /^010-\d{4}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        showFieldError('updatePhone', 'updatePhoneMsg',
                '010-0000-0000 형식으로 입력해주세요.');
        valid = false;
    } else {
        clearFieldError('updatePhone');
    }

    if (valid) document.getElementById('updateForm').submit();
}

// profile.js 전용 showError / clearError
function showFieldError(fieldId, msgId, message) {
    const field = document.getElementById(fieldId);
    field.classList.add('is-invalid');

    const msg = document.getElementById(msgId);
    if (msg) msg.textContent = message;
}

function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
}
```

### 동작 방식

사용자가 프로필 페이지에서 개인정보 수정 폼을 열고 이메일과 연락처를 입력한 뒤 `수정 완료` 버튼을 누르면 `validateAndUpdate()` 함수가 실행된다.  
이 함수는 먼저 `updateEmail`과 `updatePhone` 입력값을 가져오고, 각각 정규식을 사용하여 형식을 검사한다.  

이메일이 올바른 형식이 아니면 `showFieldError()`를 호출하여 이메일 입력칸에 `is-invalid` 클래스를 추가하고 오류 메시지를 표시한다.  
연락처가 `010-0000-0000` 형식이 아니면 연락처 입력칸에 오류 메시지를 표시한다.  

두 입력값이 모두 올바르면 `document.getElementById('updateForm').submit()`을 실행하여 개인정보 수정 form을 `/profile/update`로 POST 전송한다.

---

## 개인정보 수정 처리

아래 코드는 프로필 페이지에서 사용자가 이메일과 연락처를 수정했을 때 서버에서 처리하는 코드이다.  
세션을 확인하여 로그인한 사용자만 수정할 수 있도록 하고,  
이메일이 다른 사용자와 중복되는지 확인한 뒤 DB의 사용자 정보를 수정한다.

### 기능 설명

- `@POST` : POST 요청 처리
- `@Path("/profile/update")` : 개인정보 수정 경로 지정
- `@Transactional` : DB 수정 작업을 트랜잭션으로 처리
- `@Consumes(MediaType.APPLICATION_FORM_URLENCODED)` : 일반 form 데이터 수신
- `@FormParam("email")` : form에서 전송된 이메일 값 받기
- `@FormParam("phone")` : form에서 전송된 연락처 값 받기
- `context.session().get("loginUser")` : 로그인 사용자 확인
- `Response.seeOther(URI.create("/login"))` : 로그인하지 않은 사용자를 로그인 페이지로 이동
- `User.findByEmail(email)` : 이메일 중복 확인
- `found != null && !found.username.equals(loginUser)` : 본인을 제외한 이메일 중복 검사
- `User.findByUsername(loginUser)` : 현재 로그인한 사용자 정보 조회
- `user.email = email` : 이메일 수정
- `user.phone = phone` : 연락처 수정
- `/profile?success=updated` : 수정 성공 후 프로필 페이지로 이동

### 코드

```java
@POST // POST 요청 처리
@Path("/profile/update") // /profile/update 주소 요청 처리
@Transactional // DB 수정 작업을 트랜잭션으로 처리
@Consumes(MediaType.APPLICATION_FORM_URLENCODED) // 일반 form 데이터 받기
public Response profileUpdate(
        @FormParam("email") String email, // form의 name="email" 값 받기
        @FormParam("phone") String phone) { // form의 name="phone" 값 받기

    // ① 세션 체크
    String loginUser = context.session().get("loginUser"); // 세션에서 로그인 사용자 아이디 가져오기

    if (loginUser == null) { // 로그인 정보가 없으면
        return Response
                .seeOther(URI.create("/login")) // 로그인 페이지로 이동
                .build(); // 응답 완성
    }

    // ② 이메일 중복 체크 (본인 제외)
    User found = User.findByEmail(email); // 입력한 이메일을 사용하는 사용자가 있는지 조회

    if (found != null && !found.username.equals(loginUser)) { // 이메일 사용자가 있고, 그 사용자가 본인이 아니면
        return Response
                .seeOther(URI.create("/profile?error=duplicate_email")) // 이메일 중복 오류와 함께 프로필 페이지로 이동
                .build(); // 응답 완성
    }

    // ③ DB 업데이트
    User user = User.findByUsername(loginUser); // 현재 로그인한 사용자 정보 조회
    user.email = email; // 이메일 수정
    user.phone = phone; // 연락처 수정

    return Response
            .seeOther(URI.create("/profile?success=updated")) // 수정 성공 메시지와 함께 프로필 페이지로 이동
            .build(); // 응답 완성
}
```

### 동작 방식

사용자가 프로필 페이지에서 이메일과 연락처를 수정한 뒤 `수정 완료` 버튼을 누르면 `/profile/update`로 POST 요청이 전송된다.  
서버는 먼저 세션에서 `loginUser` 값을 가져와 로그인 상태를 확인한다.  
로그인 정보가 없으면 개인정보를 수정할 수 없으므로 `/login` 페이지로 이동시킨다.

로그인 상태라면 입력한 이메일을 기준으로 `User.findByEmail(email)`을 실행하여 같은 이메일을 사용하는 사용자가 있는지 확인한다.  
만약 해당 이메일을 가진 사용자가 있고, 그 사용자가 현재 로그인한 본인이 아니라면 이메일 중복으로 판단하여 `/profile?error=duplicate_email`로 이동한다.

이메일 중복 문제가 없으면 `User.findByUsername(loginUser)`로 현재 로그인한 사용자 정보를 조회하고,  
`user.email`과 `user.phone` 값을 새로 입력한 값으로 수정한다.  
수정이 완료되면 `/profile?success=updated`로 이동하여 프로필 페이지에서 성공 메시지를 표시할 수 있다.

---

## 프로필 페이지 결과 메시지 처리

아래 코드는 프로필 페이지가 로딩되었을 때 URL 파라미터를 확인하여  
개인정보 수정 성공, 이메일 중복, 비밀번호 오류, 프로필 사진 업로드 오류 메시지를 화면에 표시하는 JavaScript 코드이다.

### 기능 설명

- `window.onload` : 페이지 로딩 완료 후 실행
- `URLSearchParams` : 현재 URL의 쿼리 파라미터 읽기
- `params.get('error')` : URL의 error 값 가져오기
- `params.get('success')` : URL의 success 값 가져오기
- `updateMsg` : 개인정보 수정 결과 메시지 영역
- `success=updated` : 개인정보 수정 성공
- `error=duplicate_email` : 이메일 중복 오류
- `error=wrong_password` : 현재 비밀번호 불일치 오류
- `showToast()` : Toast 알림 표시
- `pwMsg` : 비밀번호 변경 결과 메시지 영역
- `uploadErrorMsg` : 프로필 사진 업로드 오류 메시지 영역
- `invalid_type` : 허용되지 않는 파일 형식
- `too_large` : 파일 크기 초과
- `upload_fail` : 업로드 실패

### 코드

```javascript
window.onload = function() {
    // 기존 fetch 코드 전체 유지

    // URL 파라미터 오류 감지
    const params = new URLSearchParams(window.location.search);
    const error = params.get('error');
    const success = params.get('success');

    const msgEl = document.getElementById('updateMsg');

    if (success === 'updated') {
        msgEl.className = 'alert alert-success';
        msgEl.textContent = ' 개인정보가 수정되었습니다.';
    } else if (error === 'duplicate_email') {
        msgEl.className = 'alert alert-danger';
        msgEl.textContent = ' 이미 사용 중인 이메일입니다.';
    }

    if (error === 'wrong_password') {
        // Toast 먼저 실행하여 즉각 알림 표시
        showToast(' 현재 비밀번호가 일치하지 않습니다.', 'danger');

        const pwMsgEl = document.getElementById('pwMsg');

        if (pwMsgEl) {
            pwMsgEl.className = 'alert alert-danger';
            pwMsgEl.textContent = ' 현재 비밀번호가 일치하지 않습니다.';
        }
    }

    if (error) {
        const messages = {
            'invalid_type': 'jpg, png, gif, webp 파일만 가능합니다.',
            'too_large': '파일 크기는 5MB 이하여야 합니다.',
            'upload_fail': '업로드 실패. 다시 시도해주세요.'
        };

        const msg = messages[error];
        const div = document.getElementById('uploadErrorMsg');

        if (msg && div) {
            div.textContent = msg;
            div.classList.remove('d-none');
        }
    }
}
```

### 동작 방식

프로필 페이지가 로딩되면 JavaScript는 현재 URL의 쿼리 파라미터를 확인한다.  
URL에 `success=updated`가 있으면 개인정보 수정 성공 메시지를 `updateMsg` 영역에 표시한다.  
URL에 `error=duplicate_email`이 있으면 이메일 중복 오류 메시지를 표시한다.

비밀번호 변경 실패로 `error=wrong_password`가 전달되면 `showToast()`를 먼저 실행하여 즉시 오류 알림을 보여주고,  
`pwMsg` 영역이 존재하면 해당 영역에도 오류 메시지를 출력한다.

프로필 사진 업로드 오류는 `invalid_type`, `too_large`, `upload_fail` 값을 기준으로 처리한다.  
각 오류 값에 맞는 메시지를 `messages` 객체에서 찾고, `uploadErrorMsg` 영역에 출력한 뒤 `d-none` 클래스를 제거하여 화면에 보이게 한다.

---

## 비밀번호 변경 폼 추가

아래 코드는 프로필 페이지에서 사용자가 비밀번호를 변경할 수 있도록 만든 HTML 코드이다.  
현재 비밀번호, 새 비밀번호, 새 비밀번호 확인 값을 입력받고,  
JavaScript에서 유효성 검사와 SHA-256 해시 처리를 한 뒤 `/profile/password`로 전송한다.

### 기능 설명

- `pwMsg` : 비밀번호 변경 결과 메시지 표시 영역
- `pwForm` : 비밀번호 변경 form
- `method="POST"` : POST 방식으로 서버에 전송
- `action="/profile/password"` : 비밀번호 변경 요청 처리 경로
- `currentPwInput` : 사용자가 입력하는 현재 비밀번호
- `currentPassword` : 서버로 전송할 현재 비밀번호 해시값 hidden input
- `newPwInput` : 사용자가 입력하는 새 비밀번호
- `newPassword` : 서버로 전송할 새 비밀번호 해시값 hidden input
- `newPwConfirm` : 새 비밀번호 확인 입력칸
- `invalid-feedback` : 입력값 오류 메시지 표시 영역
- `type="button"` : 바로 submit하지 않고 JavaScript 함수 실행
- `onclick="validateAndChangePassword()"` : 비밀번호 변경 전 유효성 검사 및 해시 처리 실행

### 코드

```html
<!-- 개인정보 수정 폼 아래에 추가 -->
<hr class="my-4">

<h5 class="fw-bold mb-3"> 비밀번호 변경</h5>

<!-- 결과 메시지 -->
<div id="pwMsg" class="alert d-none mb-3"></div>

<form id="pwForm"
    method="POST"
    action="/profile/password">
    <div class="mb-3 text-start">
        <label class="form-label">현재 비밀번호</label>
        <!-- 입력용 (서버 전송 안 됨) -->
        <input type="password" class="form-control"
            id="currentPwInput"
            placeholder="현재 비밀번호 입력" required>
        <div class="invalid-feedback" id="currentPwMsg"></div>

        <!-- 해시값 전송용 hidden -->
        <input type="hidden" id="currentPassword"
            name="currentPassword">
    </div>

    <div class="mb-3 text-start">
        <label class="form-label">새 비밀번호</label>
        <input type="password" class="form-control"
            id="newPwInput"
            placeholder="8자 이상, 영문+숫자+특수문자" required>
        <div class="invalid-feedback" id="newPwMsg"></div>

        <input type="hidden" id="newPassword"
            name="newPassword">
    </div>

    <div class="mb-3 text-start">
        <label class="form-label">새 비밀번호 확인</label>
        <input type="password" class="form-control"
            id="newPwConfirm"
            placeholder="새 비밀번호 재입력" required>
        <div class="invalid-feedback" id="newPwConfirmMsg"></div>
    </div>

    <button type="button"
        class="btn btn-danger w-100"
        onclick="validateAndChangePassword()">
        비밀번호 변경
    </button>
</form>
```

### 동작 방식

사용자가 프로필 페이지에서 현재 비밀번호와 새 비밀번호를 입력한 뒤 `비밀번호 변경` 버튼을 누르면 `validateAndChangePassword()` 함수가 실행된다.  
이 함수는 새 비밀번호가 조건에 맞는지 확인하고, 새 비밀번호와 새 비밀번호 확인 값이 일치하는지 검사한다.  

검사를 통과하면 현재 비밀번호와 새 비밀번호를 SHA-256 해시값으로 변환한다.  
변환된 현재 비밀번호 해시값은 `id="currentPassword"` hidden input에 저장되고,  
새 비밀번호 해시값은 `id="newPassword"` hidden input에 저장된다.  

그 후 `id="pwForm"`인 form이 `/profile/password`로 POST 전송된다.  
서버는 현재 비밀번호가 DB에 저장된 비밀번호와 일치하는지 확인하고, 일치하면 새 비밀번호로 변경한다.

---

## 비밀번호 변경 입력값 검사 및 해시 처리

아래 코드는 프로필 페이지에서 비밀번호를 변경할 때 사용하는 JavaScript 코드이다.  
사용자가 현재 비밀번호, 새 비밀번호, 새 비밀번호 확인 값을 입력하고 비밀번호 변경 버튼을 누르면,  
입력값을 검사한 뒤 현재 비밀번호와 새 비밀번호를 SHA-256 해시값으로 변환하여 서버로 전송한다.

### 기능 설명

- `validateAndChangePassword()` : 비밀번호 변경 검사 및 전송 함수
- `async` : 해시 처리처럼 시간이 걸리는 비동기 작업을 처리하기 위해 사용
- `currentPwInput` : 사용자가 입력하는 현재 비밀번호
- `newPwInput` : 사용자가 입력하는 새 비밀번호
- `newPwConfirm` : 새 비밀번호 확인 입력값
- `pwRegex` : 새 비밀번호 조건 검사 정규식
- `showFieldError()` : 입력값 오류 표시
- `clearFieldError()` : 오류 표시 제거
- `hashPassword()` : 비밀번호를 SHA-256 해시값으로 변환
- `currentPassword` : 현재 비밀번호 해시값을 서버로 전송하는 hidden input
- `newPassword` : 새 비밀번호 해시값을 서버로 전송하는 hidden input
- `pwForm.submit()` : 비밀번호 변경 form을 `/profile/password`로 전송

### 코드

```javascript
async function validateAndChangePassword() {
    let valid = true;

    const currentPw = document.getElementById('currentPwInput').value;
    const newPw = document.getElementById('newPwInput').value;
    const newPwConfirm = document.getElementById('newPwConfirm').value;

    // ① 현재 비밀번호 빈 값 체크
    if (!currentPw) {
        showFieldError('currentPwInput', 'currentPwMsg',
                '현재 비밀번호를 입력해주세요.');
        valid = false;
    } else {
        clearFieldError('currentPwInput');
    }

    // ② 새 비밀번호 정규식 검사
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    if (!pwRegex.test(newPw)) {
        showFieldError('newPwInput', 'newPwMsg',
                '8자 이상, 영문+숫자+특수문자를 포함해야 합니다.');
        valid = false;
    } else {
        clearFieldError('newPwInput');
    }

    // ③ 새 비밀번호 확인 일치
    if (newPw !== newPwConfirm) {
        showFieldError('newPwConfirm', 'newPwConfirmMsg',
                '새 비밀번호가 일치하지 않습니다.');
        valid = false;
    } else {
        clearFieldError('newPwConfirm');
    }

    if (!valid) return;

    // ④ 현재/새 비밀번호 SHA-256 해시 생성
    const hashedCurrent = await hashPassword(currentPw);
    const hashedNew = await hashPassword(newPw);

    document.getElementById('currentPassword').value = hashedCurrent;
    document.getElementById('newPassword').value = hashedNew;

    // F12 콘솔 확인
    console.log('현재 PW 해시 :', hashedCurrent);
    console.log('새 PW 해시 :', hashedNew);

    document.getElementById('pwForm').submit();
}
```

### 동작 방식

사용자가 비밀번호 변경 버튼을 누르면 `validateAndChangePassword()` 함수가 실행된다.  
먼저 현재 비밀번호, 새 비밀번호, 새 비밀번호 확인 값을 가져온다.

현재 비밀번호가 비어 있으면 오류 메시지를 표시한다.  
새 비밀번호는 정규식을 사용하여 8자 이상이며 영문, 숫자, 특수문자를 포함하는지 검사한다.  
또한 새 비밀번호와 새 비밀번호 확인 값이 같은지도 검사한다.

하나라도 조건을 만족하지 못하면 `valid` 값이 `false`가 되고 함수가 종료된다.  
모든 검사를 통과하면 현재 비밀번호와 새 비밀번호를 `hashPassword()` 함수로 SHA-256 해시값으로 변환한다.  
변환된 해시값은 각각 `currentPassword`, `newPassword` hidden input에 저장된다.  
마지막으로 `pwForm.submit()`을 실행하여 `/profile/password`로 비밀번호 변경 요청을 전송한다.

---

## 비밀번호 변경 처리

아래 코드는 프로필 페이지에서 사용자가 비밀번호를 변경했을 때 서버에서 처리하는 코드이다.  
현재 비밀번호가 DB에 저장된 비밀번호와 일치하는지 확인하고,  
일치하면 새 비밀번호 해시값으로 DB를 업데이트한다.

### 기능 설명

- `@POST` : POST 요청 처리
- `@Path("/profile/password")` : 비밀번호 변경 요청 경로 지정
- `@Transactional` : DB 수정 작업을 트랜잭션으로 처리
- `@Consumes(MediaType.APPLICATION_FORM_URLENCODED)` : 일반 form 데이터 수신
- `@FormParam("currentPassword")` : 현재 비밀번호 해시값 받기
- `@FormParam("newPassword")` : 새 비밀번호 해시값 받기
- `context.session().get("loginUser")` : 로그인 사용자 확인
- `User.findByUsername(loginUser)` : 현재 로그인한 사용자 정보 조회
- `user.password.equals(currentPassword)` : 현재 비밀번호 해시값 비교
- `user.password = newPassword` : 새 비밀번호 해시값으로 변경
- `/profile?error=wrong_password` : 현재 비밀번호 불일치 오류
- `/profile?success=password_changed` : 비밀번호 변경 성공

### 코드

```java
@POST // POST 요청 처리
@Path("/profile/password") // /profile/password 주소 요청 처리
@Transactional // DB 수정 작업을 트랜잭션으로 처리
@Consumes(MediaType.APPLICATION_FORM_URLENCODED) // 일반 form 데이터 받기
public Response profilePassword(
        @FormParam("currentPassword") String currentPassword, // 현재 비밀번호 해시값 받기
        @FormParam("newPassword") String newPassword) { // 새 비밀번호 해시값 받기

    // ① 세션 체크
    String loginUser = context.session().get("loginUser"); // 세션에서 로그인 사용자 아이디 가져오기

    if (loginUser == null) { // 로그인 정보가 없으면
        return Response
                .seeOther(URI.create("/login")) // 로그인 페이지로 이동
                .build(); // 응답 완성
    }

    // ② 현재 비밀번호 확인 (해시값 비교)
    User user = User.findByUsername(loginUser); // 현재 로그인한 사용자 정보 조회

    if (!user.password.equals(currentPassword)) { // DB 비밀번호 해시값과 입력한 현재 비밀번호 해시값이 다르면
        return Response
                .seeOther(URI.create("/profile?error=wrong_password")) // 현재 비밀번호 오류와 함께 프로필 페이지로 이동
                .build(); // 응답 완성
    }

    // ③ 새 비밀번호로 DB 업데이트
    user.password = newPassword; // 새 비밀번호 해시값으로 변경

    return Response
            .seeOther(URI.create("/profile?success=password_changed")) // 비밀번호 변경 성공 후 프로필 페이지로 이동
            .build(); // 응답 완성
}
```

### 동작 방식

사용자가 프로필 페이지에서 현재 비밀번호와 새 비밀번호를 입력한 뒤 비밀번호 변경 버튼을 누르면 JavaScript에서 입력값을 검사한다.  
검사를 통과하면 현재 비밀번호와 새 비밀번호를 SHA-256 해시값으로 변환하고, hidden input에 저장한 뒤 `/profile/password`로 POST 전송한다.

서버는 먼저 세션에서 `loginUser` 값을 확인하여 로그인 상태인지 검사한다.  
로그인 정보가 없으면 `/login`으로 이동시킨다.  
로그인 상태라면 `User.findByUsername(loginUser)`로 현재 로그인한 사용자를 조회한다.

그 다음 DB에 저장된 기존 비밀번호 해시값인 `user.password`와 사용자가 입력한 현재 비밀번호 해시값인 `currentPassword`를 비교한다.  
두 값이 다르면 현재 비밀번호가 틀린 것이므로 `/profile?error=wrong_password`로 이동한다.  
두 값이 같으면 `user.password` 값을 `newPassword`로 바꾸어 새 비밀번호 해시값을 저장한다.  
비밀번호 변경이 완료되면 `/profile?success=password_changed`로 이동한다.

---

## 로그아웃 후 이동 페이지 선택

아래 코드는 로그아웃 처리 시 세션을 삭제하고,  
URL의 `next` 파라미터 값에 따라 로그아웃 후 이동할 페이지를 다르게 설정하는 코드이다.

기존에는 로그아웃 후 항상 메인 페이지 `/`로 이동했지만,  
수정 후에는 `/logout?next=login` 형식으로 요청하면 로그아웃 후 로그인 페이지 `/login`으로 이동할 수 있다.

### 기능 설명

- `@GET` : GET 요청 처리
- `@Path("/logout")` : `/logout` 경로 지정
- `@QueryParam("next")` : URL 쿼리 파라미터 값 받기
- `context.session().destroy()` : 현재 세션 삭제
- `next=login` : 로그아웃 후 로그인 페이지로 이동
- `Response.seeOther()` : 지정한 주소로 리다이렉트

### 코드

```java
@GET // GET 요청 처리
@Path("/logout") // /logout 주소 요청 처리
public Response logout(@QueryParam("next") String next) { // URL의 next 파라미터 값 받기

    context.session().destroy(); // 현재 세션 삭제, 즉 로그아웃 처리

    String redirect = (next != null && next.equals("login"))
            ? "/login" // next=login이면 로그인 페이지로 이동
            : "/"; // next 값이 없거나 login이 아니면 메인 페이지로 이동

    return Response
            .seeOther(URI.create(redirect)) // 선택된 주소로 리다이렉트
            .build(); // 응답 완성
}
```

### 사용 예시

```html
<a href="/logout">로그아웃</a>
```

위 코드는 로그아웃 후 메인 페이지 `/`로 이동한다.

```html
<a href="/logout?next=login">로그아웃</a>
```

위 코드는 로그아웃 후 로그인 페이지 `/login`으로 이동한다.

### 동작 방식

사용자가 `/logout` 주소로 요청을 보내면 서버는 먼저 `context.session().destroy()`를 실행하여 세션을 삭제한다.  
세션이 삭제되면 로그인 상태가 해제된다.

그 다음 URL에 `next` 파라미터가 있는지 확인한다.  
만약 `next=login`이면 `redirect` 값을 `/login`으로 설정하고,  
그 외의 경우에는 `redirect` 값을 `/`로 설정한다.

마지막으로 `Response.seeOther(URI.create(redirect)).build()`를 통해 선택된 페이지로 이동시킨다.

---

## 비밀번호 변경 성공 후 자동 로그아웃

아래 코드는 비밀번호 변경이 성공했을 때 Toast 알림을 표시한 뒤,  
3.5초 후 자동으로 로그아웃하고 로그인 페이지로 이동시키는 JavaScript 코드이다.

### 기능 설명

- `success === 'password_changed'` : 비밀번호 변경 성공 여부 확인
- `showToast()` : 성공 Toast 알림 출력
- `setTimeout()` : 일정 시간 후 코드 실행
- `3500` : 3.5초 대기
- `window.location.href` : 페이지 이동
- `/logout?next=login` : 로그아웃 후 로그인 페이지로 이동

### 코드

```javascript
// 비밀번호 변경 성공 처리, window.onload 안에 삽입
if (success === 'password_changed') {
    // Toast 출력
    showToast(
            ' 비밀번호가 변경 완료, 로그인 페이지로 이동합니다.',
            'success'
    );

    // 3.5초 후 로그인 페이지로 이동
    setTimeout(function() {
        window.location.href = '/logout?next=login';
    }, 3500);
}
```

### 동작 방식

비밀번호 변경이 성공하면 서버는 사용자를 `/profile?success=password_changed`로 이동시킨다.  
프로필 페이지의 JavaScript는 URL에서 `success` 값을 읽고, 그 값이 `password_changed`인지 확인한다.  
조건이 맞으면 `showToast()`를 실행하여 비밀번호 변경 성공 메시지를 보여준다.  
그 후 `setTimeout()`을 사용해 3.5초 동안 기다린 뒤 `/logout?next=login`으로 이동한다.  
이 주소에서는 서버가 세션을 삭제하고, `next=login` 값에 따라 로그인 페이지 `/login`으로 이동시킨다.

---

## Toast 컨테이너 추가

아래 코드는 Bootstrap Toast 알림을 화면에 표시하기 위한 HTML 구조이다.  
JavaScript의 `showToast()` 함수가 `liveToast`와 `toastBody` 요소를 찾아 메시지를 넣고,  
Bootstrap Toast를 실행하여 화면 오른쪽 아래에 알림을 표시한다.

### 기능 설명

- `toast-container` : Toast 알림을 담는 컨테이너
- `position-fixed` : 화면에 고정
- `bottom-0` : 화면 아래쪽 배치
- `end-0` : 화면 오른쪽 배치
- `p-3` : 여백 추가
- `z-index:9999` : 다른 요소보다 위에 표시
- `id="liveToast"` : JavaScript에서 Toast 전체 요소를 찾기 위한 id
- `id="toastBody"` : JavaScript에서 Toast 메시지를 넣기 위한 id
- `bg-success` : 기본 Toast 배경색을 성공 색상으로 설정
- `data-bs-dismiss="toast"` : 닫기 버튼 클릭 시 Toast 닫기

### 코드

```html
<!-- Toast 컨테이너 추가 -->
<div class="toast-container position-fixed bottom-0 end-0 p-3" style="z-index:9999">
    <div id="liveToast" class="toast align-items-center text-white bg-success border-0" role="alert">
        <div class="d-flex">
            <div class="toast-body" id="toastBody">메시지</div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    </div>
</div>
```

### 동작 방식

HTML 문서에 이 Toast 컨테이너가 있어야 JavaScript의 `showToast()` 함수가 정상적으로 동작한다.  
`showToast()` 함수는 `id="liveToast"`인 요소를 찾아 Bootstrap Toast 객체를 만들고,  
`id="toastBody"`인 요소에 전달받은 메시지를 넣는다.  
그 후 Toast가 화면 오른쪽 아래에 표시되며, 일정 시간이 지나면 자동으로 사라지거나 닫기 버튼을 눌러 직접 닫을 수 있다.

### 사용 예시

```javascript
showToast('메인 페이지 로딩 완료');
showToast('현재 비밀번호가 일치하지 않습니다.', 'danger');
showToast('비밀번호가 변경 완료, 로그인 페이지로 이동합니다.', 'success');
```

---

## 총 정리