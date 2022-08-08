import axios from 'axios';
import PropTypes from 'prop-types';

import { BASE_URL } from '.';

export const login = async ({ email, password }) => {
  const result = await axios.post(`${BASE_URL}/users/login`, { email, password });

  return result.data;
};

login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
