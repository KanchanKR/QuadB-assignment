// /src/components/Login.js

import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';

function Login() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
