console.log("🎬 Cargando detalle.js");

// Obtener parámetros desde la URL
const params = new URLSearchParams(window.location.search);

// Construir objeto película
const movie = {
  title: params.get("title") || "Título no disponible",
  image: params.get("image") || "./img/default.jpg",
  description: params.get("description") || "Sin descripción disponible.",
  actors: params.get("actors") || "No especificado",
  duration: params.get("duration") || "Desconocida",
  year: params.get("year") || "—",
  genre: params.get("genre") || "Sin género",
  trailer: params.get("trailer") || "",
};

// ✅ Función para convertir automáticamente enlaces de YouTube a formato “embed”
function formatYouTubeUrl(url) {
  if (!url) return "";
  try {
    // Si solo te pasan el ID del video
    if (!url.includes("youtube.com") && !url.includes("youtu.be")) {
      return `https://www.youtube.com/embed/${url}`;
    }

    // Detectar enlaces tipo “watch?v=”
    if (url.includes("watch?v=")) {
      const videoId = url.split("watch?v=")[1].split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // Detectar enlaces “youtu.be/ID”
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // Si ya viene en formato embed
    if (url.includes("embed/")) return url;

    return url;
  } catch (err) {
    console.error("❌ Error procesando el trailer:", err);
    return "";
  }
}

// ✅ Procesar URL del tráiler
const trailerEmbed = formatYouTubeUrl(movie.trailer);

// ✅ Mostrar los datos en la página
document.getElementById("movie-title").textContent = movie.title;
document.getElementById("movie-image").src = movie.image;
document.getElementById("movie-description").textContent = movie.description;
document.getElementById("movie-actors").textContent = movie.actors;
document.getElementById("movie-duration").textContent = movie.duration;
document.getElementById("movie-year").textContent = movie.year;
document.getElementById("movie-genre").textContent = movie.genre;

const trailerFrame = document.getElementById("movie-trailer");
if (trailerEmbed) {
  trailerFrame.src = trailerEmbed;
} else {
  trailerFrame.style.display = "none";
  document
    .getElementById("movie-description")
    .insertAdjacentHTML("afterend", "<p><em>Tráiler no disponible.</em></p>");
}

// 🎨 Fondo difuminado tipo Netflix (usa la imagen como fondo)
const detalleContainer = document.querySelector(".detalle-container");
if (detalleContainer && movie.image) {
  detalleContainer.style.backgroundImage = `url('${movie.image}')`;
  detalleContainer.style.backgroundSize = "cover";
  detalleContainer.style.backgroundPosition = "center";
  detalleContainer.style.backgroundRepeat = "no-repeat";
  detalleContainer.style.backdropFilter = "blur(8px)";
  detalleContainer.style.backgroundBlendMode = "overlay";
}

// 🎬 Botón de regresar
const backButton = document.getElementById("back-button");

if (backButton) {
  backButton.addEventListener("click", () => {
    // Si quieres regresar a una página específica, pon la ruta aquí:
    window.location.href = "index.php"; 
    // O si solo querés ir atrás en el historial del navegador:
    // window.history.back();
  });
}

console.log("✅ Datos cargados correctamente en detalle.html");
