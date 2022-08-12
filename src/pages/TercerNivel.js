const TercerNivel = () => {
  let cards = ['🚀','🍔','🍩','🏀','🍦','🍟','🍕','🛸','🎃','🎁','🌈','💰'];
  const disorderArray = elements => elements.sort(() => Math.random()-0.5);
  cards = cards.concat(cards);
  disorderArray(cards);

  function printCards() {
    let divs = cards.map((card) => `<div>${card}</div>`); 
    return divs.join('');
  }

  const view = `
    <article>
      <p>tercer nivel del juego</p>
      <div class='cardsContainerThree'>
        ${printCards()}
      </div>
    </article>
    <a href="#/">Repetir hazania</a>
  `;

  return view;
}

export default TercerNivel;