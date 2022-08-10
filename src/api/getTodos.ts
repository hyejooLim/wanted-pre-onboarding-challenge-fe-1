import axios from 'axios';
import { BASE_URL, token } from '.';

const getTodos = async () => {
  const result = await axios.get(`${BASE_URL}/todos`, {
    headers: { authorization: token as string },
  });

  return result.data;
};

export default getTodos;
