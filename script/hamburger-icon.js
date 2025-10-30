console.log("Cargando Hamburger Icon");

(function () {
  const main_obj = {
    init: function () {
      this.eventhandlers();
    },
    eventhandlers: function () {
      document.addEventListener("DOMContentLoaded", () => {
        const hamburger = document.querySelector(".hamburger-icon");
        const menu = document.querySelector(".menu-normal");

        hamburger.addEventListener("click", () => {
          menu.classList.toggle("active");
          hamburger.classList.toggle("active"); // 👈 Agregado
        });
      });
    },
  };
  main_obj.init();
})();
