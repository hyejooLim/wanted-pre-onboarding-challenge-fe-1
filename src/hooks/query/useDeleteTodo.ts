import { useQueryClient, useMutation } from 'react-query';
import deleteTodo from '../../api/deleteTodo';

const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });
};

export default useDeleteTodo;
