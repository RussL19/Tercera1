console.log("🎬 Carousel con autoplay cargado");

const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

const scrollStep = 300; // Distancia por desplazamiento
let autoPlayInterval;
const autoPlaySpeed = 3000; // milisegundos entre desplazamientos

// --- Funciones ---
function nextSlide() {
  track.scrollBy({ left: scrollStep, behavior: "smooth" });
  // Si llegamos al final, regresamos al inicio
  if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 5) {
    setTimeout(() => (track.scrollLeft = 0), 600);
  }
}

function prevSlide() {
  track.scrollBy({ left: -scrollStep, behavior: "smooth" });
  if (track.scrollLeft <= 0) {
    setTimeout(() => (track.scrollLeft = track.scrollWidth), 600);
  }
}

function startAutoPlay() {
  stopAutoPlay(); // evita duplicados
  autoPlayInterval = setInterval(nextSlide, autoPlaySpeed);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

// --- Eventos ---
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

track.addEventListener("mouseenter", stopAutoPlay);
track.addEventListener("mouseleave", startAutoPlay);

// Inicia el auto-play al cargar
startAutoPlay();
