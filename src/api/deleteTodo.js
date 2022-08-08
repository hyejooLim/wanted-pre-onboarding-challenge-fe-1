import axios from 'axios';
import PropTypes from 'prop-types';

import { BASE_URL, token } from '.';

export const deleteTodo = async ({ id }) => {
  const result = await axios.delete(`${BASE_URL}/todos/${id}`, { headers: { authorization: token } });

  return result.data;
};

deleteTodo.propTypes = {
  id: PropTypes.string.isRequired,
};
