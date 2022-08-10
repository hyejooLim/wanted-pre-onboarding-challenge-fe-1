import axios from 'axios';
import { BASE_URL } from '.';

interface signupProps {
  email: string;
  password: string;
}

const signup = async ({ email, password }: signupProps) => {
  const result = await axios.post(`${BASE_URL}/users/create`, { email, password });

  return result;
};

export default signup;
