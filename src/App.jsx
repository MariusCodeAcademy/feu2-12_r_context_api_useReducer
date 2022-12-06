import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserOnlyPage from './pages/UserOnlyPage';

function App() {
  return (
    <div className='App container'>
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
  );
}

export default App;
