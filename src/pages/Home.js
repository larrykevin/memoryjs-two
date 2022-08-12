const Home = () => {
  const view = `
    <h2>Instrucciones</h2>
    <article>
      <p>Instrucciones para jugar</p>
      <ul>
        <li>Coincide cartas pares hasta que el tablero quede vacío</li>
        <li>Hay 3 niveles conforme avances se aumentará la dificultad</li>
        <li>Podrás revelar las cartas si presionas sobre ellas/li>
        <li>Tendrás un número limitado de movimientos dependiendo del nivel</li>
      </ul>
    </article>
    <a href="#/primer-nivel">Empezar a jugar</a>
  `;

  return view;
}

export default Home;