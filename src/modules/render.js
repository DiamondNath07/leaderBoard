import id from './uniqueId';

const postUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

class UI {
  static getData = async () => {
    const res = await fetch(`${postUrl}/${id}/scores`);
    const datas = await res.json();
    const dataResult = datas.result;
    dataResult.forEach((data) => {
      UI.renderTodom(data);
    });
  };

  static renderTodom(data) {
    const listContainer = document.querySelector('.scores');
    const scoreList = document.createElement('div');
    const attr = document.createAttribute('class');
    attr.value = 'lists';
    scoreList.setAttributeNode(attr);

    scoreList.innerHTML = `
      
      <li class="name">${data.user}</li>
      <li class="scores-no">${data.score}</li>
      `;

    listContainer.appendChild(scoreList);
  }
}
export default UI;
