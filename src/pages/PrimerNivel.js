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
    <article>
      <p>primer nivel del juego</p>
      <div class='cardsContainerOne first-level'>
        ${printCards()}
      </div>
    </article>
    <a href="#/segundo-nivel">siguiente nivel</a>
  `;

  return view;
}

export default PrimerNivel;