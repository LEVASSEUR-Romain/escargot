/**
 *
 * @param {Function} callback
 * @returns callback whith params image
 */

const loaderStratSnail = (callback) => {
  let imageSnail = new Image();
  imageSnail.src = "./img/snail.png";
  imageSnail.addEventListener(
    "load",
    function () {
      callback(imageSnail);
    },
    false
  );
};
export default loaderStratSnail;
