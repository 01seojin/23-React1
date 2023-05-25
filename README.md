23-react1 최서진
===============================================

2023년 5월 25일 (13주차)

1. useContext
   -useContext() 혹은 React.createContext() 함수 호출로 생성된 컨텍스트 객체를 인자로 받아서 현재 컨텍스트읠 값을 리턴합니다

      function MyComponent(props) {
         const value = useContest(MyContext);
         
         return(
            ...
         )
      }


===============================================


2023년 5월 18일 (12주차)

1. 컨텍스트 API

   (1)React.createContext 
      -컨텍스트를 생성하기 위한 함수 -파라메타에는 기본값 삽입 
      -하위 컴포넌트는 가장 가까운 상위 레벨의 Provider부터 컨텍스트를 받게 되지만, 만일 Provider를 찾을 수 없다면 위에서 설장한 기본값을 사용하게 됨

   (2)Context.Provider 
      -Context.Provider 컴포넌트르 하위 컴포넌트를 감싸주면 모든 하위 컴포넌트들이 해당 컨텍스트에 접근 가능 
      -하위 컴포넌트를 consumer 컴포넌트라 부름

   (3)Class.contextType 
      -Provider 하위에 있는 클래스 컴포넌트에서 컨텍스트의 데이터에 접근하기 위해 사용 
      -Class 컴포넌트는 더 이상 사용하지 않음

   (4)Context.Consumer 
      -함수형 컴포넌트에서 Context.Consumer를 사용하여 컨텍스트를 구독 
      -컴포넌트의 자식으로 함수가 올 수 있는데 이것을 function as a child 라고 함

   (5)Context.displayName 
      -컨텍스트 객체는 displayName이라는 문자열 속성을 갖음


2. 컨텍스트를 사용하기 전에 고려할 점

   -컨텍스트는 다른 레벨의 많은 컴포넌트가 특정 데이터를 필요로 하는경우에 사용 
   -컨텍스트를 사용하는 것이 무조건 좋은 것X (컴포넌트와 컨텍스트가 연동되면 재사용성이 떨어지기 때문) 
   -데이터가 많아질수록 상위 컴포넌트는 복잡 
   -컨텍스트를 사용하려면 컴포넌트의 상위 컴포넌트에서 Provider로 감싸주어야 함


3. 컨텍스트란?

   -기존의 일반적인 리액트에서는 데이터가 컴포넌트의 props를 통해 부모에서 자식을 단방향 전달 
   -컨텍스트는 리액트 컴포넌트들 사이에서 데이터를 기존의 props를 통해 전달하는 방식 대신 컴포넌트 트리를 통해 곧바로 컴포넌트에 전달하는 새로운 방식을 제공 
   -컨텍스트를 사용하면 일일이 props로 전달할 필요 없이 데이터를 필요로 하는 컴포넌트에 바로 전달 가능


===============================================


2023년 5월 11일 (11주차)


Calculator.jsx import React, { useState} from "react"; 
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) { if(props.celsius >= 100) { return

물이 끓습니다.

}
return <p>물이 끓지 않습니다.</p>
}

function toCelsius(fahrenheit) { return((fahrenheit - 32) * 5) / 9 ; }

function toFahrenheit(celsius) { return (celsius * 9 ) / 5 + 32; }

function tryConvert(temperature, convert) { const input = parseFloat(temperature); 
if(Number.isNaN(input)) { return "" } const output = convert(input); 
const rounded = Math.round(output * 1000) / 1000; return rounded.toString(); }

function Calculator(props) { const [temperature, setTemperature] = useState("");
const [scale, setScale] = useState("c");

const handleCelsiusChange = (temperature) => {
    setTemperature(temperature);
    setScale("c");
};

const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale("f");
};

const celsius = 
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = 
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;    

    return (
        <div>
                <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
                />
                <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
                />
                <BoilingVerdict celsius={parseFloat(celsius)}/>
        </div>
    );
}

export default Calculator; 
TemperatureInput.jsx const scaleNames = { c: "섭씨", f: "화씨", };

function TemperatureInput(props) { const handleChange = (event) => { props.onTemperatureChange(event.target.value) };

return (

온도를 입력해주세요.(단위: {scaleNames[props.scale]});
);
}

export default TemperatureInput;


===============================================


2023년 5월 4일 (10주차)

1. 리스트와 키란 무엇인가? 
   -리스크는 JS의 변수나 객체를 하나의 변수로 묶어 놓은 배열과 같은 것 
   -키는 각 객체나 아이템을 구분할 수 있는 고유한 값을 의미
   -리액트에서는 배열과 키를 사용하는 반복되는 다수의 엘리먼트를 쉽게 렌더링 할 수 있음


2. 리스트의 키 
   -리스트에서의 키는 리스트에서 아이템을 구별하기 위한 고유한 문자열 
   -이 키는 리스트에서 어떤 아이템이 변경, 추가 또는 제거되었는지 구분하기 위해 사용함 
   -키는 같은 엘리먼트 사이에서만 고유한 값이면 됨


3. textarea 태그 / select 태그 
   -HTML 에서 <textarea> 의 children으로 텍스트가 들어가는 형태
   -리액트에서는 state를 통해 태그의 value라는 attribute를 변경하여 텍스트를 표시 
   -select 태그도 taxtarea와 동일

