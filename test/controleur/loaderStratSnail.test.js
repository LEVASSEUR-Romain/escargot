import loaderStratSnail from "../../js/controleur/loaderStratSnail";

test("loaderStratSnail loader image", () => {
  loaderStratSnail(functionTest);
  function functionTest(image) {
    expect(image.src.match(/.*[snail].png/)).toBeTruthy();
  }
});
