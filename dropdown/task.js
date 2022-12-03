let menuTitle = document.querySelector("div.dropdown__value");
let menuList = Array.from(document.querySelectorAll("a.dropdown__link"));

function menuClick(e) {
  let menuButton = document.querySelector("ul.dropdown__list");
  menuButton.classList.contains("dropdown__list_active")
    ? menuButton.classList.remove("dropdown__list_active")
    : menuButton.classList.add("dropdown__list_active");
}

menuList.forEach(function (item) {
  item.onclick = function () {
    document.querySelector("div.dropdown__value").textContent =
      item.textContent;
    return false;
  };
  item.addEventListener("click", menuClick);
});

menuTitle.addEventListener("click", menuClick);
