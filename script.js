console.log("Scrollama disponível:", typeof scrollama !== "undefined");

// Inicia scrollama
const scroller = scrollama();

// Config scrollytelling
scroller
  .setup({
    step: ".step",
    offset: 0.5,
    debug: true,
  })
  .onStepEnter((response) => {
    console.log("Entrando na seção:", response.element.dataset.step);
    const { element, direction } = response;
    const ano = element.dataset.step;

    // Atualiza classes ativas na navegação
    document.querySelectorAll(".navegacao-tempo__link").forEach((link) => {
      link.classList.remove("ativo");
      console.log("Removendo classe ativo de:", link);
    });

    // Adiciona classe ativa ao link do ano atual
    const anoLink = document.querySelector(`[href="#ano-${ano}"]`);
    if (anoLink) {
      anoLink.classList.add("ativo");
      console.log("Adicionando classe ativo em:", anoLink);
    }
  });

scroller.setup({
  step: ".step",
  offset: 0.5,
  debug: false,
});

document.addEventListener("DOMContentLoaded", function () {
  const btnTopo = document.getElementById("btnTopo");

  // Mostrar/ocultar botão baseado no scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      btnTopo.classList.add("visible");
    } else {
      btnTopo.classList.remove("visible");
    }
  });

  // Scroll suave ao topo quando clicar no botão
  btnTopo.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
function atualizaVisualizacao(ano) {}

function atualizaNavegacao(ano) {
  // Remove classe ativa de todos os links
  document
    .querySelectorAll(".navegacao-tempo__link")
    .forEach((link) => link.classList.remove("ativo"));

  // Adiciona classe ativa ao link do ano atual
  document.querySelector(`[href="#ano-${ano}"]`).classList.add("ativo");
}

// Recalcula em caso de redimensionamento da janela
window.addEventListener("resize", scroller.resize);

document.querySelectorAll(".card-header").forEach((header) => {
  header.addEventListener("click", () => {
    const card = header.parentElement;
    card.classList.toggle("active");
  });
});
