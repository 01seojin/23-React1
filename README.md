23-react1 최서진
===========
2023년 03월 23일 (4주차)

1. JXS
-jxs는 내부적으로 xml/html코드를 자바스크립트로 변환합니다. 
-React가 createElement함수를 사용해야 합니다

2. 장점
-코드 간결
-가독성 향상
-Injection Attack이라 불리는 해킹방법 방어(보안에 강함)

3. 사용법
-모든 자바스크립트 문법 지원
-자바스크립트 문법 + XML + HTML
-만일 html이나 xml에 자바스크립트 코드 사용하고 싶으면 {}괄호 사용



======================================================



2023년 03월 16일 (3주차)

1. React의 정의
사용자의 인터페이스를 만들기 위한 자바스크립트 라이브러리

+렌더링 프레임워크
+사이트 구축할 때 빠르고 관리 쉬움 

2. React의 장점
   
   *빠른 업데이트와 렌더링 속도
    -이 것을 가능하게 하는 것이 바로 Virtual DOM
    -DOM(Document Object Model)이란 XML, HTML 문서의 각 항목을 계층으로 표현하여 생성, 변형 삭제할 수 있도록 돕는 인터페이스. 이것은 W3C의 표준.
    -Virtual DOM은 DOM 조작이 비효율적인 이유로 속도가 느리기 때문에 고안된 방법
    -DOM은 동기식, Virtyal DOM은 비동기식 방법으로 렌더링함!!!!!
    (동기식 : 서버하고 같이 움직임 / 비동기식 : 서버랑 따로 움직임)
    (비동기식의 예 - 페이스북 맨 밑 스크롤 내려도 끝을 본 적 없음.)
     안녕하세용

   *컴포넌트 기반 구조
    -리액트의 모든 페이지는 컴포넌트로 구성
    -하나의 컴포넌트는 다른 여러개의 컴포넌트 조합으로 구성할 수 있음
    -리액트로 개발 하다 보면 레고 블록 조립나는 것처럼 컴포넌트를 조합해서 웹사이트를 개발하게 됨
    -재사용성이 뛰어남 

   *든든한 지원군 
   *활발한 지식 공유 & 커뮤니티
   *모바일 앱 개발가능
    -리액트 네이티브라는 모바일 환경 UI프레임워크를 사용하면 크로스 플랫폼 모바일 앱을 개발할 수 있음

3. React의 단점
   
   *방대한 학습량
   *높은 상태 관리 복잡도
