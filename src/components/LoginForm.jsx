import { useState } from 'react';

//
function LoginForm(props) {
  // isitraukti forma i LoginPage
  // sukurti state emailValue ir passwordValue
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  // susieti juos su inputais su two way binding, (onChange ir value)
  // sustabdyti forma nuo puslapio perkrovimo prisijungiant prie jos pateikimo evento
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log('react control the form');
    const loginObj = {
      email: emailValue,
      password: passwordValue,
    };
    // console.log('loginObj ===', loginObj);
    // 4. LoginForm.jsx gauti ctx
    // 5. iskviesti login funkcija, paduodant loginObj kaip argumenta
  };
  // pateikiant forma isspausditi login objekta
  // pateikiant forma gauti login objekta LoginPage ir isspausdinti konsoleje

  return (
    <div>
      <h2>Login here</h2>
      <form onSubmit={submitHandler} className='card'>
        <input
          onChange={(e) => setEmailValue(e.target.value)}
          value={emailValue}
          type='text'
          placeholder='email'
        />
        <input
          onChange={(e) => setPasswordValue(e.target.value)}
          value={passwordValue}
          type='password'
          placeholder='password'
        />
        <button type='submit'>Login</button>
      </form>
      <hr />
      <h3>Debug values</h3>
      <p>Email: {emailValue}</p>
      <p>Password: {passwordValue}</p>
    </div>
  );
}
export default LoginForm;
