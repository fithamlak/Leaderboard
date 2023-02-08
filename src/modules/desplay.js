const tabel = document.querySelector('#tb');
const display = (game) => {
  const scoreElement = document.createElement('tr');
  const td = document.createElement('td');
  td.innerText = `${game.user}: ${game.score}`;
  scoreElement.appendChild(td);
  tabel.appendChild(scoreElement);
};

export default display;