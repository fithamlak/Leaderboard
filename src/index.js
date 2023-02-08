import './styles.css';
import submitHandler from './submitHandler.js';
import refreshHandler from './refreshhandler.js';

const tabel = document.querySelector('#tb');
const scorsArray = [100, 20, 50, 78, 125, 77, 42];

const refreshBtn = document.getElementById('refresh');
const submitBtn = document.getElementById('submit');

refreshBtn.addEventListener('click', refreshHandler);
submitBtn.addEventListener('click', submitHandler);

for (let i = 0; i < scorsArray.length; i += 1) {
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  td.innerText = `name: ${scorsArray[i]}`;
  tr.appendChild(td);
  tabel.appendChild(tr);
}