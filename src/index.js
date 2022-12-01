import './style.css';
import id from './modules/uniqueId';
import UI from './modules/render';

const postUrl =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const submitForm = document.querySelector('.btn-submit');
const refreshBtn = document.querySelector('.btn-ref');
const user = document.getElementById('name');
const score = document.getElementById('number');
console.log(score);

UI.getData();
// Post to the API
const pastGameScores = async () => {
  const res = await fetch(`${postUrl}/${id}/scores`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: user.value,
      score: score.value,
    }),
  });
  const data = await res.json();
  return data;
};

const clearInput = () => {
  user.value = '';
  score.value = '';
};

submitForm.addEventListener('click', (e) => {
  e.preventDefault();
  pastGameScores();
  console.log(pastGameScores);
  clearInput();
});

refreshBtn.addEventListener('click', () => {
  window.location.reload();
});
