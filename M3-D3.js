function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

window.onload = function () {
  let loadImgBtn = document.querySelector(".btn.btn-primary");
  let loadImg2Btn = document.querySelector(".btn.btn-secondary");
  let cards = document.querySelectorAll(".album .card");
  function searchImg(keyword, cardsNbr) {
    fetch(`http://www.splashbase.co/api/v1/images/search?query=${keyword}`)
      .then(handleErrors)
      .then((response) => response.json())
      .then((body) => addImg(body.images, cardsNbr))
      .catch((error) => console.log(error));
  }
  function addImg(img, cardsNbr) {
    console.log(img[0].url);
    cards[cardsNbr].firstElementChild.src = img[0].url;
  }
  loadImgBtn.addEventListener("click", function () {
    searchImg("burger", 0);
  });
  loadImg2Btn.addEventListener("click", function () {
    searchImg("coke", 1);
  });
};
