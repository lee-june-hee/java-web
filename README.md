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