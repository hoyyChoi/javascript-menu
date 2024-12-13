export class Coach {
  coachesObejct = {};
  constructor(coahesInput) {
    this.initialCoachObject(coahesInput);
  }

  initialCoachObject(coahesInput) {
    coahesInput.forEach((coach) => {
      this.coachesObejct[coach] = {};
    });
  }
}
