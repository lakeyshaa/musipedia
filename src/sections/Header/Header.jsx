import { NavLink } from 'react-router-dom';
import './style.css';


function Header(props) {
    return (
        <header>
            <div className="y-wrap">
            <nav className="navs">   
                    <h2>{props.text}</h2>
                    <ul>
                    <li>
                      <NavLink to="./">Home</NavLink>
                      </li>
                    <li>
                      <NavLink to="/Events.jsx">Events</NavLink>
                      </li>
                    <li>
                    <NavLink to="/Login">Meet the Dev</NavLink>
                  </li>
                </ul>
                </nav>
                </div>
        </header>
    );
  }
  
  export default Header;