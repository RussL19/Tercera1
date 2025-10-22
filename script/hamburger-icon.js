console.log("Cargando Hamburger Icon");

(function () {
  const main_obj = {
    init: function () {
      this.eventhandlers();
    },
    eventhandlers: function () {
      document.addEventListener("DOMContentLoaded", () => {
        const hamburger = document.querySelector(".hamburger-icon");
        const menu = document.querySelector(".Menu-normal");

        hamburger.addEventListener("click", () => {
          menu.classList.toggle("active");
        });
      });

    },
  };
  main_obj.init();
})();
