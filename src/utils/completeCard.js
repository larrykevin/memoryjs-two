const completeCard = () => {
  const container = document.querySelector('.Content');
  const card = document.createElement('section');
  
  card.classList.add('complete');
  card.innerHTML = `
    <img src="/" alt="icon complete">
    <h3>Game Over</h3>
    <a href="#/">Volver a intentar?</a>
  `;
  container.append(card);
}

export default completeCard;