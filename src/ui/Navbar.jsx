import { Link, NavLink } from "react-router-dom";
import classes from "./navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={classes.navbarContainer}>
        <a href="" className={classes.navItem}>
          History{" "}
        </a>
        <a href="" className={classes.navItem}>
          {" "}
          Topics{" "}
        </a>
        <a href="" className={classes.navItem}>
          {" "}
          Math{" "}
        </a>
        <a href="" className={classes.navItem}>
          {" "}
          How to use{" "}
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
