import { useHistory } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function LoginPage(props) {
  // const history = useHistory();

  return (
    <div>
      <h1>LoginPage</h1>
      <p>Please login</p>
      <LoginForm />
    </div>
  );
}
export default LoginPage;
