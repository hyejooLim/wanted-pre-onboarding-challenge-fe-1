import { useQuery } from '@tanstack/react-query';
import getTodos from '../../api/getTodos';

const useGetTodos = () =>
  useQuery(['todos'], getTodos, {
    onSuccess: (data) => {
      console.log('data', data.data);
    },
    refetchOnWindowFocus: false,
  });

export default useGetTodos;
