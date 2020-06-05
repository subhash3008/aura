import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';

import styles from './App.module.css';

import Homepage from './screens/homepage/Hompage';
import AccountSettings from './screens/account-settings/AccountSettings';
import Dashboard from './screens/dashboard/Dashboard';
import Documents from './screens/documents/Documents';
import Reports from './screens/reports/Reports';
import Teams from './screens/teams/Teams';
import Templates from './screens/templates/Templates';
import UploadedDoc from './screens/uploaded-doc/UploadedDoc'
const App = () => {
  return (
    <div className={styles.App}>
      <Router>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signup" component={Homepage} />
        <Route exact path="/forgot-password" component={Homepage} />
        <Route exact path="/settings" component={AccountSettings} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/documents" component={Documents} />
        <Route exact path="/reports" component={Reports} />
        <Route exact path="/teams" component={Teams} />
        <Route exact path="/templates" component={Templates} />
        <Route exact path="/Uploaded-doc" component={UploadedDoc} />
      </Router>
    </div>
  );
}

export default App;
