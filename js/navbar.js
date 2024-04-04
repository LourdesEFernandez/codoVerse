document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector(".close-btn");
  const mainContent = document.querySelector(".main");
  const footer = document.querySelector("#footer");

  hamburgerMenu.addEventListener("click", function () {
    sidebar.classList.toggle("open");
    mainContent.classList.toggle("blur"); // Agregamos o quitamos la clase 'blur'
    footer.classList.toggle("blur");
  });

  closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("open");
    mainContent.classList.remove("blur"); // Quitamos la clase 'blur' al cerrar el menú
    footer.classList.remove("blur"); // Quitamos la clase 'blur' al cerrar el menú
  });
});
