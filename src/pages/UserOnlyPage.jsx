import LogoutAction from '../components/LogoutAction';

function UserOnlyPage(props) {
  return (
    <div>
      <h1>UserOnlyPage</h1>
      <p>Welcome James</p>

      <LogoutAction onLogout={props.onLogout} />
    </div>
  );
}
export default UserOnlyPage;
