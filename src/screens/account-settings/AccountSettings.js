import React, { Component } from "react";

import styles from "./AccountSettings.module.css";
import commonStyles from '../../shared/Common.module.css';
import '../../css/react-setup.css';

import EditProfile from '../../components/account-settings/edit-profile/EditProfile'
import ChangePassword from '../../components/account-settings/change-password/ChangePassword'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


class AccountSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name)
    this.setState({ [name]: value });
  }

  render() {
    console.log('commonStyles : ', commonStyles);
    console.log('styles : ', styles);
    return (
      <div className={styles.container}>
        <div className={`row ${commonStyles.no_gutter}`}>
          <div className="col-md-12" align="center">
            <div style={{ textAlign: 'left' }} className="col-md-11">
              <p className={styles.text}>Account Settings</p>
              <p className="sub-text">Account Settings text to be filled</p>
            </div>
          </div>
        </div>
        <div className={`row ${styles.ac_card} ${commonStyles.no_gutter}`}>
          <div className="col-md-12" align="center">
            <div className="col-md-11">
              <div className={`card ${styles.ac_card}`}>
                <div className={`card-body ${styles.ac_card_body}`}>
                  <Tabs>
                    <TabList>
                      <Tab>Edit Profile</Tab>
                      <Tab>Change Password</Tab>
                    </TabList>
                    <TabPanel>
                      <EditProfile></EditProfile>
                    </TabPanel>
                    <TabPanel>
                      <ChangePassword></ChangePassword>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AccountSettings;