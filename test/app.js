const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const controlLinks = document.querySelectorAll(".thumb a");

let i = 0,
  j = 1,
  intervalId;

const intervalFn = () => {
  intervalId = setInterval(() => {
    carousel.style.rotate = `-${++i * 90}deg`;

    document.querySelector(".slide.active").classList.remove("active");
    document.querySelector(".slide.active").style.display = none;
    const activeSlide = document.querySelector(`.slide:nth-child(${++j})`);
    activeSlide.classList.add("active");
    activeSlide.style.display = none;


    document.querySelector("a.active").classList.remove("active");
    document.querySelector("a.active").style.display = none;

    const activeLink = document.querySelector(`.thumb a:nth-child(${j})`);
    activeLink.classList.add("active");
    activeLink.classList.remove("invi");


    j === 4 && (j = 0);
  }, 40000000);
};

intervalFn();

controlLinks.forEach((control) => {
  control.addEventListener("click", () => {
    clearInterval(intervalId);
    carousel.style.rotate = `-${
      (i - j + Number(control.dataset.index)) * 90
    }deg`;

    document.querySelector(".slide.active").classList.remove("active");
    document.querySelector(".slide.active").style.display = none;


    const activeSlide = document.querySelector(
      `.slide:nth-child(${control.dataset.index})`
    );
    activeSlide.classList.add("active");
    activeSlide.classList.remove("invi");



    document.querySelector("a.active").classList.remove("active");
    control.classList.add("active");
  });
});

carousel.addEventListener("mouseenter", () => {
  clearInterval(intervalId);
  console.log("Pause");
});

carousel.addEventListener("mouseleave", () => {
  intervalFn();
  console.log("Play");
});