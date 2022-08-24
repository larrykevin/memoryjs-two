import iconSuccess from '../assets/images/success-level.png';

const successCard = () => {
  const container = document.querySelector('.Content');
  const firstLevelCards = document.querySelector('.cardsContainerOne');
  const secondLevelCards = document.querySelector('.cardsContainerTwo');

  if(firstLevelCards) {
    const card = document.createElement('section');
    card.classList.add('pop-up');
    card.innerHTML = `
      <div class="pop-up__container success-level">
        <img src=${iconSuccess} alt="icon success">
        <h3>Nivel Superado!</h3>
        <a href="#/segundo-nivel" class="btn-primary success-level__btn">Siguiente nivel</a>
      </div>
    `;
    container.append(card);
  } 
  else if (secondLevelCards) {
    const card = document.createElement('section');
    card.classList.add('pop-up');
    card.innerHTML = `
      <div class="pop-up__container success-level">
        <img src=${iconSuccess} alt="icon success">
        <h3>Nivel Superado!</h3>
        <a href="#/tercer-nivel" class="btn-primary success-level__btn">Siguiente nivel</a>
      </div>
    `;
    container.append(card);
  }
}

export default successCard;