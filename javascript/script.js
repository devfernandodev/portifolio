const texto = "Desenvolvedor\nFront End";
let index = 0;
const intervalo = 150; // intervalo entre cada caractere digitado (em milissegundos)

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

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();