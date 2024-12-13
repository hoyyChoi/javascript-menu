import { Coach } from "../models/Coach.js";
import { Food } from "../models/Food.js";
// import { Randoms } from "@woowacourse/mission-utils";

/**
 * Description placeholder
 *
 * @param {Coach} coaches
 * @param {Food} food
 */
export const processController = (coaches, food) => {
  //coaches에서 cant를 고려해서, canFood를 채워야한다.
  // food의 객체의 형태는 두가지 {월: 양식 ~~~}  // {양식 : [음식들]}
  // 첫번째 객체를 바탕으로 반복문 돌린다.
  // 그리고 이중 for문으로 coaches의 cantfood를 채워넣는다.

  for (const category of Object.values(food.getWeekendFood())) {
    const menus = food.getCategoryFood()[category];

    Object.keys(coaches.coachesObejct).forEach((name) => {
      const menu = getValidMenu(
        menus,
        coaches.coachesObejct[name]["cantFood"],
        coaches.coachesObejct[name]["canFood"]
      );
      coaches.coachesObejct[name]["canFood"].push(menu);
    });
  }
};

const getValidMenu = (menus, cantFood, canFood) => {
  let num = 0;
  while (true) {
    console.log(num++);
    const menu = getRandomElementFromArray(menus);
    // Debugging: Indicate why the menu was skipped
    console.log(menu);
    console.log(cantFood);
    if (cantFood.includes(menu)) {
      console.log(`Menu "${menu}" skipped: Found in cantFood.`);
    }
    if (canFood.includes(menu)) {
      console.log(`Menu "${menu}" skipped: Found in canFood.`);
    }
    if (!cantFood.includes(menu) && !canFood.includes(menu)) return menu;
  }
};

function getRandomElementFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
