let currentIndex = 0;
const ul = document.querySelector(".listaFrutas");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const tooltip = document.getElementById("tooltip");
const itensDaLista = document.querySelectorAll(".listaFrutas li");
const totalItems = ul.children.length;

function updateSlider() {
  const translateX = -currentIndex * 310; // 300px width + 10px gap
  ul.style.transform = `translateX(${translateX}px)`;
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateSlider();
  tooltip.classList.add("show"); // Garante que ele continue aparecendo
  e.stopPropagation();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalItems;
  updateSlider();
  tooltip.classList.add("show"); // Garante que ele continue aparecendo
  e.stopPropagation();
});

// 4. Lógica do Tooltip (Independente do Slider)
const todasAsFrutas = document.querySelectorAll(".listaFrutas li");

todasAsFrutas.forEach((fruta) => {
  fruta.addEventListener("mouseenter", () => {
    const info = fruta.getAttribute("data-info");
    tooltip.textContent = info;
    tooltip.classList.add("show");
  });

  fruta.addEventListener("mouseleave", () => {
    tooltip.classList.remove("show");
  });
});

// Inicializa
updateSlider();

itensDaLista.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    // Pega o texto direto da 'li' que o mouse entrou
    const texto = item.getAttribute("data-info");
    tooltip.textContent = texto;
    tooltip.classList.add("show");
  });

  item.addEventListener("mouseleave", () => {
    tooltip.classList.remove("show");
  });
});
// Desktop
const slider = document.getElementById("slider");

slider.addEventListener("mouseenter", () => {
  tooltip.classList.add("show");
});

slider.addEventListener("mouseleave", () => {
  tooltip.classList.remove("show");
});
ul.addEventListener("mouseleave", () => {
  tooltip.classList.remove("show");
});

// Mobile
ul.addEventListener("click", (e) => {
  e.stopPropagation();
  tooltip.classList.toggle("show");
});

document.addEventListener("click", () => {
  tooltip.classList.remove("show");
});
