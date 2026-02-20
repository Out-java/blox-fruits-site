let currentIndex = 0;
const ul = document.querySelector(".listaFrutas"); //PEGA OS LI
const totalItems = ul.children.length;
const nextBtn = document.getElementById("next"); //BOTÃO ANTERIOR
const prevBtn = document.getElementById("prev"); //BOTÃO PRÓXIMO
const tooltip = document.getElementById("tooltip"); //TOOLTIP

function updateSlider() {
  const translateX = -currentIndex * 310; // 300px width + 10px gap
  ul.style.transform = `translateX(${translateX}px)`;
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateSlider();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalItems;
  updateSlider();
});

const todasAsFrutas = document.querySelectorAll(".listaFrutas li");
let abertoPorClick = false;

todasAsFrutas.forEach((fruta) => {
  fruta.addEventListener("mouseenter", (e) => {
    const dados = fruta.dataset;

    tooltip.innerHTML = `
      <div class="tooltip-inner">
        <div class="tooltip-text">
          <span class="tooltip-name">${dados.name || ""}</span>
          <div class="tooltip-desc">${dados.info || ""}</div>
        </div>
        <div class="icon-container">
          <div class="icon-wrap">
            <img src="${dados.imgRobux}" class="robuxicon" alt="icon">
            <div class="valor">${dados.robux}</div>
          </div>
          <div class="icon-wrap-real">
            <img src="${dados.imgReal}" class="realicon" alt="icon">
            <div class="valorReal pix-btn" data-valor="${dados.valorReal}">R$ ${dados.valorReal}
            </div>
          </div>
        </div>
      </div>
  `;
    tooltip.classList.add("show");
  });

  fruta.addEventListener("mouseleave", () => {
    tooltip.classList.remove("show");
  });
});

const pixModal = document.getElementById("pixModal");
const pixValor = document.getElementById("pixValor");
const pixCodigo = document.getElementById("pixCodigo");
const copiarPix = document.getElementById("copiarPix");
const fecharPix = document.getElementById("fecharPix");

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pix-btn")) {
    const valor = e.target.dataset.valor;

    pixValor.innerText = `Valor: R$ ${valor}`;

    // Exemplo de código PIX (substitua pelo seu real)
    pixCodigo.value = `00020126360014BR.GOV.BCB.PIX0111SEU-PIX-AQUI5204000053039865405${valor}5802BR`;

    pixModal.classList.add("show");
  }
});

// Fechar modal
fecharPix.addEventListener("click", () => {
  pixModal.classList.remove("show");
});

// Copiar código
copiarPix.addEventListener("click", () => {
  navigator.clipboard.writeText(pixCodigo.value);
  copiarPix.innerText = "Copiado!";
  setTimeout(() => (copiarPix.innerText = "Copiar código"), 1500);
});
