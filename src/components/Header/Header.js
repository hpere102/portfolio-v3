import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import './header.css'


const lightMode = function() {
  document.body.classList.toggle('dark');
  
}




const Header = () => {

  const [showForm, setShowForm] = React.useState(false)
  const show = () => setShowForm(true)
  const hide = () => setShowForm(false)
  
 
    return (
      <header>
       <div className="header-left">
           <div className="name-cont">
           <Link className="name-link" to="/">Hector Perez</Link>
           </div>
           <div className="link-cont">
               <NavLink className="nav-link" activeClassName='active' to="/work">Work</NavLink>
               <NavLink className="nav-link" activeClassName='active' to="/skills">Skills</NavLink>
           </div>
       </div>
       <div className="header-right">
       { showForm ? <div onClick={() => { lightMode(); hide(); }} className="switch-light"><i class="bi bi-moon-fill"></i></div> : <div onClick={() => { lightMode(); show(); }} className="switch"><i class="bi bi-brightness-high"></i></div> }
       </div>
  </header>
  
    );
  };

export default Header;