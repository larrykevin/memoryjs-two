const successCard = () => {
  const container = document.querySelector('.Content');
  const firstLevelCards = document.querySelector('.cardsContainerOne');
  const secondLevelCards = document.querySelectorAll('.cardsContainerTwo');

  if(firstLevelCards) {
    const card = document.createElement('section');
    card.classList.add('success-level');
    card.innerHTML = `
      <img src="/" alt="success level">
      <h3>Nivel Superado</h3>
      <a href="#/segundo-nivel">Siguiente nivel</a>
    `;
    container.append(card);
  } 
  else if (secondLevelCards) {
    const card = document.createElement('section');
    card.classList.add('success-level');
    card.innerHTML = `
      <img src="/" alt="success level">
      <h3>Nivel Superado</h3>
      <a href="#/tercer-nivel">Siguiente nivel</a>
    `;
    container.append(card);
  }

  
}

export default successCard;