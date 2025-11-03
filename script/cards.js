console.log("Cargando Cards");

console.log("🎬 Cargando Cards");

const dataCards = [
    {
        "title": "The Joker",
        "url_image": "./img/joker.jpg",
        "desc": "La mejor película",
        "cta": "Mostrar más...",
        "link": "./detalle.html?title=The+Joker&image=./img/joker.jpg&description=Arthur+Fleck,+un+hombre+ignorado+por+la+sociedad,+se+convierte+en+el+Joker.&actors=Joaquin+Phoenix&duration=2h+2m&year=2019&genre=Drama&trailer=https://www.youtube.com/embed/zAGVQLHvwOY",
        "category": "tendencias"
    },
    {
        "title": "Naruto",
        "url_image": "./img/naruto.jpg",
        "desc": "Una aventura shinobi",
        "cta": "Mostrar más...",
        "link": "./detalle.html?title=Naruto&image=./img/naruto.jpg&description=La+historia+de+Naruto+Uzumaki,+un+ninja+decidido+a+convertirse+en+Hokage.&actors=Junko+Takeuchi&duration=22m&year=2002&genre=Animación&trailer=https://www.youtube.com/embed/7UmlZQYtJ-M",
        "category": "series"
    },
    {
        "title": "The Witcher",
        "url_image": "./img/theWitcher.jpg",
        "desc": "La mejor serie del momento",
        "cta": "Mostrar más...",
        "link": "./detalle.html?title=The+Witcher&image=./img/theWitcher.jpg&description=Geralt+de+Rivia+es+un+cazador+de+monstruos+en+un+mundo+oscuro+y+magico.&actors=Henry+Cavill,+Anya+Chalotra&duration=1h&year=2019&genre=Fantasía&trailer=https://www.youtube.com/embed/ndl1W4ltcmg",
        "category": "tendencias"
    },
    {
        "title": "The Amazing Spiderman",
        "url_image": "./img/spiderman.jpg",
        "desc": "Peter Parker lucha contra los villanos de New York",
        "cta": "Mostrar más...",
        "link": "./detalle.html?title=The+Amazing+Spiderman&image=./img/spiderman.jpg&description=Peter+Parker+lucha+contra+los+villanos+de+New+York.&actors=Andrew+Garfield,+Emma+Stone&duration=2h+16m&year=2012&genre=Acción&trailer=https://www.youtube.com/embed/-tnxzJ0SSOw",
        "category": "peliculas"
    },
    {
        "title": "Karate Kid",
        "url_image": "./img/the-karate-kid.jpg",
        "desc": "Una historia de superación y disciplina",
        "cta": "Mostrar más...",
        "link": "./detalle.html?title=Karate+Kid&image=./img/the-karate-kid.jpg&description=Un+joven+aprende+valiosas+lecciones+de+vida+a+través+del+karate.&actors=Ralph+Macchio,+Pat+Morita&duration=2h+6m&year=1984&genre=Drama&trailer=https://www.youtube.com/embed/yDi3an8WgN4",
        "category": "peliculas"
    },
    {
        "title": "Batman",
        "url_image": "./img/batman.jpg",
        "desc": "Bruce Wayne asume el papel de Batman para proteger Gotham de la corrupción y el crimen organizado.",
        "cta": "Ver más...",
        "link": "./detalle.html?title=Batman&image=./img/batman.jpg&description=Bruce+Wayne+asume+el+papel+de+Batman+para+proteger+Gotham+de+la+corrupci%C3%B3n+y+el+crimen+organizado.&actors=Christian+Bale,+Heath+Ledger&duration=2h+32m&year=2008&genre=Acci%C3%B3n&trailer=https://www.youtube.com/embed/EXeTwQWrcwY",
        "category": "peliculas"
    },
    {
        "title": "Deadpool",
        "url_image": "./img/deadpool.jpg",
        "desc": "Un exsoldado se convierte en el antihéroe Deadpool y busca venganza con su humor sarcástico.",
        "cta": "Ver más...",
        "link": "./detalle.html?title=Deadpool&image=./img/deadpool.jpg&description=Un+exsoldado+se+convierte+en+el+antih%C3%A9roe+Deadpool+y+busca+venganza+con+su+humor+sarc%C3%A1stico.&actors=Ryan+Reynolds,+Morena+Baccarin&duration=1h+48m&year=2016&genre=Acci%C3%B3n+%2F+Comedia&trailer=https://www.youtube.com/embed/ONHBaC-pfsk",
        "category": "peliculas"
    },
    {
        "title": "Shrek",
        "url_image": "./img/shrek.webp",
        "desc": "Un ogro gruñón emprende una aventura para rescatar a una princesa y recuperar su pantano.",
        "cta": "Ver más...",
        "link": "./detalle.html?title=Shrek&image=./img/shrek.webp&description=Un+ogro+gru%C3%B1%C3%B3n+emprende+una+aventura+para+rescatar+a+una+princesa+y+recuperar+su+pantano.&actors=Mike+Myers,+Eddie+Murphy,+Cameron+Diaz&duration=1h+30m&year=2001&genre=Animaci%C3%B3n+%2F+Comedia&trailer=https://www.youtube.com/embed/CwXOrWvPBPk",
        "category": "peliculas"
    },
    {
        "title": "Death Note",
        "url_image": "./img/deathnote.jpg",
        "desc": "Un estudiante encuentra un cuaderno que le permite matar a cualquiera cuyo nombre escriba en él.",
        "cta": "Ver más...",
        "link": "./detalle.html?title=Death+Note&image=./img/deathnote.jpg&description=Un+estudiante+encuentra+un+cuaderno+que+le+permite+matar+a+cualquiera+cuyo+nombre+escriba+en+%C3%A9l.&actors=Mamoru+Miyano,+Aya+Hirano&duration=37+episodios&year=2006&genre=Anime+%2F+Suspenso&trailer=https://www.youtube.com/embed/NlJZ-YgAt-c",
        "category": "series"
    },
    {
        "title": "Avatar",
        "url_image": "./img/avatar.jpg",
        "desc": "Un exmarine se adentra en el mundo de Pandora y se une a los Na'vi para proteger su planeta.",
        "cta": "Ver más...",
        "link": "./detalle.html?title=Avatar&image=./img/avatar.jpg&description=Un+exmarine+se+adentra+en+el+mundo+de+Pandora+y+se+une+a+los+Na%27vi+para+proteger+su+planeta.&actors=Sam+Worthington,+Zoe+Saldana,+Sigourney+Weaver&duration=2h+42m&year=2009&genre=Ciencia+Ficci%C3%B3n&trailer=https://www.youtube.com/embed/5PSNL1qE6VY",
        "category": "series"
    },
    {
        "title": "One Piece",
        "url_image": "./img/onepiece.jpg",
        "desc": "Monkey D. Luffy y su tripulación buscan el legendario tesoro One Piece en un mundo de piratas.",
        "cta": "Ver más...",
        "link": "./detalle.html?title=One+Piece&image=./img/onepiece.jpg&description=Monkey+D.+Luffy+y+su+tripulaci%C3%B3n+buscan+el+legendario+tesoro+One+Piece+en+un+mundo+de+piratas.&actors=Mayumi+Tanaka,+Kazuya+Nakai&duration=1000+episodios+%2B&year=1999&genre=Anime+%2F+Aventura&trailer=https://www.youtube.com/embed/MCb13lbVGE0",
         "category": "series"
    },
    {
        "title": "Narcos",
        "url_image": "./img/Narcos.jpg",
        "desc": "La historia del ascenso y caída del narcotraficante Pablo Escobar y el imperio de la cocaína.",
        "cta": "Ver más...",
        "link": "./detalle.html?title=Narcos&image=./img/Narcos.jpg&description=La+historia+del+ascenso+y+ca%C3%ADda+del+narcotraficante+Pablo+Escobar+y+el+imperio+de+la+coca%C3%ADna.&actors=Wagner+Moura,+Pedro+Pascal&duration=3+temporadas&year=2015&genre=Drama+%2F+Crimen&trailer=https://www.youtube.com/embed/xl8zdCY-abw",
        "category": "tendencias"
    },
    {
        "title": "Monsters, Inc.",
        "url_image": "./img/MonsterINC.jpg",
        "desc": "Dos monstruos descubren el poder de la risa mientras intentan devolver a una niña humana a su mundo.",
        "cta": "Ver más...",
        "link": "./detalle.html?title=Monsters+Inc.&image=./img/MonsterINC.jpg&description=Dos+monstruos+descubren+el+poder+de+la+risa+mientras+intentan+devolver+a+una+ni%C3%B1a+humana+a+su+mundo.&actors=John+Goodman,+Billy+Crystal&duration=1h+32m&year=2001&genre=Animaci%C3%B3n+%2F+Comedia&trailer=https://www.youtube.com/embed/CGbgaHoapFM",
        "category": "peliculas"
    },
    {
        "title": "Dark",
        "url_image": "./img/dark.jfif",
        "desc": "Una serie alemana que explora viajes en el tiempo, secretos familiares y el destino en un pequeño pueblo.",
        "cta": "Ver más...",
        "link": "./detalle.html?title=Dark&image=./img/dark.jfif&description=Una+serie+alemana+que+explora+viajes+en+el+tiempo,+secretos+familiares+y+el+destino+en+un+peque%C3%B1o+pueblo.&actors=Louis+Hofmann,+Lisa+Vicari&duration=3+temporadas&year=2017&genre=Ciencia+Ficci%C3%B3n+%2F+Misterio&trailer=https://www.youtube.com/embed/ESEUoa-mz2c",
         "category": "series"
    },
    {
        "title": "La sociedad de la nieve",
        "url_image": "./img/SociedadNieve.jpg",
        "desc": "Basada en hechos reales, un equipo de rugby sobrevive tras un accidente aéreo en los Andes.",
        "cta": "Ver más...",
        "link": "./detalle.html?title=La+sociedad+de+la+nieve&image=./img/SociedadNieve.jpg&description=Basada+en+hechos+reales,+un+equipo+de+rugby+sobrevive+tras+un+accidente+a%C3%A9reo+en+los+Andes.&actors=Enzo+Vogrincic,+Mat%C3%ADas+Recalt&duration=2h+25m&year=2023&genre=Drama+%2F+Supervivencia&trailer=https://www.youtube.com/embed/l9tPpjLzUe0",
        "category": "peliculas"
    },
    {
        "title": "Toy Story",
        "url_image": "./img/toyStory.jpg",
        "desc": "Woody y Buzz Lightyear aprenden el valor de la amistad en una historia que marcó la animación moderna.",
        "cta": "Ver más...",
        "link": "./detalle.html?title=Toy+Story&image=./img/toyStory.jpg&description=Woody+y+Buzz+Lightyear+aprenden+el+valor+de+la+amistad+en+una+historia+que+marc%C3%B3+la+animaci%C3%B3n+moderna.&actors=Tom+Hanks,+Tim+Allen&duration=1h+21m&year=1995&genre=Animaci%C3%B3n+%2F+Aventura&trailer=https://www.youtube.com/embed/v-PjgYDrg70",
        "category": "peliculas"
    }
];

