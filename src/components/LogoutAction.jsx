import { useContext } from 'react';
import AuthContext from '../store/AuthContext';

function LogoutAction(props) {
  // get value from context and console log it
  const ctx = useContext(AuthContext);

  console.log('val ===', ctx);

  const logoutTrigger = () => {
    // trigger
    ctx.sayHi();
  };

  return <button onClick={logoutTrigger}>Logout {ctx.name}</button>;
}
export default LogoutAction;
