document.addEventListener("DOMContentLoaded", function () {
  const shoppingCartIcon = document.querySelector(".fa-shopping-cart");
  const shoppingCartSidebar = document.querySelector(".shopping-cart-sidebar");
  const closeBtnShopping = document.querySelector(".close-btn-shopping-cart");
  //   const headerNavBar = document.querySelector("#header");
  const mainContent = document.querySelector(".main");
  const footer = document.querySelector("#footer");

  // Abrir la solapa del carrito al hacer clic en el icono del carrito
  shoppingCartIcon.addEventListener("click", function () {
    shoppingCartSidebar.classList.add("open");
    // Agregamos o quitamos la clase 'blur'
    // headerNavBar.classList.toggle("blur");
    mainContent.classList.toggle("blur");
    footer.classList.toggle("blur");
  });
  // Cerrar la solapa del carrito al hacer clic en el botón de cierre
  closeBtnShopping.addEventListener("click", function () {
    shoppingCartSidebar.classList.remove("open");
    // Agregamos o quitamos la clase 'blur'
    // headerNavBar.classList.toggle("blur");
    mainContent.classList.toggle("blur");
    footer.classList.toggle("blur");
  });
});
