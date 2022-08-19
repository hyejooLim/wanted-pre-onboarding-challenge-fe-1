import { useQuery } from '@tanstack/react-query';
import getTodoById from '../../api/getTodoById';

const useGetTodoById = (id: string) => useQuery(['todos', id], () => getTodoById(id));

export default useGetTodoById;
