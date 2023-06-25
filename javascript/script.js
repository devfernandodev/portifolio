const texto = "Desenvolvedor\nFront End";
let index = 0;
const intervalo = 200; // intervalo entre cada caractere digitado (em milissegundos)

function escreverTexto() {
  const h1 = document.querySelector('.h1-digitando');
  h1.innerText = texto.slice(0, index);

  index++;

  if (index <= texto.length) {
    
  }

  setTimeout(escreverTexto, intervalo);
}

escreverTexto();



// Função para adicionar a classe de animação aos elementos com atraso personalizado
function animateElements() {
  const header = document.querySelector('.header');
  const introducao = document.querySelector('.introducao');
  const projetos = document.querySelectorAll('.projetos .sites');
  const formacao = document.querySelector('.formacao');
  const footer = document.querySelector('.footer');

  // Define as propriedades de animação
  const animationDuration = '0.7s'; // Duração da animação
  const animationDelay = '0.10s'; // Atraso da animação entre elementos

  // Adiciona a classe de animação aos elementos com atraso personalizado
  header.style.animation = `slideDown ${animationDuration} ease-in-out`;
  introducao.style.animation = `slideDown ${animationDuration} ease-in-out ${animationDelay}`;
  projetos.forEach((site, index) => {
    const siteDelay = `${index * parseFloat(animationDelay) + parseFloat(animationDelay)}s`;
    site.style.animation = `slideDown ${animationDuration} ease-in-out ${siteDelay}`;
  });
  formacao.style.animation = `slideDown ${animationDuration} ease-in-out ${parseFloat(animationDelay) * 3}s`;
  footer.style.animation = `slideDown ${animationDuration} ease-in-out ${parseFloat(animationDelay) * 4}s`;
}

// Chama a função de animação quando o conteúdo estiver carregado
window.addEventListener('load', animateElements);

