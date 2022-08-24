import iconWin from '../assets/images/win.png';

const completeCard = () => {
  const container = document.querySelector('.Content');
  const card = document.createElement('section');
  
  card.classList.add('pop-up');
  card.innerHTML = `
    <div class="pop-up__container winner">
      <img src=${iconWin} alt="icon winner">
      <h3>Niveles Completos</h3>
      <a href="#/" class="btn-primary winner__btn">¿Repetir hazaña?</a>
    </div>
  `;
  container.append(card);
}

export default completeCard;