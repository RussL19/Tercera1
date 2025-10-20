console.log("Cards Cargado");

const dataCards = [
    {
        "title": "Pelicula del a;o",
        "url_image":"./img/joker.jpg",
        "desc": "La mejor pelicula ",
        "cta": "Mostrar mas...",
        "link": "/peliculas.php"

    },

    {
        "title": "Serie del a;o",
        "url_image":"./img/naturo.jpg",
        "desc": "La mejor pelicula ",
        "cta": "Mostrar mas...",
        "link": "/series.php"

    },
    {
        "title": "Tendecias",
        "url_image":"",
        "desc": "Lo mejor en del momento ",
        "cta": "Mostrar mas...",
        "link": "/tendencias.php"

    }

];

(function (){
    let CARD = {
        init: function(){
            let _Self = this;
            this.insertData(_Self);
        },

        insertData: function(_Self){
            dataCards.map(function (item, index){
                document.querySelector('.card-list').insertAdjacentHTML('beforeend', _Self.tplCardItem(item,index));
            })
        },

        tplCardItem: function(item, index){
            return(`<div class = 'card-item id = 'card-number- ${index}'>
                <img src='${item.url_image}'>
                <div class='card-info'>
                    <p class = 'card-title'>${item.title}</p>
                    <p class = 'card-desc'>${item.desc}</p>
                    <a class = 'card-cta' target = 'blank' href = '${item.link}'>${item.cta}</a>
                </div>
             </div>`)
        },
    }
    CARD.init();
})();