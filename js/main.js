const elems = {
  headerContainer: null,
};

document.addEventListener("DOMContentLoaded", () => {
  elems.headerContainer = document.querySelector("#header__container");
});

window.addEventListener("scroll", () => {
  const posY = window.pageYOffset;

  if (posY > 0) {
    checkAndToggleSelector(elems.headerContainer, "scrolled", "add");
  } else {
    checkAndToggleSelector(elems.headerContainer, "scrolled", "remove");
  }
});

function checkAndToggleSelector(elem, selector = "scrolled", action = "add") {
  const isExist = elem.classList.contains(selector);
  if (!isExist && action === "add") {
    elem.classList.add(selector);
  } else if (isExist && action === "remove") {
    elem.classList.remove(selector);
  }
}
