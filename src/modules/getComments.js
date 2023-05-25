const CAPSTONE_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CJBclXhG3xsVEAuyngVA/comments';

const getComments = async (itemId) => {
  itemId += 1;
  const response = await fetch(`${CAPSTONE_API_URL}?item_id=item${itemId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch comments data');
  }
  const comments = await response.json();
  return comments;
};

export default getComments;