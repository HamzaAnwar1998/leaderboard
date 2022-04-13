import './style.css';
import leaderboard from './modules/handleAPI.js';

// getting elements
const ul = document.getElementById('ul');
const form = document.querySelector('.form');
const username = document.getElementById('username');
const userscore = document.getElementById('userscore');

// getting data from api
document.getElementById('refresh').addEventListener('click', async () => {
  const data = await leaderboard.listScores();
  data.result.forEach((individualData) => {
    ul.innerHTML += `<li class="score">
    <span>${individualData.user}:${individualData.score}</span>
    </li>`;
  });
});

// sending data
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  await leaderboard.sendData(username.value, userscore.value);
});