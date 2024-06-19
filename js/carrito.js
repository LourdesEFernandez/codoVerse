document.addEventListener("DOMContentLoaded", function () {
  const
    shoppingCartIcon = get(".fa-shopping-cart"),
    shoppingCartIconMenuHamburguesa = get(
    ".menu-options-shopping-cart"),
    sidebar = get(".sidebar"),
    shoppingCartSidebar = get(".shopping-cart-sidebar"),
    closeBtnShopping = get(".close-btn-shopping-cart"),
    logo = get(".logo"),
    menu = get(".menu"),
    search = get(".search-profile-cart"),
    mainContent = get(".main"),
    footer = get("#footer"),
    increaseButtons = get(".increase-btn",1),
    decreaseButtons = get(".decrease-btn",1);

    function addRemoveBlur(element, remove) {
      remove ? element.classList.remove("blur") :
      element.classList.add("blur")
    }
    function addRemoveBlur(element, remove) {
      if (remove){
        element.classList.remove("blur")
      } else{
        element.classList.add("blur")
        element.style.setProperty("transition", "filter 250ms ease")
      }
    }
  // Abrir la solapa del carrito al hacer clic en el icono del carrito
  shoppingCartIcon.addEventListener("click", function () {
    shoppingCartSidebar.classList.add("open");
    // Agregamos o quitamos la clase 'blur'
    addRemoveBlur(logo)
    addRemoveBlur(menu)
    addRemoveBlur(search)
    addRemoveBlur(mainContent)
    addRemoveBlur(footer)
  });

  shoppingCartIconMenuHamburguesa.addEventListener("click", function () {
    shoppingCartSidebar.classList.add("open");
    sidebar.classList.remove("open");
    // Agregamos o quitamos la clase 'blur'
    // headerNavBar.classList.toggle("blur");
    // mainContent.classList.toggle("blur");
    // footer.classList.toggle("blur");
  });

  // Cerrar la solapa del carrito al hacer clic en el botón de cierre
  closeBtnShopping.addEventListener("click", function () {
    shoppingCartSidebar.classList.remove("open");
    // Agregamos o quitamos la clase 'blur'
    addRemoveBlur(logo,1)
    addRemoveBlur(menu,1)
    addRemoveBlur(search,1)
    addRemoveBlur(mainContent,1)
    addRemoveBlur(footer,1)
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
