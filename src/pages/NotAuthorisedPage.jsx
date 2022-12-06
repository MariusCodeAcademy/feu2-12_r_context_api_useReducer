import { Link } from 'react-router-dom';

function NotAuthorisedPage(props) {
  return (
    <div>
      <h1>For logged in user only!</h1>

      <p>
        Please <Link to='/login'>Login</Link>
      </p>
    </div>
  );
}
export default NotAuthorisedPage;
