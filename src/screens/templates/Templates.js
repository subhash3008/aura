import React from "react";
import styles from "./Templates.module.css";
import Sidebar from '../../shared/sidebar/Sidebar';
import {NavigationBar} from '../../shared/navigation-bar/NavigationBar'

const Templates = () => {
  return (
    <React.Fragment>
        <NavigationBar></NavigationBar>
        <Sidebar></Sidebar>
      <h1 className={styles.wrapper}>Templates</h1>
    </React.Fragment>
  );
}

export default Templates;