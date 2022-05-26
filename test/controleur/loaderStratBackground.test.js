import loaderStratBackground from "../../js/controleur/loaderStratBackground";

test("loaderStratBackground loader image", () => {
  loaderStratBackground(functionTest);
  function functionTest(image) {
    expect(image.src.match(/.*[herbe].png/)).toBeTruthy();
  }
});
