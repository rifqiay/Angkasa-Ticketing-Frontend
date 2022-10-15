import React from "react";
import { Link } from "react-router-dom";
import styles from "./dropdown.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Dropdown = ({ setSortBy, setQuery, setParams, params }) => {
  return (
    <div className={`dropdown ${styles["dropdown-wrapper"]}`}>
      <Link className={`btn dropdown-toggle ${styles.toggler}`} to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        <label className={styles.label}>Sort by</label>
      </Link>

      <ul className={`dropdown-menu ${styles.menu}`} aria-labelledby="dropdownMenuLink">
        <li
          onClick={(e) => {
            e.preventDefault();
            let sort = "price";
            setSortBy(sort);
            let newParams = {
              sort,
            };
            setParams({
              ...params,
              ...newParams
            })
            setQuery({
              ...params,
              ...newParams,
            });
          }}
          className={styles.options}
        >
          {" "}
          Price
        </li>
        <li>
          <Link to="#" className={styles.options}>
            Departure time
          </Link>
        </li>
        <li>
          <Link to="#" className={styles.options}>
            Arrival time
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
