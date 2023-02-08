const display = (game) => {
  const tabel = document.querySelector('#tb');
  const scoreElement = document.createElement('tr');
  const td = document.createElement('td');
  td.innerText = `${game.user}: ${game.score}`;
  scoreElement.appendChild(td);
  tabel.appendChild(scoreElement);
};

export default display;