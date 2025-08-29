const elems = {
  headerContainer: null,
};
let props = {
  isMobile: false,
  swiper: null,
};

document.addEventListener("DOMContentLoaded", () => {
  elems.headerContainer = document.querySelector("#header__container");
  initializeSwipper();

  const removeMQEvent = MediaQuery.matches(767, (isWideScreen) => {
    props.isMobile = !isWideScreen;

    if (props.isMobile) {
      if (props.swiper != null) {
        props.swiper.autoplay.pause();
      }
    } else {
      if (props.swiper != null) {
        props.swiper.autoplay.start();
      }
    }
  });
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

function initializeSwipper() {
  const slides = document.querySelectorAll(".swiper-slide");

  const options = {
    effect: "slide",
    speed: 800,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetweenSlides: 0,
    centeredSlides: true,
    initialSlide: 0,
    loop: false,
    loopedSlides: slides.length,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  };

  props.swiper = new Swiper(".swiper", options);
  props.swiper.autoplay.stop();

  for (let i = 0; i < slides.length; i++) {
    const target = slides[i];
    const content = target.querySelector(".presentation__itemDescription");
    const id = `interview${i + 1}`;
    const height = "80vh"; //content.getBoundingClientRect().height;

    target.addEventListener("click", function () {
      if (content.classList.contains("is-open")) {
        content.style.setProperty("--dynamic-height", "1px");
        MicroModal.close(`${id}`);
      } else {
        MicroModal.show(`${id}`);
        content.style.setProperty("--dynamic-height", height);
      }
    });

    content.setAttribute("id", id);

    props.swiper.on("slideChange", () => {
      if (id != null) {
        for (let i = 0; i < slides.length; i++) {
          const content = slides[i].querySelector(
            ".presentation__itemDescription"
          );

          content.style.setProperty("--dynamic-height", "1px");

          MicroModal.close(`${id}`);
        }
      }
    });
  }
  MicroModal.init();
}
