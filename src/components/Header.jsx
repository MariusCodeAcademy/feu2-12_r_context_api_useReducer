import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header className='main-header'>
      <nav>
        <NavLink className='nav-link' to='/' exact>
          Home
        </NavLink>
        <NavLink className='nav-link' to='/login'>
          Login
        </NavLink>
        <NavLink className='nav-link' to='/user-page'>
          Users Page
        </NavLink>
      </nav>
    </header>
  );
}
export default Header;
