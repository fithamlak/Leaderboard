import { postScore } from './game.js';

const submitHandler = async (e) => {
  e.preventDefault();
  const form = document.getElementById('form');
  const name = form.elements.name.value;
  const score = form.elements.score.value;
  await postScore(name, score);
  form.reset();
};

export default submitHandler;