import tiger from '../assets/images/tiger.png';

const TercerNivel = () => {
  let cards = ['🚀','🍔','🍩','🏀','🍦','🍟','🍕','🛸','🎃','🎁','🌈','💰'];
  const disorderArray = elements => elements.sort(() => Math.random()-0.5);
  cards = cards.concat(cards);
  disorderArray(cards);

  function printCards() {
    let divs = cards.map((card) => `
      <div class="card">
        <span class="card__content">${card}</span>
      </div>
    `); 
    return divs.join('');
  }

  const view = `
    <header class="header">
      <section class="header__container">
        <div>
          <p>Movimientos:</p>
          <p class="moves"><span>00</span>/36</p>
        </div>
        <div>
          <span>Nivel</span>
          <img src=${tiger} alt="nivel actual del juego">
        </div>
      </section>
    </header>
    <article>
      <div class='cardsContainerThree third-level'>
        ${printCards()}
      </div>
    </article>
  `;

  return view;
}

export default TercerNivel;