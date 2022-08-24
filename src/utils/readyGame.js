import successCard from './successCard';
import gameOverCard from './gameOverCard';
import completeCard from './completeCard';

const readyGame = () => {
  const firstLevelCards = null || document.querySelectorAll('.cardsContainerOne div');
  const secondLevelCards = null || document.querySelectorAll('.cardsContainerTwo div');
  const thirdLevelCards = null || document.querySelectorAll('.cardsContainerThree div');

  let revealedCards = [];
  let selectedCards = [];
  let cardsSuccess = [];
  let moves = 0;

  firstLevelCards.forEach( card => {
    card.addEventListener('click', () => {
      //empuja elementos a arrays
      revealedCards.push(card.outerText);
      selectedCards.push(card);
      
      //accion de revelar carta
      const flipCardToggle = (card) => card.classList.toggle('reveal');
      flipCardToggle(card);

      //Funciones asíncronas
      function resolveAfter1Second() {
        return new Promise(resolve => {
          setTimeout(() => resolve(flipCardToggle(card)), 1000);
        });
      }
      async function flipReverse() {
        const result = await resolveAfter1Second();
        return result;
      }

      //si no son iguales
      if(revealedCards[0] !== revealedCards[1]) {
        flipReverse();
      }
      
      //Si son el mismo elemento
      if(selectedCards[0] === selectedCards[1]) {
        flipReverse();
        revealedCards = [];
        selectedCards = [];
      }

      //Si son iguales
      if(revealedCards.length > 1) {
        if(revealedCards[0] !== revealedCards[1]) {
          let movesInPlay = document.querySelector('.moves span');
          moves++;
          movesInPlay.textContent = `0${moves}`;
        }
        if(revealedCards[0] === revealedCards[1]) {
          cardsSuccess.push(selectedCards[0],selectedCards[1]);
          selectedCards[0].style.display = 'none';
          selectedCards[1].style.display = 'none';
        }
        if(cardsSuccess.length === 8) {
          successCard();
        }
        if(moves >= 8) {
          gameOverCard();
        }

        revealedCards = [];
        selectedCards = [];
      }
    });
  });

  secondLevelCards.forEach( card => {
    card.addEventListener('click', () => {
      //empuja elementos a arrays
      revealedCards.push(card.outerText);
      selectedCards.push(card);
      
      //accion de revelar carta
      const flipCardToggle = (card) => card.classList.toggle('reveal');
      flipCardToggle(card);

      //Funciones asíncronas
      function resolveAfter1Second() {
        return new Promise(resolve => {
          setTimeout(() => resolve(flipCardToggle(card)), 1000);
        });
      }
      async function flipReverse() {
        const result = await resolveAfter1Second();
        return result;
      }

      //si no son iguales
      if(revealedCards[0] !== revealedCards[1]) {
        flipReverse();
      }
      
      //Si son el mismo elemento
      if(selectedCards[0] === selectedCards[1]) {
        flipReverse();
        revealedCards = [];
        selectedCards = [];
      }

      //Si son iguales
      if(revealedCards.length > 1) {
        if(revealedCards[0] !== revealedCards[1]) {
          let movesInPlay = document.querySelector('.moves span');
          moves++;
          movesInPlay.textContent = `0${moves}`;
        }
        if(revealedCards[0] === revealedCards[1]) {
          cardsSuccess.push(selectedCards[0],selectedCards[1]);
          selectedCards[0].style.display = 'none';
          selectedCards[1].style.display = 'none';
        }
        if(cardsSuccess.length === 16) {
          successCard();
        }
        if(moves >= 16) {
          gameOverCard();
        }

        revealedCards = [];
        selectedCards = [];
      }
    });
  });

  thirdLevelCards.forEach( card => {
    card.addEventListener('click', () => {
      //empuja elementos a arrays
      revealedCards.push(card.outerText);
      selectedCards.push(card);
      
      //accion de revelar carta
      const flipCardToggle = (card) => card.classList.toggle('reveal');
      flipCardToggle(card);

      //Funciones asíncronas
      function resolveAfter1Second() {
        return new Promise(resolve => {
          setTimeout(() => resolve(flipCardToggle(card)), 1000);
        });
      }
      async function flipReverse() {
        const result = await resolveAfter1Second();
        return result;
      }

      //si no son iguales
      if(revealedCards[0] !== revealedCards[1]) {
        flipReverse();
      }
      
      //Si son el mismo elemento
      if(selectedCards[0] === selectedCards[1]) {
        flipReverse();
        revealedCards = [];
        selectedCards = [];
      }

      //Si son iguales
      if(revealedCards.length > 1) {
        if(revealedCards[0] !== revealedCards[1]) {
          let movesInPlay = document.querySelector('.moves span');
          moves++;
          movesInPlay.textContent = `0${moves}`;
        }
        if(revealedCards[0] === revealedCards[1]) {
          cardsSuccess.push(selectedCards[0],selectedCards[1]);
          selectedCards[0].style.display = 'none';
          selectedCards[1].style.display = 'none';
        }
        if(cardsSuccess.length === 24) {
          completeCard();
        }
        if(moves >= 36) {
          gameOverCard();
        }

        revealedCards = [];
        selectedCards = [];
      }
    });
  });
  
}

export default readyGame;