import React from "react";
import styles from './searchBar.module.css'
import {FaSearch} from "react-icons/fa";

const SearchBarComponent = () => {
  return (
    <div className={styles["searchBarWrapper"]}>
       <FaSearch size={"20px"} />
      <input  className={styles["searchBar"]} placeholder="Search"></input>
    </div>
  );
};
export { SearchBarComponent };
