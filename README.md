# <img src="https://user-images.githubusercontent.com/100933263/193003654-0d5b287e-4f41-4248-ba94-b8b66c055bc3.png" height="40"/> Rush & Code 프로젝트

뷰티상품 판매 서비스 [lush](https://www.lush.co.kr/) 클론하는 프로젝트  
<img width="350" alt="러쉬앤코드" src="https://user-images.githubusercontent.com/100933263/193005790-42f0852b-be8f-4e37-990a-6fff7530abf4.jpg">

## Introduction

- 1차 팀프로젝트로 진행했던 'rush & code'를 다른 팀원들의 구현부분 컴포넌트도 구현해보기.
  - 구현한 부분
    - 1 . Signup Page
    - 2 . Login Page
    - 3 . home Page
    - 4 . product list Page
    - 5 . product detail Page
    - 6 . nav component
    - 7 . 반응형 구현
    
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
    
  ## 3. Home Page
  ![홈](https://user-images.githubusercontent.com/100933263/193045187-22325236-f133-4f79-8147-2fe69122b6b4.gif)

  #### 1) 홈 페이지 레이아웃
    - 실제 lush 홈 페이지 참고하여 디자인  
  
  #### 2) MainBanner
  <img width="500" alt="메인베너" src="https://user-images.githubusercontent.com/100933263/193050173-6c0cc3f7-0035-4662-83bd-4e24b0055ca1.png" >

    - 메인베너 정보 Mock data 만들고, fetch하여 data를 setState로 배열에 담기.
    - React-Slick 라이브러리를 사용하여 Carousel 구현.
  
  #### 3) BestReviewBanner
  <img width="500" alt="베스트 리뷰 베너" src="https://user-images.githubusercontent.com/100933263/193051027-188ea2a8-47b2-4b6f-9d88-47fc3eeed1ab.png">

    - 상품 정보가 있는 Mock data를, fetch하여 data를 setState로 배열에 담기.
    - React-Slick 라이브러리를 사용하여 Carousel 구현.
    - 상품리뷰의 별이 ★★★★★인 상품으로 필터링하고, 필터링된 상품을 mapping하여 보여주기.

  #### 4) BestReviewBanner의 상품 별 좋아요 버튼 구현
  <img width="300" src="https://user-images.githubusercontent.com/100933263/193052364-5bb9338f-c3c8-4d04-9002-7bc1ee6fd276.png" />  
  
    - like의 state를 false로 하고 onClick 이벤트 시(♡ 아이콘 클릭), setState로 반대 값으로 바꿔주기.
    - state가 바뀌면 색상과 아이콘 이미지 변경 (false:검정색 빈하트 -> true: 빨강색 꽉찬하트)

  #### 5) BestReviewBanner의 상품 별 구매자 이름
  <img width="57" alt="이름" src="https://user-images.githubusercontent.com/100933263/193056009-85636c95-531c-4a8a-a1a6-e098e078b2e2.png">

    - 정규식을 사용을 사용하여 이름의 중간 글자를 *로 변경하여 보여주기.   
      ```.replace(/(?<=.{1})./, '*');```  
        
  #### 6) BestReviewBanner의 리뷰 글
  <img width="300" alt="일부 리뷰보여주기" src="https://user-images.githubusercontent.com/100933263/193268841-4c6ef275-ef8c-4b76-9304-be0c48b36f47.png">

    - 리뷰 일부분만 보여주기: substr 함수를 사용하여 44개 글자와 '...'를 보여주기.  
        
  #### 7) BestProductBanner
  <img width="500" alt="베스트 상품 베너" src="https://user-images.githubusercontent.com/100933263/193055475-35ebbf80-84af-436c-93cc-a24a402629cb.png">

    - 상품 정보가 있는 Mock data를, fetch하여 data를 setState로 배열에 담기.
    - React-Slick 라이브러리를 사용하여 Carousel 구현.
    - 상품리뷰의 갯수가 2개 이상인 상품으로 필터링하고, 필터링된 상품을 mapping하여 보여주기.

  #### 8) BestProductBanner 상품 별 가격
  <img width="97" alt="가격" src="https://user-images.githubusercontent.com/100933263/193056265-697a7031-ff30-47e3-9cef-30d9a99ed884.png">

    - 정규식을 사용을 사용하여 가격의 천단위 콤마 추가하여 보여주기.   
      ```.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')```  
      
    <br />
    
  ## 4. product list Page
  ![상품 리스트](https://user-images.githubusercontent.com/100933263/193088901-99541f59-32ed-46e4-8550-15349a8a6a27.gif)

  #### 1) 상품 리스트 페이지 레이아웃
    - 실제 lush nav 상품 리스트 페이지를 참고하여 디자인  
    
  #### 2) 상품 리스트 top banner
  <img width="500" alt="상품리스트-메인베너" src="https://user-images.githubusercontent.com/100933263/193091015-29faee90-f789-4b89-9828-b96c8cf6e7b9.gif">

    - url의 query에서 mainCategory가 카테고리와 같은 것으로 필터링하고, 필터링된 카테고리 데이터를 mapping하여 보여주기.
    - url의 query에서 subCategory가 null이면 mainCategory 정보를 보여주고, null이 아니면 subCategory 정보 보여주기.

  #### 3) 상품 리스트 카테고리
    - 카테고리에서 전체 상품의 수량 표기하기. 
    - 해당 카테고리 클릭 시 url을 변경하여 이동하기. 

  #### 4) 상품 리스트 필터링하기
  <img width="150" alt="상품리스트 -필터박스" src="https://user-images.githubusercontent.com/100933263/193094215-3e56a6e1-857d-4553-8079-e956bc303939.png">

    - 필터 박스 클릭 시 필터박스 열리고, 해당 필터 누르거나 필터박스를 다시 누르면 필터박스 닫기.
    - 추천순: url(&sort=추천순)으로 변경하여 이동하기.
    - 낮은 가격순: url(&sort=낮은 가격순)으로 변경하여 이동하기.
    - 높은 가격순: url(&sort=높은 가격순)으로 변경하여 이동하기.
    - 리뷰많은 순: url(&sort=리뷰많은 순)으로 변경하여 이동하기.

  #### 5) 기본 상품 리스트 보여주기 (ex. 배쓰, 샤워 등) 
  <img width="500" alt="기본리스트보여주기-URL" src="https://user-images.githubusercontent.com/100933263/193185972-cecb7a58-977c-4054-a766-8a14641c9a60.png">

    - ① URL에서 mainCategory가 상품 mockdata에서 가져온 product_main_name과 같은 것으로 필터링하기.
    - ② URL에서subCategory가 상품 mockdata에서 가져온 product_sub_name과 같은 것으로 필터링하기.
    - URL에서subCategory가 null이면 ①을 null이 아니면 ②를 mapping하여 보여주기!

  #### 6) 전체 상품 리스트 보여주기 (ex. 전체상품, _best) 
    - ③ 상품 mockdata에서 가져온 리뷰의 수가 2개 이상 되는 것으로 필터링하기.
    - URL에서subCategory가 null이면 기본 상품리스트를 null이 아니면 ③을 mapping하여 보여주기!
    
  #### 7) 비건 상품 리스트 보여주기 (ex. 비건) 
    - ④ 상품 mockdata에서 가져온 vegan이 true인 것으로 필터링하기.
    - ⑤ URL에서subCategory가 상품 mockdata에서 가져온 product_main_name과 같은 것이고 vegan이 true인 것으로 필터링하기.
    - URL에서subCategory가 null이면 ④를 null이 아니면 ⑤를 mapping하여 보여주기!
    
  #### 8) 상품 리스트 정렬기준
    - 추천순: URL에서 sort가 추천순이면, 이름순(가나다)으로 정렬.
    - 낮은 가격순: URL에서 sort가 낮은 가격순이면, 가격이 낮은 순으로 정렬.
    - 높은 가격순: URL에서 sort가 높은 가격순이면, 가격이 높은 순으로 정렬.
    - 리뷰많은 순: URL에서 sort가 리뷰많은 순이면, 리뷰가 많은 순으로 정렬.
    
  #### 9) 페이지당 표시할 게시물 수
  <img width="278" alt="상품리스트-최소게시물수" src="https://user-images.githubusercontent.com/100933263/193182675-d2fb6c31-b09f-4277-939b-eea273c6b05f.png">

    - 최소 표시할 게시물 수를 state로 8로 지정하여 기본 값으로 보여주고 해당 숫자를 클릭하면 setState로 수량을 변경 할 수 있도록 함.  
    
  #### 10) 페이지네이션
  <img width="216" alt="상품리스트-페이지네이션버튼" src="https://user-images.githubusercontent.com/100933263/193183280-597fc465-cecc-47fc-ba5a-123b8ee97e02.png">
  
    - 페이지네이션 버튼
      - 좌우 이동 버튼
        - 좌 버튼: 페이지가 1이면 좌측 버튼 disabled.
        - 우 버튼: 페이지가 (전체상품 수에서 최소 페이지당 표시할 게시물 수를 나누기한 수)이면 우측 버튼 disabled.
      - 페이지 버튼
        - 전체상품 수에서 최소 페이지당 표시할 게시물 수를 나누기. (ex. 전체상품수(24) ➗ 표시할 게시물 수(8))
        - fill()로 배열의 각자리를 채우기. fill 인자가 없으므로 undefined로 할당됨. (ex. [ undefined, undefined, undefined ])
        - map()으로 각자리 index에 해당하는 값 할당하기. (ex. [ 1, 2, 3 ])
    
    <br />
    
  ## 5. product detail Page
  ![상품 디테일](https://user-images.githubusercontent.com/100933263/193070179-aef35950-40fa-48e1-b4e2-2e703cf199de.gif)

  #### 1) 상품 디테일 페이지 레이아웃
    - 실제 lush nav 상품 디테일 페이지를 참고하여 디자인  
    
  #### 2) 해당하는 상품으로 보여주기 
    - 상품 정보가 있는 Mock data를, fetch하여 data를 setState로 배열에 담기.
    - useLocation().pathname으로 url의 정보를 가져와서 split를 사용하여 /(슬래시)를 기준으로 뒤의 정보 가져오기.
    - 상품 아이디가 '/' 뒤의 숫자와 같은 것으로 필터링하고, 필터링된 상품을 mapping하여 보여주기.
    
  #### 3) 상품 디테일 왼쪽의 상품이미지
    - 서브이미지 클릭 시 메인 이미지가 해당 이미지로 바뀌도록 구현.
  
  #### 4) 상품 디테일 오른쪽의 상품정보
    - 후기 보기 클릭 시, 제품후기가 보이고 해당 위치로 이동.  
        <br />
    <img width="250" alt="상품 디테일 좋아요-비활성화,활성할" src="https://user-images.githubusercontent.com/100933263/193078479-8cb67b04-a467-4a74-9698-5cbe6531b995.png">

    - like의 state를 false로 하고 onClick 이벤트 시(♡ 아이콘 클릭), setState로 반대 값으로 바꿔주기.
    - state가 바뀌면 아이콘 이미지 변경 (false: 빈하트 -> true: 꽉찬하트)  
        <br />
     <img width="138" alt="가격2" src="https://user-images.githubusercontent.com/100933263/193079731-df4dcef6-5c58-4ccb-b634-5031862f7044.png">

    - 정규식을 사용을 사용하여 가격의 천단위 콤마 추가하여 보여주기.   
      ```.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')```  
    
  #### 5) 상품 디테일 상세정보 카테고리
  <img width="500" alt="상품 리스트 카테고리" src="https://user-images.githubusercontent.com/100933263/193080985-3a1d8bec-d738-4b51-9632-3ba487a3415b.png">

    - 해당 카테고리 클릭 시 해당 카테고리 글자색과 아래 밑줄색상 검정으로 변경.
    - 해당 카테고리 클릭 시 해당하는 정보를 아래에 보여주기.
    
  #### 6) 상품 디테일 상세정보 카테고리 내용
  <img width="300" alt="제품정보" src="https://user-images.githubusercontent.com/100933263/193082961-70fa0ec5-7e83-4635-bcdb-96a7d59760a7.png">

    - 제품정보 : 해당 상품 이미지와 정보 보여주기  
    <br />
    <img width="300" alt="제품후기" src="https://user-images.githubusercontent.com/100933263/193083168-76af7921-1152-48f5-afbf-ef1a34c3c50e.png">

    - 제품후기 : 해당 상품의 리뷰를 mapping하여 보여주기.
      
    <br />
    
  ## 6. Nav Component
  ![nav](https://user-images.githubusercontent.com/100933263/193060019-b437a73c-62e6-45ff-a031-61091398e345.gif)

  #### 1) nav 레이아웃
    - 실제 lush nav 부분을 참고하여 디자인  
    
  #### 2) nav 😀아이콘 클릭 시 메뉴 박스 생성
  <img width="200" alt="nav-프로필모달" src="https://user-images.githubusercontent.com/100933263/193064678-2196f588-aa25-40c4-a382-89782b0642b7.png">

    - 메뉴박스에서 로그인 클릭 시 로그인 페이지로 이동.
    - 메뉴박스에서 회원가입 클릭 시 회원가입 페이지로 이동.
        
  #### 3) nav 제품 클릭 시 메뉴 박스 생성
  <img width="600" alt="nav-상품모달" src="https://user-images.githubusercontent.com/100933263/193064759-a42ce7f4-645f-4eaa-b034-d38ec6d14684.png">

    - 상품 카테고리 정보가 있는 Mock data를, fetch하여 data를 setState로 배열에 담기.
    - 상품 카테고리를 mapping하고, 상품카테고리 mapping한 곳 안에서 상품 서브카테고리를 mapping하여 보여주기.
    - 상품 카테고리 또는 상품 서브카테고리를 클릭 시 해당 상품리스트 페이지로 이동.
    
    <br />
    
  ## 7. 반응형 구현
  ![반응형](https://user-images.githubusercontent.com/100933263/193068002-3dbf72c6-f0a8-4a6e-976b-efe1985a5d36.jpg)

    - media-query로 desktop,tablet,mobile에 맞게 반응형 구현

## Technlogies

 <div> 
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> 
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
<img src="https://img.shields.io/badge/javascript-ffc700?style=for-the-badge&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
</div> 
<br>

## Contact

- ssh30510044@gmail.com, [기술블로그](https://sophie0527.tistory.com/), [깃허브](https://github.com/Sophie0527)
