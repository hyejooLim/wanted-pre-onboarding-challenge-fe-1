import axios from 'axios';

import { BASE_URL, token } from '.';

export const getTodos = async () => {
  const result = await axios.get(`${BASE_URL}/todos`, {
    headers: { authorization: token },
  });

  return result.data;
};
