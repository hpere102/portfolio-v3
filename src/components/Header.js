import { NavLink, Link } from 'react-router-dom';


const lightMode = function() {
  document.body.classList.toggle('dark')
}


const Header = () => {


 
    return (
      <header>
       <div>
           <div className="name-cont">
           <Link activeClassName='active' to="/">Hector Perez</Link>
           </div>
           <div className="link-cont">
               <NavLink className="nav-link" activeClassName='active' to="/work">work</NavLink>
               <NavLink className="nav-link" activeClassName='active' to="/skills">skills</NavLink>
           </div>
       </div>
       <div>
           <div onClick={lightMode} className="switch"></div>
       </div>
  </header>
  
    );
  };

export default Header;