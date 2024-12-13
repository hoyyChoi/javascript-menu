import ErrorHandler from "../ErrorHandler.js";
import { ERROR_MESSAGES } from "../constant.js";

export const validFood = (input) => {
  // 기본 유효성 검사 (쉼표로 구분된 값인지 확인)
  if (!input || !input.trim()) return [];

  if (!input.includes(",")) {
    ErrorHandler.throwError(ERROR_MESSAGES.NOT_VALID);
  }

  const food = input.split(",");
  if (food.some((person) => person.trim() === "")) {
    ErrorHandler.throwError(ERROR_MESSAGES.NOT_VALID);
  }

  if (new Set(food).size !== food.length) {
    ErrorHandler.throwError(ERROR_MESSAGES.DUPLICATE);
  }

  if (food.length > 2) {
    ErrorHandler.throwError(ERROR_MESSAGES.NOT_VALID);
  }

  return food;
};
