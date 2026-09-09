const valor = document.querySelector("#valor");
const botaoIncrementar = document.querySelector("#incrementar");

let contador = 0;

botaoIncrementar.addEventListener("click", () => {
  contador += 1;
  valor.textContent = contador;
});