import axios from 'axios';
import { BASE_URL, token } from '.';

const getTodoById = async (id: string) => {
  const { data } = await axios.get(`${BASE_URL}/todos/${id}`, {
    headers: { authorization: token as string },
  });

  return data.data;
};

export default getTodoById;
