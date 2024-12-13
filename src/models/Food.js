import { Random } from "@woowacourse/mission-utils";
import { DAYS } from "../utils/constant.js";

export class Food {
  #WeekendFood = {};
  #CategoryFood = {};

  constructor(sampleFood) {
    this.initial();
    this.parseFood(sampleFood);
    this.randomRecommendFood(this.#CategoryFood);
  }

  // Getter for #WeekendFood
  getWeekendFood() {
    return this.#WeekendFood;
  }

  // Getter for #CategoryFood
  getCategoryFood() {
    return this.#CategoryFood;
  }

  initial() {
    DAYS.forEach((day) => {
      this.#WeekendFood[day] = "";
    });
  }

  randomRecommendFood(sampleFood) {
    const weekendFoodKeys = Object.keys(this.#WeekendFood);

    for (let i = 0; i < weekendFoodKeys.length; i++) {
      let randomCategory;

      while (true) {
        // 랜덤 카테고리 선택
        randomCategory =
          Object.keys(sampleFood)[Random.pickNumberInRange(1, 5) - 1];

        // 선택된 카테고리의 현재 개수 확인
        const count = Object.values(this.#WeekendFood).filter(
          (category) => category === randomCategory
        ).length;

        // 중복이 2 미만이면 루프 탈출
        if (count < 2) break;
      }

      // 랜덤 카테고리를 WeekendFood에 추가
      this.#WeekendFood[weekendFoodKeys[i]] = randomCategory;
    }
  }

  parseFood(sampleFood) {
    Object.entries(sampleFood).forEach(([category, foods]) => {
      this.#CategoryFood[category] = foods
        .split(",")
        .map((item) => item.trim());
    });
  }
}
