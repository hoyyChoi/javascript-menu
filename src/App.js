import { processController } from "./controllers/processController.js";
import { Food } from "./models/Food.js";
import { SAMPLE } from "./utils/constant.js";
import { OutputHandler } from "./views/OutputHandler.js";
import { InputHandler } from "./views/inputHandler.js";

export class App {
  constructor() {
    this.input = new InputHandler();
    this.output = new OutputHandler();
    this.food = new Food(SAMPLE);
  }

  async play() {
    this.output.printStart();
    const coaches = await this.input.coachNameInput();
    for (const coachName of Object.keys(coaches.coachesObejct)) {
      const cantFood = await this.input.coachDontFoodInput(coachName);
      coaches.coachesObejct[coachName]["cantFood"] = cantFood;
      coaches.coachesObejct[coachName]["canFood"] = [];
    }

    processController(coaches, this.food);
    this.output.printResultText();
    this.output.printResult(coaches, this.food);
    this.output.printCompleteMenu();
  }
}
