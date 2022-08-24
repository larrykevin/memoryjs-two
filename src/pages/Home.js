const Home = () => {
  const view = `
    <header>
      <a href="#/">
        <h1>MemoryJS</h1>
      </a>
    </header>
    <h2>Bienvenid@</h2>
    <article class="instructions">
      <p>Instrucciones para jugar:</p>
      <ul>
        <li>Coincide cartas pares hasta que el tablero quede vacío</li>
        <li>Hay 3 niveles, conforme avances se aumentará la dificultad</li>
        <li>Podrás revelar las cartas si presionas sobre ellas</li>
        <li>Tendrás un número limitado de movimientos dependiendo del nivel</li>
      </ul>
    </article>
    <a href="#/primer-nivel" class="button-home btn-primary">Jugar!</a>
  `;

  return view;
}

export default Home;