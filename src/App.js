import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';

import styles from './App.module.css';

import Homepage from './screens/homepage/Hompage';
import AccountSettings from './screens/account-settings/AccountSettings'

const App = () => {
  return (
    <div className={styles.App}>
      <Router>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signup" component={Homepage} />
        <Route exact path="/forgot-password" component={Homepage} />
        <Route exact path="/settings" component={AccountSettings} />
      </Router>
    </div>
  );
}

export default App;
