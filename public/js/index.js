const body = document.querySelector("body");
const mode = document.querySelector(".mode");
const work = document.querySelector(".work");

const darkMode = () => {
  if (!body.classList.contains("dark-mode")) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
};

mode.addEventListener("click", darkMode);

document.addEventListener("scroll", (e) => {
  console.log(e);
});
