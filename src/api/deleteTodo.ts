import axios from 'axios';
import { BASE_URL, token } from '.';

interface deleteTodoProps {
  id: string;
}

const deleteTodo = async ({ id }: deleteTodoProps) => {
  const result = await axios.delete(`${BASE_URL}/todos/${id}`, { headers: { authorization: token as string } });

  return result.data;
};

export default deleteTodo;
