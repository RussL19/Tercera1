<?php require_once "./vistas/vista_superior.php" ?>

<body>
  <?php require_once "./vistas/vista_superior.php" ?>

  <!--Carousel de Películas Destacadas -->
  <section class="carousel-container">
    <h2 class="carousel-title">🎞️ Películas destacadas</h2>
    <div class="carousel">
      <button class="carousel-btn prev">&#10094;</button>

      <div class="carousel-track">
        <div class="carousel-item">
          <a href="./detalle.html?title=The+Witcher&image=./img/theWitcher.jpg&description=Geralt+de+Rivia+es+un+cazador+de+monstruos+solitario.&actors=Henry+Cavill&duration=1h&year=2019&genre=Fantasía&trailer=https://www.youtube.com/embed/ndl1W4ltcmg">
            <img src="./img/theWitcher.jpg" alt="The Witcher">
          </a>
        </div>

        <div class="carousel-item">
          <a href="./detalle.html?title=Joker&image=./img/Joker.jpg&description=Arthur+Fleck+es+un+hombre+ignorado+por+la+sociedad+que+se+convierte+en+el+Joker.&actors=Joaquin+Phoenix&duration=2h&year=2019&genre=Drama&trailer=https://www.youtube.com/embed/zAGVQLHvwOY">
            <img src="./img/Joker.jpg" alt="Joker">
          </a>
        </div>

        <div class="carousel-item">
          <a href="./detalle.html?title=Narcos&image=./img/Narcos.jpg&description=La+historia+del+cartel+de+Medellín+y+Pablo+Escobar.&actors=Wagner+Moura&duration=3+Temporadas&year=2015&genre=Crimen&trailer=https://www.youtube.com/embed/xl8zdCY-abw">
            <img src="./img/Narcos.jpg" alt="Narcos">
          </a>
        </div>

        <div class="carousel-item">
          <a href="./detalle.html?title=Deadpool&image=./img/deadpool.jpg&description=Un+mercenario+con+un+extraño+sentido+del+humor+y+poderes+regenerativos.&actors=Ryan+Reynolds&duration=1h+48m&year=2016&genre=Acción&trailer=https://www.youtube.com/embed/ONHBaC-pfsk">
            <img src="./img/deadpool.jpg" alt="Deadpool">
          </a>
        </div>
      </div>
      <button class="carousel-btn next">&#10095;</button>
    </div>
  </section>

  <!--  Cards -->
  <div class="card-list"></div>


  <!-- Footer -->
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h3>Netflix Clone</h3>
        <p>Proyecto universitario — Tercera 1</p>
      </div>

      <div class="footer-section">
        <h4>Enlaces útiles</h4>
        <ul>
          <li><a href="./">Inicio</a></li>
          <li><a href="./tendencias.php">Tendencias</a></li>
          <li><a href="./peliculas.php">Películas</a></li>
          <li><a href="./series.php">Series</a></li>
          <li><a href="./categoria.php">Categoria</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Contacto</h4>
        <div class="social-links">
          <a href="#"><img src="./img/facebook.png" alt="Facebook"></a>
          <a href="#"><img src="./img/twitter.png" alt="Twitter"></a>
          <a href="#"><img src="./img/instagram.webp" alt="Instagram"></a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 Netflix Clone — Todos los derechos reservados.</p>
    </div>
  </footer>

<script src="./script/carousel.js"></script>
<script src="./script/cards.js"></script>
  <?php require_once "./vistas/vista_inferior.php" ?>