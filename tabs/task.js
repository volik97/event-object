let menu = document.querySelector("div.tab__navigation");
let tabList = Array.from(document.querySelectorAll("div.tab"));
let contentList = Array.from(document.querySelectorAll("div.tab__content"));

function activeNav(e) {
  for (let item of tabList) {
    item.onclick = function () {
      checkActive();
      itemIndex = tabList.indexOf(item);
      item.classList.add("tab_active");
      contentList[itemIndex].classList.add("tab__content_active");
      return false;
    };
  }
}

function checkActive() {
  for (let item of tabList) {
    if (item.classList.contains("tab_active")) {
      item.classList.remove("tab_active");
    }
  }

  for (let item of contentList) {
    if (item.classList.contains("tab__content_active")) {
      item.classList.remove("tab__content_active");
    }
  }
}

menu.addEventListener("click", activeNav);
