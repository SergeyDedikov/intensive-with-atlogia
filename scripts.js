document.getElementById("main-action").onclick = function () {
  document.getElementById("cars").scrollIntoView({ behavior: "smooth" });
};

const carButtons = document.getElementsByClassName("car-button");
const carInput = document.getElementById("car");

for (let i = 0; i < carButtons.length; i++) {
  let currentCarItem = carButtons[i].parentElement.parentElement;
  let carTitle = currentCarItem.querySelector(".car-item-title").textContent;

  carButtons[i].onclick = function () {
    document.getElementById("price").scrollIntoView({ behavior: "smooth" });
    carInput.value = carTitle;
  };
}
