import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <section>
      <nav className={styles.navBar}>
        <div className={styles.brandName}>Nepizza</div>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/login" className={styles.link}>
              <button>
                <span>Login</span>
              </button>
            </Link>
          </li>

          <li>
            <Link to="/order" className={styles.link}>
              <button>
                <span>My Order</span>
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
