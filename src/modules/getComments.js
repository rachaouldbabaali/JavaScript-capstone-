// const CAPSTONE_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Rn82Q3srQlIfvYWDJQZx/comments;
// const getComments = async (bookId) => {
//     const response = await fetch(`${CAPSTONE_API_URL}?item_id=${bookId}`);
//     if (!response.ok) {
//         throw new Error('Failed to fetch comments data');
//     }
//     const data = await response.json();
//     return data;
//     }
// export default getComments;

const CAPSTONE_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Rn82Q3srQlIfvYWDJQZx/comments';

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