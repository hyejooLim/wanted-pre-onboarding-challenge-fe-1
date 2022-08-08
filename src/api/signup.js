import axios from 'axios';
import PropTypes from 'prop-types';

import { BASE_URL } from '.';

export const signup = async ({ email, password }) => {
  const result = await axios.post(`${BASE_URL}/users/create`, { email, password });

  return result;
};

signup.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