(function () {
    let CARD = {
        init: function () {
            const category = this.getCategoryFromPage();
            this.insertData(category);
        },

        // Detecta la categoría según la página
        getCategoryFromPage: function () {
            const path = window.location.pathname.toLowerCase();
            if (path.includes("peliculas")) return "peliculas";
            if (path.includes("series")) return "series";
            if (path.includes("tendencias")) return "tendencias";
            return null; // En index o categoría, muestra todo
        },

        insertData: function (category) {
            const container = document.querySelector('.card-list');
            if (!container) return;

            // Si hay categoría, filtramos; si no, mostramos todo
            const cardsToShow = category
                ? dataCards.filter(card => card.category === category)
                : dataCards;

            if (cardsToShow.length === 0) {
                container.innerHTML = `<p style="color:white;text-align:center;">No hay elementos en esta categoría.</p>`;
                return;
            }

            cardsToShow.forEach((item, index) => {
                container.insertAdjacentHTML('beforeend', this.tplCardItem(item, index));
            });
        },

        tplCardItem: function (item, index) {
            return `
                <div class='card-item' id='card-number-${index}'>
                    <img src='${item.url_image}' alt='${item.title}'>
                    <div class='card-info'>
                        <p class='card-title'>${item.title}</p>
                        <p class='card-desc'>${item.desc}</p>
                        <a class='card-cta' href='${item.link}'>${item.cta}</a>
                    </div>
                </div>
            `;
        },
    }

    CARD.init();
})();

