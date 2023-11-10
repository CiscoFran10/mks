const BASE_URL =
  'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1';

export const getAllProducts = async () => {
  const page = 1;
  const rows = 8;
  const sortBy = 'name';
  const orderBy = 'ASC';

  const query = `${BASE_URL}/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`;

  const response = await fetch(query);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
