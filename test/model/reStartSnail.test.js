import reStartSnail from "../../js/model/reStartSnail";

test("reStartSnail 3 snail", () => {
  const snail = [
    { id: 1, x: 300, ranking: 0 },
    { id: 2, x: 250, ranking: 0 },
    { id: 3, x: 125, ranking: 0 },
    { id: 4, x: 200, ranking: 0 },
  ];
  const testfinal = [
    { id: 1, x: 0, ranking: 0 },
    { id: 2, x: 0, ranking: 0 },
    { id: 3, x: 0, ranking: 0 },
    { id: 4, x: 0, ranking: 0 },
  ];
  for (let i = 0; i < snail.length; i++) {
    expect(reStartSnail(snail)).toBe();
  }
});
