import React from "react";
import styles from "./Teams.module.css";
import Sidebar from '../../shared/sidebar/Sidebar';
import {NavigationBar} from '../../shared/navigation-bar/NavigationBar'

const Teams = () => {
  return (
    <React.Fragment>
        <NavigationBar></NavigationBar>
        <Sidebar></Sidebar>
      <h1 className={styles.wrapper}>Teams</h1>
    </React.Fragment>
  );
}

export default Teams;