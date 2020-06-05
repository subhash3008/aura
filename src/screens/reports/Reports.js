import React from "react";
import styles from "./Reports.module.css";
import Sidebar from '../../shared/sidebar/Sidebar';
import {NavigationBar} from '../../shared/navigation-bar/NavigationBar'

const Reports = () => {
  return (
    <React.Fragment>
        <NavigationBar></NavigationBar>
        <Sidebar></Sidebar>
      <h1 className={styles.wrapper}>Reports</h1>
    </React.Fragment>
  );
}

export default Reports;