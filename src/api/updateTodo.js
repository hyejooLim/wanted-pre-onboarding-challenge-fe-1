import axios from 'axios';
import PropTypes from 'prop-types';

import { BASE_URL, token } from '.';

export const updateTodo = async ({ id, title, content }) => {
  const result = await axios.put(`${BASE_URL}/todos/${id}`, { title, content }, { headers: { authorization: token } });

  return result.data;
};

updateTodo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
