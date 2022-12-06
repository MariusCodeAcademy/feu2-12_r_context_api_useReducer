import { useHistory } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function LoginPage(props) {
  const history = useHistory();
  const handleLogin = (newLoginObj) => {
    console.log('handleLogin in LoginPage', newLoginObj);
    // if login success we redirect to userOnly page
    // imituojam teisinga email
    const validEmail = 'james@band.com';
    if (newLoginObj.email === validEmail) {
      // login success
      console.log('login success');
      // redirect
      history.push('/user-page');
    } else {
      // login fails
      console.log('login fails');
    }
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <p>Please login</p>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}
export default LoginPage;
