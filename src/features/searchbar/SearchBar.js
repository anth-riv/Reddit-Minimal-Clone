import React from "react";

import styles from "./SearchBar.module.css"


export const SearchBar = () => {
    return (
        <div>
            <input type="text" className={styles.input} placeholder="Search" />
        </div>
    )
}