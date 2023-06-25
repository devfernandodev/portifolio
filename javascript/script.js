const texto = "Desenvolvedor\nFront End";
let index = 0;
const intervalo = 100; // intervalo entre cada caractere digitado (em milissegundos)

function escreverTexto() {
  const h1 = document.querySelector('.h1-digitando');
  h1.innerText = texto.slice(0, index);

  index++;

  if (index <= texto.length) {
    
  }

  setTimeout(escreverTexto, intervalo);
}

escreverTexto();
