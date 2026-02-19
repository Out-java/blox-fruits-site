let currentIndex = 0;
const ul = document.querySelector('.listaFrutas');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const tooltip = document.getElementById('tooltip');
const itensDaLista = document.querySelectorAll('.listaFrutas li');
const totalItems = ul.children.length;

function updateSlider() {
  const translateX = -currentIndex * 310; // 300px width + 10px gap
  ul.style.transform = `translateX(${translateX}px)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalItems;
  updateSlider();
});

const todasAsFrutas = document.querySelectorAll('.listaFrutas li');

todasAsFrutas.forEach((fruta) => {
  fruta.addEventListener('mouseenter', () => {
    const info = fruta.getAttribute('data-info');
    const name = fruta.getAttribute('data-name');
    const imgRobux = fruta.getAttribute('data-img-robux');
    const valorRobux = fruta.getAttribute('data-robux');
    const imgReal = fruta.getAttribute('data-img-real');
    const valorReal = fruta.getAttribute('data-valor-real');
    tooltip.innerHTML = `
      <div class="tooltip-inner">
        <div class="tooltip-text">
          <span class="tooltip-name">${name || ''}</span>
          <div class="tooltip-desc">${info || ''}</div>
        </div>
        <div class="icon-container">
          <div class="icon-wrap">
            <img src="${imgRobux}" class="robuxicon" alt="icon">
            <div class="valor">${valorRobux}</div>
          </div>
          <div class="icon-wrap-real">
            <img src="${imgReal}" class="realicon" alt="icon">
            <div class="valorReal">${valorReal}</div>
          </div>
        </div>
      </div>
  `;
    tooltip.classList.add('show');
  });

  fruta.addEventListener('mouseleave', () => {
    tooltip.classList.remove('show');
  });
});

// Mobile (toque)
fruta.addEventListener('click', (e) => {
  e.stopPropagation(); // evita fechar imediatamente
  tooltip.textContent = fruta.getAttribute('data-tooltip');
  tooltip.style.display = 'block';
  tooltip.style.left = e.pageX + 'px';
  tooltip.style.top = e.pageY + 'px';
});

// Fechar tooltip ao tocar fora
document.addEventListener('click', () => {
  tooltip.style.display = 'none';
});

// Inicializa
updateSlider();
