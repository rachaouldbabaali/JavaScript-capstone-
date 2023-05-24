const CAPSTONE_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Rn82Q3srQlIfvYWDJQZx/likes';
const getLikes = async () => {
  const response = await fetch(CAPSTONE_API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch Likes data');
  }
  const res = await response.json();
  return res;
};

export default getLikes;
