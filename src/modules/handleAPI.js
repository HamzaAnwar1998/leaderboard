const listScores = async () => {
  const request = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/j9Z2IwQVH3jsmZjNAYhp/scores/');
  const response = await request.json();
  return response;
};

const sendData = async (username, userscore) => {
  const request = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/j9Z2IwQVH3jsmZjNAYhp/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: username,
      score: userscore,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const response = await request.json();
  return response;
};

export default { listScores, sendData };