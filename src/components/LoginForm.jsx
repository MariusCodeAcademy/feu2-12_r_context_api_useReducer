//
function LoginForm(props) {
  // isitraukti forma i LoginPage
  // sukurti state emailValue ir passwordValue
  // susieti juos su inputais su two way binding, (onChange ir value)
  // sustabdyti forma nuo puslapio perkrovimo prisijungiant prie jos pateikimo evento
  // pateikiant forma isspausditi login objekta
  // pateikiant forma gauti login objekta LoginPage ir isspausdinti konsoleje

  return (
    <div>
      <h2>Login here</h2>
      <form>
        <input type='text' placeholder='email' />
        <input type='password' placeholder='password' />
        <button type='submit'>Login</button>
      </form>
      <hr />
      <h3>Debug values</h3>
      <p>Email: </p>
      <p>Password: </p>
    </div>
  );
}
export default LoginForm;
