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
    cards[cardsNbr].firstElementChild.classList.toggle("bd-placeholder-img");
    let newImg = document.createElement("img");
    newImg.classList = "card-img-top img-fluid";
    newImg.style.width = "100%";
    newImg.style.height = "225px";
    newImg.src = img[0].url;
    newImg.style.objectFit = "cover";
    cards[cardsNbr].firstElementChild.replaceWith(newImg);
  }
  loadImgBtn.addEventListener("click", function () {
    searchImg("burger", 0);
  });
  loadImg2Btn.addEventListener("click", function () {
    searchImg("tea", 1);
  });

  let btn = document.getElementsByClassName("btn-outline-secondary");
  const editBtn = function () {
    for (let i = 0; i < btn.length; i++) {
      if (i % 2) {
        btn[i].innerText = "Hide";
        btn[i].addEventListener("click", function () {
          hideBtn(btn[i]);
        });
      }
    }
  };
  editBtn();
  function hideBtn(btn) {
    console.log("clk");
    console.log(
      btn.parentElement.parentElement.parentElement.parentElement
        .firstElementChild.src
    );
    btn.parentElement.parentElement.parentElement.parentElement.firstElementChild.src =
      "";
  }
};
