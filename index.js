const progressBar = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const circles = document.querySelectorAll("circle");

let currentActive = 1;

nextBtn.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
});

prevBtn.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
});
