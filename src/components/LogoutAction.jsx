function LogoutAction(props) {
  const logoutTrigger = () => {
    // trigger
    props.onLogout();
  };

  return <button onClick={logoutTrigger}>Logout</button>;
}
export default LogoutAction;
