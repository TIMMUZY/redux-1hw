import classes from "./Header.module.css";
import { Outlet } from "react-router-dom";


const Header = () => {
    return (
      <>
        <header>
          <div className={classes.nav}>
            <h1>Here is Logo</h1>
            <ul className={classes.navbar}>
              <li>
                <h2>Home</h2>
              </li>
              <li>
                <h2>About us</h2>
              </li>
              <li>
                <h2>Contact</h2>
              </li>
              <li>
                <h2>News</h2>
              </li>
              <li>
                <h2>Services</h2>
              </li>
            </ul>
          </div>
        </header>
        <Outlet />
      </>
    );
  };
  
  export default Header;