4. Shared State 
   -shared state는 공유된 state를 의미 
   -어떤 컴포넌트의 state에 있는 데이터를 여러 개의 하위 컴포넌트에서 공통적으로 사용하는 경우 
   -하위 컴포넌트가 공통된 부모 컴포넌트의 state를 공유하여 사용하는 것을 shared state라고 함

5. Calculator 컴포넌트 변경하기 
   -상위 컴포넌트인 Calculator에서 온도 값가 단위를 각각 state를 가지고 있음 
   -두 개의 하위 컴포넌트는 섭씨와 화씨로 변환된 온도 값을 업데이트하기 위한 props로 가지고 있음 
   -이처럼 공통된 상위 컴포넌트로 올려서 공유하는 방법을 사용하면 더욱 간결하고 효율적


===============================================


2023년 4월 27일 (9주차)

1. 조건부 렌더링이란?

   -여기서 조건이란 조건문의 조건을 뜻함
   -props로 전달받은 isLoggedln이 true이면 <UserGreeting/>을
   false면 <GuestGreeting/>을 return함
   -이와 같은 렌더링을 조건부 렌더링이라고 함


2. 엘리먼트 변수
   
   -렌더링해야 될 컴포넌트를 변수처럼 사용하는 방법
   -272p 코드처럼 state에 따라 button 변수에 컴포넌트의 객체를 저장하여 return문에서 사용하고 있음


3. 인라인 조건

   -필요한 곳에 조건문을 직접 넣어 사용하는 방법

   (1) 인라인 if

      -if문을 직접 사용하지 않고 동일한 효과를 내기 위해 && 논리 연산자를 사용
      -&&은 and 연산자로 모든 조건이 참일때만 참이 됩니다
      -첫번째 조건이 거짓이면 두번째 조건은 판단할 필요가 없음(단축평가)
      -판단만 하지 않는 것이고 결과 값은 그대로 리턴됨

   (2) 인라인 if-else

      -삼항 연산자를 사용
      -문자열이나 엘리먼트를 넣어서 사용할 수도 있음
      -조건문 ? 참일 경우, : 거짓일 경우


4. 컴포넌트 렌더링 막기
   -컴포넌트를 렌더링하고 싶지 않을 때 null을 리턴함


===============================================


2023년 4월 13일 (7주차)

1. useState
  
   *사용법
     
      - 첫번째 항목이 state의 이름(변수명)이고, 두번째 항목은 state의 set함수입니다. 즉 state를 업데이트하는 함수입니다.
      - 함수를 호출할 때 state의 초기값을 설정합니다.
      - 함수의 리턴값은 배열의 형태입니다

2. useEffect
   
   - useState와 함께 가장 많이 사용하는 Hook
   - 사이드 이펙트를 수행하기 위한 것 
   - 영어로 side effect는 부작용을 의미함. 일반적으로 프로그래밍에서 사이드 이펙트는 '개발자가 의도하지 않은 코드가 실행되면서 버그가 발생하는 것'을 의미

3. useMemo

   - useMemo() 훅은 Memorizde value를 리턴하는 훅
   - 이전 계산값을 갖고 있기 때문에 연산량이 많 작업의 반복을 피할 수 있음
   - 이 훅은 렌더링이 일어나는 동안 실행
   - 따라서 렌더링이 일어나는 동안 실행돼서는 안될 작업을 넣으면 안됨
   - 예를 들면 useEffect, 사이드 이펙트 같은 것

===============================================

2023년 4월 6일 (6주차)

1. State란?

   -리액트 컴포넌트의 상태를 의미

   -상태의 의미는 정상, 비정상을 말하는 것이 아닌 컴포넌트의 데이터를 의미
   -State가 변하면 다시 렌더링 되기 때문에 렌더링과 관련된 값만 
포함시켜야함


2. 특징

   -리액트만의 특별한 형태가 아닌 JS 객체일 뿐이다.

   -state는 변경이 가능하다고는 하지만 직접 수정이 안되기 때문에 불가능하다고 생각하는 것이 좋음


3. 생명주기에 대해 알아보기

   생명주기 = 컴포넌트의 생성 시점, 사용 시점, 종료 시점을 나타내는 것

   -constructor가 실행 되면서 컴포넌트가 생성됨

   -생성 직후 conponentDidMount()함수가 호출됨

   -컴포넌트가 소멸하기 전까지 여러 번 랜더링 할 것

   -랜더링은 props, setState(), forceUpdate()에 의해 상태가 변경되면 이루어짐. 그리고 랜더링이 끝나면 conponentDidUpdate()함수가 호출됨.

   -컴포넌트가 언마운트 되면 conponentWillUnmount() 함수가 호출됨

===============================================

2023년 3월 30일 (5주차)

1. 엘리먼트 렌더링 하기

   -div태그로 단순하지만 리액트에 필수로 들어가는 중요 코드임

   -div 태그 안에 리액트 엘리먼트가 렌더링 되며, 이 것을 root DOM 이라고 함



2. 컴포넌트

   -컴포넌트 구조라는 것은 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고, 다시 이런 컴포넌트들이 모여서 전체 페이지를 구성한다는 것을 의미함


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
