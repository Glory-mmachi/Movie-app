import { Link } from "react-router-dom";
import { useTheme } from "../../ContextApi";
import 'boxicons'

export default function Nav() {
  const {toggleTheme,darkMode}=useTheme()
  return (

    <div className="navbar container">
      <nav>
        <ul>
          <li>
            <Link to='/' style={{color: darkMode? '#000':'#fff'}}>Home</Link>
          </li>
          <li>
            <Link to='/movies' style={{color: darkMode? '#000':'#fff'}}>Movie</Link>
          </li>
          <li>
            <Link to='/tv' style={{color: darkMode? '#000':'#fff'}}>Tv</Link>
          </li>
          <li>
            <Link to='/Series' style={{color: darkMode? '#000':'#fff'}}>Series</Link>
          </li>
        </ul>
      </nav>

      <button onClick={toggleTheme}>{darkMode? 'Dark mode':'Light Mode'}</button>
    </div>
  );
}
