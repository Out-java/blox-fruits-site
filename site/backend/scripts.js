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
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalItems;
  updateSlider();
  tooltip.classList.add("show"); // Garante que ele continue aparecendo
});

// 4. Lógica do Tooltip (Independente do Slider)
const todasAsFrutas = document.querySelectorAll(".listaFrutas li");

todasAsFrutas.forEach((fruta) => {
  fruta.addEventListener("mouseenter", () => {
    const info = fruta.getAttribute("data-info");
    const name = fruta.getAttribute("data-name");
    const img = fruta.getAttribute("data-img");
    const valor = fruta.getAttribute("data-valor");
    tooltip.innerHTML = `
  <div class="tooltip-inner">
    <div class="tooltip-text">
      <span class="tooltip-name">${name || ""}</span>
      <div class="tooltip-desc">${info || ""}</div>
    </div>
    <div class="icon-wrap">
      <img src="${img}" class="robuxicon" alt="icon">
      <div class="valor">${valor}</div>
    </div>
  </div>
`;
    tooltip.classList.add("show");
  });

  fruta.addEventListener("mouseleave", () => {
    tooltip.classList.remove("show");
  });
});

// Inicializa
updateSlider();

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
