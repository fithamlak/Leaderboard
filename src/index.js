const tabel = document.querySelector('#tb');
const scorsArray = [100, 20, 50, 78, 125, 77, 42];

for (let i = 0; i < scorsArray.length; i += 1) {
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  td.innerText = `name: ${scorsArray[i]}`;
  tr.appendChild(td);
  tabel.appendChild(tr);
}