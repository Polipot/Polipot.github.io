import '../styles/App.css';

function Header() {
   return (
      <header>
         <div className='header_left'>
            <h1>Jules ROUAULT</h1>
         </div>
         <nav>
            <a href='#projects_cards'>My projects</a>
            <a href='#form'>Contact</a>
         </nav>
      </header>
   );
}

export default Header;