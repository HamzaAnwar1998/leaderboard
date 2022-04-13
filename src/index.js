import './style.css';
import leaderboard from './modules/handleAPI.js';
import 'bootstrap/dist/css/bootstrap.css';

// getting elements
const ul = document.getElementById('ul');
const form = document.querySelector('.form');
const username = document.getElementById('username');
const userscore = document.getElementById('userscore');

// getting data from api
const getScores = async () => {
  const data = await leaderboard.listScores();
  data.result.forEach((individualData) => {
    ul.innerHTML += `<li class="score list-group-item">
    <span>${individualData.user}:${individualData.score}</span>
    </li>`;
  });
};

// printing data when DOMContentLoaded
document.addEventListener('DOMContentLoaded', async () => {
  await getScores();
});

// printing data when refresh button is clicked
document.getElementById('refresh').addEventListener('click', async () => {
  await getScores();
});

// sending data
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  await leaderboard.sendData(username.value, userscore.value);
  form.reset();
});