document.addEventListener("DOMContentLoaded", () => {
  const popup = document.querySelector(".popup");
  const overlay = document.querySelector(".overlay");
  const closeButton = document.querySelector(".close");
  const sendButton = document.querySelector(".send");

  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".burger_menu");
  const closeBtn = document.querySelector(".close_menu__burger");

  function openPopup() {
    overlay.classList.add("overlay_active");
    popup.classList.add("popup_active");
  }

  function closePopup() {
    overlay.classList.remove("overlay_active");
    popup.classList.remove("popup_active");
  }

  setTimeout(openPopup, 5000);

  closeButton.addEventListener("click", closePopup);

  overlay.addEventListener("click", closePopup);

  sendButton.addEventListener("click", (event) => {
    event.preventDefault();
    closePopup();
    setTimeout(() => {
      alert("Спасибо за обратную связь!");
    }, 300);
  });
  burger.addEventListener("click", () => {
    menu.classList.add("burger_menu__active");
  });
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("burger_menu__active");
  });
});










