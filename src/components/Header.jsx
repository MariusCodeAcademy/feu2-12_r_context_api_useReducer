import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from './../store/AuthContext';

function Header(props) {
  // gauti context
  const ctx = useContext(AuthContext);
  console.log('ctx ===', ctx);
  // 1 nustatyti isUserLoggedIn reiksme is ctx
  const isUserLoggedIn = true;

  // 2 nustatyti userEmail reiksme is ctx
  const userEmail = '';

  return (
    <header className='main-header'>
      <nav>
        <NavLink className='nav-link' to='/' exact>
          Home
        </NavLink>

        {isUserLoggedIn && (
          <NavLink className='nav-link' to='/user-page'>
            Users Page
          </NavLink>
        )}
        {!isUserLoggedIn && (
          <NavLink className='nav-link' to='/login'>
            Login
          </NavLink>
        )}
        {isUserLoggedIn && (
          <p style={{ marginBottom: 0 }} className='nav-link'>
            {userEmail}
          </p>
        )}
        {isUserLoggedIn && (
          <Link className='nav-link' to={'/login'}>
            {/* headeryje paspaudus lougout span, onClick atsiloginam  */}
            <span>Logout</span>
          </Link>
        )}

        {/* jei useris prisilogines, tai rodom louguot */}
        {/* jei useris prisilogines, tai userio email */}
        {/* jei neprisilogines login */}
      </nav>
    </header>
  );
}
export default Header;
