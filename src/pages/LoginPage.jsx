import LoginForm from '../components/LoginForm';

function LoginPage(props) {
  const handleLogin = (newLoginObj) => {
    console.log('handleLogin in LoginPage', newLoginObj);
    // if login success we redirect to userOnly page
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
