console.log("Cargando Cards");

const dataCards = [
    {
        "title": "The Joker",
        "url_image":"./img/joker.jpg",
        "desc": "La mejor pelicula ",
        "cta": "Mostrar mas...",
        "link": "../peliculas.php"

    },

    {
        "title": "Naruto",
        "url_image":"./img/naruto.jpg",
        "desc": "Una aventura",
        "cta": "Mostrar mas...",
        "link": "../series.php"

    },
    {
        "title": "The Witcher",
        "url_image":"./img/theWitcher.jpg",
        "desc": "La mejor serie del momento ",
        "cta": "Mostrar mas...",
        "link": "../tendencias.php"

    },

    {
        "title": "Narcos",
        "url_image":"./img/Narcos.jpg",
        "desc": "Conoce más sobre la historia de el mejor narcotraficante ",
        "cta": "Mostrar mas...",
        "link": "../tendencias.php"

    },

    {
        "title": "The amazing Spiderman",
        "url_image":"./img/spiderman.jpg",
        "desc": "Lo mejor en del momento ",
        "cta": "Mostrar mas...",
        "link": "../tendencias.php"

    },

    {
        "title": "Karate Kid",
        "url_image":"./img/the-karate-kid.jpg",
        "desc": "Lo mejor en del momento ",
        "cta": "Mostrar mas...",
        "link": "../tendencias.php"

    },

    {
        "title": "Guardianes de la Galaxia",
        "url_image":"./img/Guardians.jpg",
        "desc": "Los protectores de la galaxia están devuelta ",
        "cta": "Mostrar mas...",
        "link": "../tendencias.php"

    },

    {
        "title": "Monster Inc",
        "url_image":"./img/MonsterINC.jpg",
        "desc": "Una película de Pixar ",
        "cta": "Mostrar mas...",
        "link": "../tendencias.php"

    },

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