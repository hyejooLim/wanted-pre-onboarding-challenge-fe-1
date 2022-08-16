import { useQueryClient, useMutation } from '@tanstack/react-query';
import updateTodo from '../../api/updateTodo';

const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });
};

export default useUpdateTodo;
