export const SAMPLE = {
  일식: "규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼",
  한식: "김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음",
  중식: "깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채",
  아시안:
    "팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜",
  양식: "라자냐, 그라탱, 뇨끼",
};

export const DAYS = ["월요일", "화요일", "수요일", "목요일", "금요일"];

export const PROMPTS = Object.freeze({
  LAUNCH_MENU_RECOMMEND: "점심 메뉴 추천을 시작합니다.\n",
  COACH_NAME: "코치의 이름을 입력해 주세요. (, 로 구분)\n",
  DONT_MEAL: (input) => `${input}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
  RESULT_MENU: "\n메뉴 추천 결과입니다.",
  COMPLETE_MENU: "\n추천을 완료했습니다.",
});

export const ERROR_MESSAGES = Object.freeze({
  NOT_VALID: "유효하지 않은 입력 값입니다. 다시 입력해 주세요.",
  REQUIRED: "값이 비어 있습니다. 입력해 주세요.",
  DUPLICATE: "중복된 값이 있습니다.",
  NUMBER_ONLY: "숫자만 입력 가능합니다.",
  INVALID_FORMAT: "입력 형식이 올바르지 않습니다.",
  OUT_OF_RANGE: "입력값이 허용 범위를 벗어났습니다.",
  TOO_SHORT: "입력값이 너무 짧습니다.",
  TOO_LONG: "입력값이 너무 깁니다.",
  INVALID_SELECTION: "잘못된 선택입니다.",
  SERVER_ERROR: "서버와의 통신 중 오류가 발생했습니다.",
  UNAUTHORIZED: "권한이 없습니다.",
  FORBIDDEN: "요청이 거부되었습니다.",
  NOT_FOUND: "요청한 리소스를 찾을 수 없습니다.",
  TIMEOUT: "요청 시간이 초과되었습니다.",
  INVALID_CREDENTIALS: "아이디 또는 비밀번호가 일치하지 않습니다.",
  DUPLICATE_REQUEST: "이미 처리 중인 요청입니다.",
});
