const open = document.querySelector(".open");
const close = document.querySelector(".close");
const container = document.getElementById("outer-container");

open.addEventListener("click", () => {
    container.classList.add("rotate")
});

close.addEventListener("click", () => {
    container.classList.remove("rotate")
});