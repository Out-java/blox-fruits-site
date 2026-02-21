let currentIndex = 0;
const nextBtn = document.getElementById("next"); //BOTÃO ANTERIOR
const prevBtn = document.getElementById("prev"); //BOTÃO PRÓXIMO

function updateSlider() {
  const translateX = -currentIndex * 310; // 300px width + 10px gap
  ul.style.transform = `translateX(${translateX}px)`;
}

prevBtn.addEventListener("click", () => {
  tooltip.classList.remove("show");
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateSlider();
});

nextBtn.addEventListener("click", () => {
  tooltip.classList.remove("show");
  currentIndex = (currentIndex + 1) % totalItems;
  updateSlider();
});

const ul = document.querySelector(".listaFrutas"); //PEGA OS LI
const totalItems = ul.children.length;
const tooltip = document.getElementById("tooltip"); //TOOLTIP
const todasAsFrutas = document.querySelectorAll(".listaFrutas li");
let abertoPorClick = false;

todasAsFrutas.forEach((fruta) => {
  fruta.addEventListener("mouseenter", (e) => {
    const dados = fruta.dataset;

    //<div class="tooltip-desc">${dados.info || ""}</div> - (Desativado)

    tooltip.innerHTML = `
    <div class="tooltip-inner">
    <div class="tooltip-text">
    <span class="tooltip-name">${dados.name || ""}</span>
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
    setTimeout(() => {
      if (!tooltip.matches(":hover")) {
        tooltip.classList.remove("show");
      }
    }, 50);
  });
});

//Area pix
const pixModal = document.getElementById("pixModal");
const pixValor = document.getElementById("pixValor");
const pixCodigo = document.getElementById("pixCodigo");
const copiarPix = document.getElementById("copiarPix");
const fecharPix = document.getElementById("fecharPix");

// ABRIR PIX ao clicar no botão dentro do tooltip
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("pix-btn")) {
    const valor = e.target.dataset.valor;

    pixValor.textContent = `R$ ${valor}`;

    // 🔥 AQUI VOCÊ COLOCA SUA CHAVE PIX
    const chavePix = "gabrielbue2008@gmail.com";

    const codigo = `gabrielbue2008@gmail.com`;

    pixCodigo.value = codigo.trim();
    pixModal.classList.add("show");
  }
});

// COPIAR
copiarPix.addEventListener("click", () => {
  pixCodigo.select();
  document.execCommand("copy");
  copiarPix.textContent = "Copiado!";
  setTimeout(() => (copiarPix.textContent = "Copiar PIX"), 2000);
});

// FECHAR
fecharPix.addEventListener("click", () => {
  pixModal.classList.remove("show");
});

// FECHAR clicando fora
pixModal.addEventListener("click", (e) => {
  if (e.target === pixModal) {
    pixModal.classList.remove("show");
  }
});
