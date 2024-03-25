document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector(".close-btn");

  hamburgerMenu.addEventListener("click", function () {
    sidebar.classList.toggle("open");
  });

  closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("open");
  });
});
