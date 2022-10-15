import React from "react";

import styles from "./searchbar.module.css";

import search from "../../assets/search.svg";
import Input from "../inputv2/Input";

const Searchbar = () => {
  return (
    <div className={styles.searchbar}>
      <div className={styles["search-icon"]}>
        <img src={search} alt="" />
      </div>
      <Input
        id="searchbar"
        name="searchbar"
        type="text"
        className={styles.searchfield}
        placeholder="Where you want to go?"
      />
    </div>
  );
};

export default Searchbar;
