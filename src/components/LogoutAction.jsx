import { useContext } from 'react';
import AuthContext from '../store/AuthContext';

function LogoutAction(props) {
  // get value from context and console log it
  const ctx = useContext(AuthContext);

  console.log('val ===', ctx);

  const logoutTrigger = () => {
    // trigger
    ctx.logout();
  };

  return <button onClick={logoutTrigger}>Logout </button>;
}
export default LogoutAction;
