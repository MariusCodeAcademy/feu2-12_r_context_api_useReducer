import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserOnlyPage from './pages/UserOnlyPage';
import Header from './components/Header';
import { useState } from 'react';
import AuthContext from './store/AuthContext';

function App() {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState('');
  const isUserLoggedIn = !!userEmail;
  const handleLogin = (newLoginObj) => {
    // console.log('handleLogin in LoginPage', newLoginObj);
    // if login success we redirect to userOnly page
    // imituojam teisinga email
    const validEmail = 'james@band.com';
    if (newLoginObj.email === validEmail) {
      // login success
      console.log('login success');
      // redirect
      setUserEmail(newLoginObj.email);
      history.push('/user-page');
    } else {
      // login fails
      console.log('login fails');
    }
  };

  const handleLogout = () => {
    setUserEmail('');
    history.push('/login');
  };

  // 3 prideti i contextValue  handleLogin
  const contextValue = {
    userEmail: userEmail,
    isUserLoggedIn: isUserLoggedIn,
    logout: handleLogout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      <div className='App container'>
        <Header />
        <Switch>
          <Route path={'/user-page'}>
            <UserOnlyPage />
          </Route>
          <Route path={'/login'}>
            <LoginPage />
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
