# javascript-oncall-6

**점심 메뉴 추천**

## 구현 과정

**목표** : 한 주의 점심 메뉴를 추천해 주는 서비스 구현하기

**세부 목표**

- 기능 먼저 구현 다 해놓기
- TDD 기반으로 코드 구현하기
- MVC 패턴 이용하기 (관심사를 분리하는 것)
- 함수(메소드) 길이 10라인 안넘어가게 작성하기

### 큰 프로세스

- constant에서 음식 카테고리 리스트 관리
- 해당 주 음식 카테고리들 모델로 만들어서 관리 {category:[음식들,음식들~~]}
- 처음에 실행과 동시에 카테고리 선정
- object.key들만 배열 돌려서 나온 것 대로
- 랜덤으로 뽑는다. 음식 카테고리 뽑아서 배열로 넣기 만약 같은 카테고리는 2개까지만 가능

- 코치 이름 받기
- 코치들로 만들기
- 코치 별 못먹는 음식 기록해놓기 (못먹는 음식 배열, 주차별 배열)

- 해당 음식 카테고리 모델로 for문 돌림 (월요일부터~)
- for문 안에서 또 코치들로 for문 돌림? -> 첫번째 코치 못먹는 음식배열 비교해서 없으면 -> 주차별 배열에 넣기

-

#### 기능

- 구현할 목록
- 입력

  - 코치 이름 입력
  - 코치 별 못먹는 음식

- 출력
  - 메뉴 추천 결과 멘트
  - 월~금 구분표
  - 카테고리 출력
  - 코치별 추천 음식

**model**

- [ ]

**controller**

- [ ]

**view**

- [ ]

**기타**

- [ ]
