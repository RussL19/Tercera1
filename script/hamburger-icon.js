console.log('Hamburger Icon Cargado')

(function () {
    const main_obj = {
        init: function(){
            this.eventhandlers()
        },
        eventhandlers: function() {
            document.querySelector('.hamburger-icon').addEventListener('CLICK', function(){
                document.querySelector('.menu-container').classList.toggle('menu-open');
            })
        }
    }
    main_obj.init()
})();