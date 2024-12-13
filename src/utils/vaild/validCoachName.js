import ErrorHandler from "../ErrorHandler.js";
import { ERROR_MESSAGES } from "../constant.js";

export const validCoachName = (input) => {
  // 기본 유효성 검사 (쉼표로 구분된 값인지 확인)
  if (!input.includes(",")) {
    ErrorHandler.throwError(ERROR_MESSAGES.NOT_VALID);
  }

  const people = input.split(",");
  if (people.some((person) => person.trim() === "")) {
    ErrorHandler.throwError(ERROR_MESSAGES.NOT_VALID);
  }

  if (new Set(people).size !== people.length) {
    ErrorHandler.throwError(ERROR_MESSAGES.DUPLICATE);
  }

  if (people.length < 2 || people.length > 5) {
    ErrorHandler.throwError(ERROR_MESSAGES.NOT_VALID);
  }

  people.forEach((name) => {
    if (name.length < 2 || name.length > 4)
      ErrorHandler.throwError(ERROR_MESSAGES.NOT_VALID);
  });
  return people;
};
