const valor = document.querySelector("#valor");
const botaoDecrementar = document.querySelector("#decrementar");
const botaoIncrementar = document.querySelector("#incrementar");

let contador = 0;

botaoDecrementar.addEventListener("click", () => {
    contador -= 1;
    valor.textContent = contador;
});

botaoIncrementar.addEventListener("click", () => {
    contador += 1;
    valor.textContent = contador;
});