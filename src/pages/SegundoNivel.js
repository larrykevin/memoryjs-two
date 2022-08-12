const SegundoNivel = () => {
  let cards = ['🚀','🍔','🍩','🏀','🍦','🍟','🍕','🛸'];
  const disorderArray = elements => elements.sort(() => Math.random()-0.5);
  cards = cards.concat(cards);
  disorderArray(cards);

  function printCards() {
    let divs = cards.map((card) => `<div>${card}</div>`); 
    return divs.join('');
  }

  const view = `
    <article>
      <p>primer nivel del juego</p>
      <div class='cardsContainerTwo'>
        ${printCards()}
      </div>
    </article>
    <a href="#/tercer-nivel">siguiente nivel</a>
  `;

  return view;
}

export default SegundoNivel;