import axios from 'axios';
import { BASE_URL } from '.';

interface loginProps {
  email: string;
  password: string;
}

const login = async ({ email, password }: loginProps) => {
  const result = await axios.post(`${BASE_URL}/users/login`, { email, password });

  return result.data;
};

export default login;
