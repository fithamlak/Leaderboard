import { feachScores } from './game.js';
import display from './desplay.js';

export const refresh = async () => {
  const table = document.querySelector('#tb');
  table.innerHTML = '';
  const games = await feachScores();
  games.forEach((game) => {
    display(game);
  });
};

export const refreshEventHandler = (e) => {
  e.preventDefault();
  refresh();
};