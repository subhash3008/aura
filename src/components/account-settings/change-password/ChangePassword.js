import React, { Component } from "react";
import styles from "./ChangePassword.module.css";
import commonStyles from '../../../shared/Common.module.css';
import ProgressBar from 'react-bootstrap/ProgressBar'

const passwordStrength = require('check-password-strength')

const password_strength_meter_map={
    0:0,
    1:50,
    2:100
}
class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oldPassword: "",
            newPassword: "",
            reEnterPassword: "",
            password_strength_meter:0
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
        if(name==='newPassword' && value !== ''){
        const st =    passwordStrength(value).id
        this.setState({password_strength_meter:st})
        }
    }

    render() {
        return (
            <div>
                <div className={styles.change_password_container}>
                    <div className={styles.change_password_form_section}>
                        <form>
                            <p className={commonStyles.common_form_label}>ENTER OLD PASSWORD</p>
                            <input className={commonStyles.common_form_text_field} type="text" name="oldPassword" value={this.state.oldPassword} onChange={this.handleUserInput}></input>
                            <p className={commonStyles.common_form_label}>ENTER NEW PASSWORD</p>
                            <input className={commonStyles.common_form_text_field} type="text" name="newPassword" value={this.state.newPassword} onChange={this.handleUserInput}></input>
                            <div className={styles.password_strength_container}>
                                    <span  className={styles.password_strength_label}>Password Strength: </span>
                              
                                <div className="password_strength_progress_container" >
                                    < ProgressBar  now={password_strength_meter_map[this.state.password_strength_meter]} />
                                </div>
                            </div>

                            <p className={commonStyles.common_form_label}>RE-ENTER PASSWORD</p>
                            <input className={commonStyles.common_form_text_field} type="text" name="reEnterPassword" value={this.state.reEnterPassword} onChange={this.handleUserInput}></input>
                            <div className={styles.edit_profile_submit_container}>
                                <button type="button" className={`btn btn-primary-outline ${commonStyles.common_submit_btn} ${commonStyles.btn_ripple}`}>Save Changes</button>
                            </div>
                        </form>
                    </div>
                    <div className={styles.password_rules_container}>
                        <div className={styles.password_rules_section}>
                            <p>Password Rules</p>
                            <div className={styles.password_rules}>
                                <p>* Min 8 characters</p>
                                <p>* Upper-case characters</p>
                                <p>* Lower-case characters</p>
                                <p>* Number 0-9</p>
                                <p>* Special characters (Eg.,!%^&*)</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default ChangePassword;