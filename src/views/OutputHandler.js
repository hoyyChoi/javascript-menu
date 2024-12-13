import { Console } from "@woowacourse/mission-utils";
import { Food } from "../models/Food.js";
import { Coach } from "../models/Coach.js";
import { PROMPTS } from "../utils/constant.js";

// Output들을 관리하는 클래스
export class OutputHandler {
  printStart() {
    Console.print(PROMPTS.LAUNCH_MENU_RECOMMEND);
  }

  // 최종 결과 출력

  printResultText() {
    Console.print(PROMPTS.RESULT_MENU);
  }

  /**
   * Description placeholder
   *
   * @param {Coach} coaches
   * @param {Food} food
   */
  printResult(coaches, food) {
    const listtoCoaches = Object.entries(coaches.coachesObejct);
    const listofFoodCategory = Object.values(food.getWeekendFood());
    Console.print("[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]");
    Console.print(
      `[ 카테고리 | ${listofFoodCategory[0]} | ${listofFoodCategory[1]} | ${listofFoodCategory[2]} | ${listofFoodCategory[3]} | ${listofFoodCategory[4]} ]`
    );
    for (const [coachName, object] of listtoCoaches) {
      Console.print(
        `[ ${coachName} | ${object["canFood"][0]} | ${object["canFood"][1]} | ${object["canFood"][2]} | ${object["canFood"][3]} | ${object["canFood"][4]} ] `
      );
    }
  }

  printCompleteMenu() {
    Console.print(PROMPTS.COMPLETE_MENU);
  }
}
