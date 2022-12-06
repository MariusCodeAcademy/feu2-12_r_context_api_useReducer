import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserOnlyPage from './pages/UserOnlyPage';
import Header from './components/Header';
import { useState } from 'react';
import AuthContext from './store/AuthContext';
import NotAuthorisedPage from './pages/NotAuthorisedPage';
import { sendData } from './helper';

function App() {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState('');
  // 1. sukurti state tokenValue
  // 3. nustatyti numatytaje verte kaip '' arba reiksme is localstorage
  const isUserLoggedIn = !!userEmail;

  const handleLogin = async (newLoginObj) => {
    // console.log('handleLogin in LoginPage', newLoginObj);
    // if login success we redirect to userOnly page
    // imituojam teisinga email

    const loginResultObj = await sendData(newLoginObj);
    console.log('loginResultObj ===', loginResultObj);
    if (loginResultObj.token) {
      // login success
      console.log('login success');
      // redirect
      setUserEmail(newLoginObj.email);
      // 2. issaugoti token state ir localstorage
      history.push('/user-page');
    } else {
      // login fails
      console.log('login fails', loginResultObj.error);
    }
  };

  const handleLogout = () => {
    setUserEmail('');
    history.push('/login');
  };

  const contextValue = {
    userEmail: userEmail,
    isUserLoggedIn: isUserLoggedIn,
    logout: handleLogout,
    login: handleLogin,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      <div className='App container'>
        <Header />
        <Switch>
          <Route path={'/user-page'}>
            {/* protecting the user route */}
            {isUserLoggedIn ? (
              <UserOnlyPage />
            ) : (
              <Redirect to='/not-authorised' />
            )}
          </Route>

          <Route path={'/not-authorised'}>
            <NotAuthorisedPage />
          </Route>
          <Route path={'/login'}>
            <LoginPage />
          </Route>
          <Route path={'/home'}>
            <Redirect to='/' />
          </Route>
          <Route path={'/'} exact>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
