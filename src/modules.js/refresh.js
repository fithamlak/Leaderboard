import { feachScores } from './game.js';
import display from './desplay.js';

export const refresh = async () => {
  const tbody = document.getElementsByTagName('tbody')[0];
  tbody.innerHTML = '';
  const games = await feachScores();
  games.forEach((game) => {
    display(game);
  });
};

export const refreshEventHandler = (e) => {
  e.preventDefault();
  refresh();
};