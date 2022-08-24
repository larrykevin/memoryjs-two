import chicken from '../assets/images/chicken.png';

const PrimerNivel = () => {
  let cards = ['🚀','🍔','🍩','🏀'];
  const disorderArray = elements => elements.sort(() => Math.random()-0.5);
  cards = cards.concat(cards);
  disorderArray(cards);
  
  function printCards() {
    let divs = cards.map((card) => `<div class="card"><span class="card__content">${card}</span></div>`); 
    return divs.join('');
  }

  const view = `
    <header class="header">
      <section class="header__container">
        <div>
          <p>Movimientos:</p>
          <p class="moves"><span>00</span>/08</p>
        </div>
        <div>
          <span>Nivel</span>
          <img src=${chicken} alt="nivel actual del juego">
        </div>
      </section>
    </header>
    <article>
      <div class='cardsContainerOne first-level'>
        ${printCards()}
      </div>
    </article>
    
  `;

  return view;
}

export default PrimerNivel;