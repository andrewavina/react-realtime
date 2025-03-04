import React from "react";
import styles from "./NavBar.module.css";

interface NavBarProps {
  setRoute: (route: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ setRoute }) => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          {/* <a href="/">Home</a> */}
          <button onClick={() => setRoute("home")}>Home</button>
        </li>
        <li className={styles.navItem}>
          {/* <a href="/add-stock">Add Stock</a> */}
          <button onClick={() => setRoute("add")}>Add Stock</button>
        </li>
        <li className={styles.navItem}>
          {/* <a href="/list">List</a> */}
          <button onClick={() => setRoute("list")}>List</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
