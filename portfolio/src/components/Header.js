import '../styles/App.css';

function Header() {
  // const currentRoute = window.location.pathname;
  // const classNameH = currentRoute === '/home' ? 'active-link' : '';
  // const classNameA = currentRoute === '/about' ? 'active-link' : '';
  return (
    <header>
      <h1>Jules ROUAULT</h1>
      <nav>
        <a href='#projects_cards'>My projects</a>
        <a href='#form'>Contact</a>
      </nav>
    </header>
  );
}

export default Header;