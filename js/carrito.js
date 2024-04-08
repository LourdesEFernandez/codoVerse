document.addEventListener("DOMContentLoaded", function () {
  const shoppingCartIcon = document.querySelector(".fa-shopping-cart");
  const shoppingCartSidebar = document.querySelector(".shopping-cart-sidebar");
  const closeBtnShopping = document.querySelector(".close-btn-shopping-cart");
  //   const headerNavBar = document.querySelector("#header");
  const mainContent = document.querySelector(".main");
  const footer = document.querySelector("#footer");
  const increaseButtons = document.querySelectorAll(".increase-btn");
  const decreaseButtons = document.querySelectorAll(".decrease-btn");

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

  //Incrementa el numero de la cantidad
  increaseButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const quantityElement =
        button.parentElement.querySelector(".quantity-number");
      let quantity = parseInt(quantityElement.textContent);
      quantity++;
      quantityElement.textContent = quantity;
    });
  });
  //Decrementa el numero de la cantidad
  decreaseButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const quantityElement =
        button.parentElement.querySelector(".quantity-number");
      let quantity = parseInt(quantityElement.textContent);
      if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;
      }
    });
  });
});
