import { useQuery } from '@tanstack/react-query';
import getTodos from '../../api/getTodos';

const useGetTodos = () =>
  useQuery(['todos'], getTodos, {
    refetchOnWindowFocus: false,
  });

export default useGetTodos;
