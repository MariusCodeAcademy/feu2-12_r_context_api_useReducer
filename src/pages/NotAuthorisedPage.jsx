import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function NotAuthorisedPage(props) {
  return (
    <div>
      <h1>For logged in user only!</h1>

      {/* <p>
        Please <Link to='/login'>Login</Link>
      </p> */}
      {/* ideti Login form */}
      {/* padaryti kad veiktu su contextu */}
      <button>Show Form</button>
      {/* paspaudus sita mygtuka vietoje jo atsiranda forma */}
      <LoginForm hideDebug />
    </div>
  );
}
export default NotAuthorisedPage;
