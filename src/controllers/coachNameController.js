import { Coach } from "../models/Coach.js";
import { validCoachName } from "../utils/vaild/validCoachName.js";

export const coachNameController = (input) => {
  const coachesInput = validCoachName(input);
  const coaches = new Coach(coachesInput);

  return coaches;

  Object.entries(coaches.coachesObejct).forEach(([coachName, object]) => {
    coachDontFoodInput;
  });

  coaches.forEach((coach) => {});
};
