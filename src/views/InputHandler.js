import { Console } from "@woowacourse/mission-utils";
import { PROMPTS } from "../utils/constant.js";
import { validFood } from "../utils/vaild/validFood.js";
import { coachNameController } from "../controllers/coachNameController.js";

export class InputHandler {
  async #handleInput(prompt, controllerFn) {
    while (true) {
      const result = await Console.readLineAsync(prompt);
      try {
        const returnValue = controllerFn(result); // 반환값 받음
        // return returnValue;
        if (returnValue !== undefined) {
          return returnValue;
        }
        break;
      } catch (error) {
        Console.print(error.message); // 에러 메시지 출력
      }
    }
  }

  coachNameInput() {
    return this.#handleInput(PROMPTS.COACH_NAME, coachNameController);
  }
  coachDontFoodInput(coachName) {
    return this.#handleInput(PROMPTS.DONT_MEAL(coachName), validFood);
  }
}
