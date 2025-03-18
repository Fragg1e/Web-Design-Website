document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.querySelector(".overlay");
    document.querySelector(".menu").addEventListener("click", function () {
        overlay.classList.add("overlay--active");
    });
    document.querySelector(".overlay .close").addEventListener("click", function () {
        overlay.classList.remove("overlay--active");
    });
});
  