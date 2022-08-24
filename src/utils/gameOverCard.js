import iconSkull from '../assets/images/game-over.png';

const gameOverCard = () => {
  const container = document.querySelector('.Content');
  const card = document.createElement('section');
  
  card.classList.add('game-over');
  card.innerHTML = `
    <div class="game-over__container">
      <img src=${iconSkull} alt="game over">
      <h3>Game Over</h3>
      <a href="#/" class="btn-primary">Volver a intentar?</a>
    </div>
  `;
  container.append(card);
}

export default gameOverCard;