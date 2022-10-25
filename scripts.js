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

document.getElementById("price-action").onclick = function () {
  if (document.getElementById("name").value === "") {
    alert("Заполните поле Имя!");
  } else if (document.getElementById("phone").value === "") {
    alert("Заполните поле Телефон!");
  } else if (carInput.value === "") {
    alert("Заполните поле Автомобиль!");
  } else {
    alert("Спасибо за заявку! Мы свяжемся с Вами в ближайшее время.");
  }
};
