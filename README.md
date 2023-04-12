23-react1 최서진
===========

2023년 4월 6일 (6주차)

1.State란?
-리액트 컴포넌트의 상태를 의미
-상태의 의미는 정상, 비정상을 말하는 것이 아닌 컴포넌트의 데이터를 의미
-State가 변하면 다시 렌더링 되기 때문에 렌더링과 관련된 값만 포함시켜야함

2.특징
-리액트만의 특별한 형태가 아닌 JS 객체일 뿐이다.
-state는 변경이 가능하다고는 하지만 직접 수정이 안되기 때문에 불가능하다고 생각하는 것이 좋음

3.생명주기에 대해 알아보기
생명주기 = 컴포넌트의 생성 시점, 사용 시점, 종료 시점을 나타내는 것
-constructor가 실행 되면서 컴포넌트가 생성됨
-생성 직후 conponentDidMount()함수가 호출됨
-컴포넌트가 소멸하기 전까지 여러 번 랜더링 할 것
-랜더링은 props, setState(), forceUpdate()에 의해 상태가 변경되면 이루어짐. 그리고 랜더링이 끝나면 conponentDidUpdate()함수가 호출됨.
-컴포넌트가 언마운트 되면 conponentWillUnmount() 함수가 호출됨

===============================================

2023년 3월 30일 (5주차)

1.엘리먼트 렌더링 하기
</div?>
div태그로 단순하지만 리액트에 필수로 들어가는 중요 코드임
div 태그 안에 리액트 엘리먼트가 렌더링 되며, 이 것을 root DOM 이라고 함

2.컴포넌트
컴포넌트 구조라는 것은 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고, 다시 이런 컴포넌트들이 모여서 전체 페이지를 구성한다는 것을 의미함

   *컴포넌트의 특징
      -재사용이 가능 : 전체 코드의 양을 줄일 수 있어 개발 시간과 유지 보수 비용도 절약 가능
      -컴포넌트는 JS 함수와 입력과 함수가 있다는 점에서 상당히 유사
      -다만 입력과 출력은 입력은 Props가 담당, 출력은 리액트 앨리먼트의 형태로 출력
      -앨리먼트를 필요한 만큼 만들어 사용한다는 정메서 객체 지향과 유사
      
   *컴포넌트 만들기
      -함수 컴포넌트과 클래스 컴포넌트로 나누어짐
      -리액트 초기버전을 사용할 때는 클래스형을 사용하였으나 최근 Hook이라는 개념이 나오면서 함수형을 주로 사용하고 있음
      -허나 과거에 작성된 코드나 문서들을 분석할 때는 클랙스형에 대해 알고있어야 하기 때문에 클래스형 컴포넌트와 컴포넌트의 생명주기에 관해서도 알아두어야 함
     
   *컴포넌트 이름짓기
      -이름은 항상 대문자로
      -리액트에서 소문자로 시작하는 컴포넌트를 DOM 태그로 인식하기 때문
      -컴포넌트 파일 이름과 컴포넌트 이름은 같게 할 것
      
   *컴포넌트 추출
      -복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수도 있음
      -큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것
      -실무에서는 처음부터 1개의 컴포넌트에 하나만 만드는 것을 추천
      
      

=====================================================



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
