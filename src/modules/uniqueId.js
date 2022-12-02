fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
  method: 'POST',
  body: JSON.stringify({
    name: 'leaders game',
  }),
  headers: {
    'content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => data);

const id = 'cq3EqfgQPc8LbMXkz8NO';

export default id;
