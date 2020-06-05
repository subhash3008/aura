import React from "react";
import styles from "./Documents.module.css";
import Sidebar from '../../shared/sidebar/Sidebar';
import {NavigationBar} from '../../shared/navigation-bar/NavigationBar'

const Documents = () => {
  return (
    <React.Fragment>
        <NavigationBar></NavigationBar>
        <Sidebar></Sidebar>
      <h1 className={styles.wrapper}>Documents</h1>
    </React.Fragment>
  );
}

export default Documents;