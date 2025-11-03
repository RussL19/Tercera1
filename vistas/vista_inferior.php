



</html>

<script src="./script/hamburger-icon.js"></script>
<script src="./script/accordion.js"></script>


<script>
document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;

      // Si ya está abierta, la cerramos
      if (content.classList.contains("active")) {
        content.classList.remove("active");
        content.style.maxHeight = null;
        header.classList.remove("open");
        return;
      }

      // Cerrar todas las demás
      document.querySelectorAll(".accordion-content").forEach(c => {
        c.classList.remove("active");
        c.style.maxHeight = null;
      });
      document.querySelectorAll(".accordion-header").forEach(h => {
        h.classList.remove("open");
      });

      // Abrir la actual
      content.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
      header.classList.add("open");
    });
  });
});
</script>
