import axios from 'axios';
import { BASE_URL, token } from '.';

interface createTodoProps {
  title: string;
  content: string;
}

const createTodo = async ({ title, content }: createTodoProps) => {
  const result = await axios.post(
    `${BASE_URL}/todos`,
    { title, content },
    { headers: { authorization: token as string } }
  );

  return result.data;
};

export default createTodo;
