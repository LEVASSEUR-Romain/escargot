const loaderStratBackground = (callback) => {
  let imageBackground = new Image();
  imageBackground.src = "./img/herbe.png";
  imageBackground.addEventListener("load", function () {
    callback(imageBackground);
  });
};
export default loaderStratBackground;
