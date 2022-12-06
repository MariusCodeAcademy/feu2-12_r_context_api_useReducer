import { useContext } from 'react';
import AuthContext from '../store/AuthContext';

function LogoutAction(props) {
  // get value from context and console log it
  const val = useContext(AuthContext);

  console.log('val ===', val);

  const logoutTrigger = () => {
    // trigger
  };

  return <button onClick={logoutTrigger}>Logout {val}</button>;
}
export default LogoutAction;
