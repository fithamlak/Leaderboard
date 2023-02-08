import './styles.css';
import submitHandler from './modules/create.js';
import { refresh, refreshEventHandler } from './modules/refresh.js';

const refreshBtn = document.getElementById('refresh');
const submitBtn = document.getElementById('submit');

refreshBtn.addEventListener('click', refreshEventHandler);
submitBtn.addEventListener('click', submitHandler);

window.onload = () => {
  refresh();
};