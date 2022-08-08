import axios from 'axios';
import PropTypes from 'prop-types';

import { BASE_URL, token } from '.';

export const createTodo = async ({ title, content }) => {
  const result = await axios.post(`${BASE_URL}/todos`, { title, content }, { headers: { authorization: token } });

  return result.data;
};

createTodo.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
