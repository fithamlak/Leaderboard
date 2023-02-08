const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const resourceUrl = `${api}games/beyQVvt5g8YLESaZOYza/scores/`;

export const feachScores = async () => {
  const request = await fetch(resourceUrl);
  const response = await request.json();
  return response.result;
};

export const postScore = async (name, score) => {
  const scoreToBePosted = {
    user: name,
    score,
  };
  const request = await fetch(resourceUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(scoreToBePosted),
  });
  const response = await request.json();
  return response.result;
};
