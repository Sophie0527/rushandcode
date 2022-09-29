# <img src="https://user-images.githubusercontent.com/100933263/193003654-0d5b287e-4f41-4248-ba94-b8b66c055bc3.png" height="40"/> Rush & Code 프로젝트

뷰티상품 판매 서비스 [lush](https://www.lush.co.kr/) 클론하는 프로젝트  
<img width="350" alt="러쉬앤코드" src="https://user-images.githubusercontent.com/100933263/193005790-42f0852b-be8f-4e37-990a-6fff7530abf4.jpg">

## Introduction

- 개발 기간 | 2022-09-01 ~ 2022-09-08
- 1차 팀프로젝트로 진행했던 'rush & code'의 모든 컴포넌트를 재구현하기
  - 구현한 페이지
    - 1 . Signup Page
    - 2 . Login Page
    - 3 . home Page
    - 4 . product list Page
    - 5 . product detail Page
    
  ## 1. Signup Page
  ![회원가입](https://user-images.githubusercontent.com/100933263/193027929-aeb4593a-4576-4ebb-ad32-d26cba36bb73.gif)

  #### 1) 회원가입 페이지 레이아웃
    - 실제 lush 회원가입 페이지 참고하여 디자인  

  #### 2) 회원가입 validation 유효성 검사
     |Check point|Validation List|Message|Message color|Input border|
     |------|---|---|---|---|
     |아이디|4글자 미만|최소 4자 이상 입력해주세요.|Black|Red|
     |아이디|정규식 조건이 부합하지 않음|영어와 숫자로만 입력해주세요.|Black|Red|
     |아이디|4글자 이상|사용 가능한 아이디입니다.|Green|Black|
     |비밀번호|7글자 미만|최소 7자 이상 입력해주세요.|Black|Red|
     |비밀번호|정규식 조건이 부합하지 않음|사용불가! 영문 대/소문자,숫자,특수문자 중 2가지 이상 조합하세요.|Black|Red|
     |비밀번호|7글자 이상 + 특수문자 조건 부합|안전한 비밀번호입니다.|Green|Black|
     |비밀번호 확인|비밀번호와 불일치|비밀번호가 다릅니다.|Black|Red|
     |이름|1글자 이상|(메세지 없음)||Black|
     |모든 체크포인트|위 모든 저건에 부합하지 않고 '회원가입'버튼 클릭|필수항목입니다.|Red|Red|
    
  #### 2) ID, PW 정규식 사용
    - 정규식을 사용을 사용하여 아래의 조건에 맞으면 회원가입 성공.
      - ID 정규식 : 영어나 숫자만 가능한 형식  
        ```/^[a-z|A-Z|0-9|]+$/;```  
      - PW 조건 : 영문 + 특수문자 or 영문 + 특수문자 +숫자 가 들어가면 isSafe.   
        ```const num = /[0-9]/g;```  
        ```const eng = /[a-z]/gi;```  
        ```const spe = /[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi;```  
        ```const isSafe =(eng.test(pw) && spe.test(pw)) || (eng.test(pw) && spe.test(pw) && num.test(pw));```  
    
  #### 3) 회원가입 성공시 알럿창 띄우고 로그인페이지로 이동
    
    <br />
    
  ## 2. Login Page
  ![로그인](https://user-images.githubusercontent.com/100933263/193035865-90994740-aa1a-4dc0-bb6b-9cac0da6e135.gif)

  #### 1) 로그인 페이지 레이아웃
    - 실제 lush 로그인 페이지 참고하여 디자인  
    
  #### 2) ID, PW validation
    - 정규식을 사용을 사용하여 아래의 조건에 맞으면 버튼 활성화 되도록 하기.
      - ID 정규식 : 영어나 숫자만 가능한 형식  
        ```/^[a-z|A-Z|0-9|]+$/;```  
      - PW 조건 : 영문 + 특수문자 or 영문 + 특수문자 +숫자 가 들어가면 isSafe.   
        ```const num = /[0-9]/g;```  
        ```const eng = /[a-z]/gi;```  
        ```const spe = /[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi;```  
        ```const isSafe =(eng.test(pw) && spe.test(pw)) || (eng.test(pw) && spe.test(pw) && num.test(pw));```  
    
  #### 3) ID, PW 입력 시 로그인 버튼 활성화 기능
  <img src="https://user-images.githubusercontent.com/100933263/193039099-c08f4cbd-65cb-4699-a4c9-58dcd5af98a0.jpeg" height="300"/>  

    - onChange 이벤트 시, ID와 PW를 빈string('')으로 state를 만들고 input창에 입력값을 setState로 바꿔주기.
    - id, pw 에 조건이 맞으면 버튼이 활성화. (비활성화:그레이 -> 활성화:블랙)
    - 버튼 클릭 시, home 페이지로 이동.
    
    <br />
    
  ## 2. Home Page
  ![홈](https://user-images.githubusercontent.com/100933263/193045187-22325236-f133-4f79-8147-2fe69122b6b4.gif)

  #### 1) 홈 페이지 레이아웃
    - 실제 lush 홈 페이지 참고하여 디자인  
  
  #### 2) MainBanner
    - 메인베너 정보 Mock data 만들고, fetch하여 data를 setState로 배열에 담기.
    - React-Slick 라이브러리를 사용하여 Carousel 구현.
  
  #### 3) BestReviewBanner
    - 상품 정보가 있는 Mock data를, fetch하여 data를 setState로 배열에 담기.
    - React-Slick 라이브러리를 사용하여 Carousel 구현.
    - 상품리뷰의 별이 ★★★★★인 
