import React from "react";
import styles from "./NavBar.module.css"
import { SearchBar } from "../../features/searchbar/SearchBar";

export const NavBar = () => {

  return (
    <div className={styles.navbar}>
      <div className={styles.navTitle}>
        <h3>Reddit<span>Minimal</span></h3>
      </div>
      <div>
        <SearchBar className={styles.search} />
      </div>
    </div>
  )
}