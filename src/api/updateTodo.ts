import axios from 'axios';
import { BASE_URL, token } from '.';

interface updateTodoProps {
  id: string;
  title: string;
  content: string;
}

const updateTodo = async ({ id, title, content }: updateTodoProps) => {
  const result = await axios.put(
    `${BASE_URL}/todos/${id}`,
    { title, content },
    { headers: { authorization: token as string } }
  );

  return result.data;
};

export default updateTodo;
