// SLIDER PHOTO
window.addEventListener("DOMContentLoaded", function () {
  var sliderImages = document.querySelectorAll(".slider-image");
  var prevButton = document.querySelector(".slider-prev");
  var nextButton = document.querySelector(".slider-next");
  var currentImageIndex = 0;

  function showImage(index) {
    var currentImage = sliderImages[currentImageIndex];
    var nextImage = sliderImages[index];

    currentImage.style.opacity = "0";
    nextImage.style.opacity = "1";

    currentImageIndex = index;
  }

  function showNextImage() {
    var nextImageIndex = (currentImageIndex + 1) % sliderImages.length;
    showImage(nextImageIndex);
  }

  function showPrevImage() {
    var prevImageIndex =
      (currentImageIndex - 1 + sliderImages.length) % sliderImages.length;
    showImage(prevImageIndex);
  }

  nextButton.addEventListener("click", showNextImage);
  prevButton.addEventListener("click", showPrevImage);

  setInterval(showNextImage, 3000);
});


// CART SLIDER
let cartSlider = document.querySelector('.cartSlider');
let cart = document.querySelector('.cart');
let closeButtonCartSlider = document.querySelector('.cartSlider .headingCartSlider i');
cart.onclick = function () {
  cartSlider.style.cssText = "animation: cartSliderOn 0.5s 0s 1; transform: translateX(0%);";
}

closeButtonCartSlider.onclick = function () {
  cartSlider.style.cssText = "animation: cartSliderOff 0.5s 0s 1; transform: translateX(100%);";
}

// POPUP
let popUp = document.querySelector('.popUp');
// let showPopUp = document.querySelector('.showPopUp');
let hiddenPopUp = document.querySelector('.popUp .popUpCard i');

function showPopUp() {
  popUp.style.cssText = `
  animation: popUpOn .5s 0s 1;
  transform: translateY(-60%);
  -webkit-transform: translateY(-60%);
  -moz-transform: translateY(-60%);
  -ms-transform: translateY(-60%);
  -o-transform: translateY(-60%);`;
}

hiddenPopUp.onclick = function() {
  popUp.style.cssText = `
  animation: popUpOff .5s 0s 1;
  transform: translateY(-200%);
  -webkit-transform: translateY(-200%);
  -moz-transform: translateY(-200%);
  -ms-transform: translateY(-200%);
  -o-transform: translateY(-200%);`;
}

// DATA
let componentsView = document.getElementById("components");
let tasks = [];

const getData = async () => {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  tasks = data;
  displayTasks();
};
getData();

const displayTasks = () => {
  componentsView.innerHTML = "";
  tasks.products.forEach((task, i) => {
    componentsView.innerHTML += `
    <div class="card">
      <div class="image-card">
        <img src="${
          task.thumbnail ?? "./assets/img/download.jpg"
        }" class="card-img-top" alt="...">
      </div>
      <div class="card-body">
        <h5 class="card-title">${task.title ?? "استني يا صحبي بيحمل"}</h5>
        <p class="card-text price">${task.price ?? "😍😍😍😍😍😍😍😍😍"}$</p>
        <p class="card-text">${
          task.description ?? "ماتمسكنيش من ايدي انا متوضية امسكني من وسطي😂"
        }</p>
        <button class="btn btn-primary showPopUp" onclick="showPopUp()">Show</button>
      </div>
    </div>
    `;
  });
};





