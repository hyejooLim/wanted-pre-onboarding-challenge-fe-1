import { useQueryClient, useMutation } from 'react-query';
import createTodo from '../../api/createTodo';

const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation(createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });
};

export default useCreateTodo;
