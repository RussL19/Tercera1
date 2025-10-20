console.log("Hamburger Icon Cargado");

(function () {
  const main_obj = {
    init: function () {
      this.eventhandlers();
    },
    eventhandlers: function () {
      const hamburger = document.querySelector('.hamburger-icon');
      const menuContainer = document.querySelector('.menu-container');

      hamburger.addEventListener('click', function () {
        menuContainer.classList.toggle('menu-open');
      });
    },
  };
  main_obj.init();
})();
