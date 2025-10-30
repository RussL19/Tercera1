<?php require_once "./vistas/vista_superior.php" ?>

<body>
<?php require_once "./vistas/vista_superior.php" ?>

<!-- 🎬 Carousel de Películas Destacadas -->
<section class="carousel-container">
  <h2 class="carousel-title">🎞️ Películas destacadas</h2>
  <div class="carousel">
    <button class="carousel-btn prev">&#10094;</button>

    <div class="carousel-track">
      <div class="carousel-item"><img src="./img/Guardians.jpg" alt="Guardianes"></div>
      <div class="carousel-item"><img src="./img/Joker.jpg" alt="Joker"></div>
      <div class="carousel-item"><img src="./img/Narcos.jpg" alt="Narcos"></div>
      <div class="carousel-item"><img src="./img/spiderman.jpg" alt="Spiderman"></div>
    </div>

    <button class="carousel-btn next">&#10095;</button>
  </div>
</section>

<!--  Cards -->
<div class="card-list"></div>

<!--  Accordion -->
<!-- 🎬 Acordeón de categorías -->
<div class="main-accordion-container">
  <h2 class="section-title">Explora por categoría</h2>

  <!-- Categoría 1 -->
  <div class="accordion-item">
    <button class="accordion-header">🎞️ Series animadas</button>
    <div class="accordion-content">
      <div class="category-list">
        <div class="card">
          <img src="./img/naruto.jpg" alt="Naruto">
          <h3>Naruto</h3>
          <p>El ninja más famoso de Konoha.</p>
        </div>
        <div class="card">
          <img src="./img/deathnote.jpg" alt="Death Note">
          <h3>Death Note</h3>
          <p>Al escribir el nombre de una persona en él, esta muere.</p>
        </div>
        <div class="card">
          <img src="./img/onepiece.jpg" alt="One Piece">
          <h3>One Piece</h3>
          <p>El ninja más famoso de Konoha.</p>
        </div>
        <div class="card">
          <img src="./img/avatar.jpg" alt="Avatar">
          <h3>Avatar</h3>
          <p>El avatar que va dar equilibrio, descubre más...</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Categoría 2 -->
  <div class="accordion-item">
    <button class="accordion-header">🦸 Películas de superhéroes</button>
    <div class="accordion-content">
      <div class="category-list">
        <div class="card">
          <img src="./img/spiderman.jpg" alt="Spiderman">
          <h3>Spiderman</h3>
          <p>El héroe arácnido en acción.</p>
        </div>
        <div class="card">
          <img src="./img/guardians.jpg" alt="Guardianes de la Galaxia">
          <h3>Guardianes de la Galaxia</h3>
          <p>Un grupo de héroes galácticos.</p>
        </div>
        <div class="card">
          <img src="./img/batman.jpg" alt="Batman">
          <h3>Batman</h3>
          <p>El vigilante de la noche.</p>
        </div>
        <div class="card">
          <img src="./img/deadpool.jpg" alt="Deadpool">
          <h3>Deadpool</h3>
          <p>Basada en el antihéroe más inusual de Marvel Comics.</p>
        </div>
      </div>
    </div>
  </div>
</div>


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
        <li><a href="./contacto.php">Contacto</a></li>
      </ul>
    </div>

    <div class="footer-section">
      <h4>Síguenos</h4>
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


<?php require_once "./vistas/vista_inferior.php" ?>
