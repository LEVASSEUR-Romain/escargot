import controleSnail from "../../js/controleur/controleSnail";
const Constant = {
  widthCanvas: 500,
  widthSnail: 34,
  ranking: 0,
  widthCanvas: 500,
  speedMinAlea: 2,
  speedMaxAlea: 7,
  animationTotal: 8,
};

expect.extend({
  toBeWithinRange(received, xinitial) {
    const min = xinitial + Constant.speedMinAlea;
    const max = xinitial + Constant.speedMaxAlea;
    const pass = received.x >= min && received.x <= max;
    if (pass) {
      return {
        message: () =>
          `s'attend à ce que ${received.x} ne soit pas dans l'intervalle ${min} - ${max}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `s'attend à ce que ${received.x} soit dans l'intervalle ${min} - ${max}`,
        pass: false,
      };
    }
  },
});

test("controleSnail test", () => {
  const snails = [
    { id: 1, x: 75, animation: 1 },
    { id: 2, x: 70, animation: 1 },
    { id: 3, x: 56, animation: 3 },
    { id: 4, x: 68, animation: 2 },
    { id: 5, x: 81, animation: 8 },
  ];
  const finich = [75, 70, 56, 68, 81];
  const finichAnimation = [2, 2, 4, 3, 1];
  const toTest = controleSnail(snails, Constant);
  for (let i = 0; i < snails.length; i++) {
    expect(toTest[i]).toBeWithinRange(finich[i]);
    expect(toTest[i].animation).toEqual(finichAnimation[i]);
  }
});
