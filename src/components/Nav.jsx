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
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/movies'>Movie</Link>
          </li>
          <li>
            <Link to='/tv'>Tv</Link>
          </li>
          <li>
            <Link to='/Series'>Series</Link>
          </li>
        </ul>
      </nav>

      <button onClick={toggleTheme}>{darkMode? 'Dark mode':'Light Mode'}</button>
    </div>
  );
}
